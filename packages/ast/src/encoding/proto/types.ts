import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { pascal } from 'case';
import { identifier, tsPropertySignature, functionDeclaration, commentBlock, renderNameSafely } from '../../utils';
import { GenericParseContext, ProtoParseContext } from '../context';

export const SCALAR_TYPES = [
    'string',
    'double',
    'float',
    'int32',
    'uint32',
    'sint32',
    'fixed32',
    'sfixed32',
    'int64',
    'uint64',
    'sint64',
    'fixed64',
    'sfixed64',
    'bytes',
    'bool'
];

export const NATIVE_TYPES = [
    ...SCALAR_TYPES,

    // TODO move these out
    'google.protobuf.Timestamp',
    'google.protobuf.Duration',
    'google.protobuf.Any',
]

export const getTSTypeFromProtoType = (context: GenericParseContext, type: string) => {
    switch (type) {
        case 'string':
            return t.tsStringKeyword();
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.tsNumberKeyword();
        case 'int64':
        case 'uint64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.tsTypeReference(t.identifier('Long'))
        case 'bytes':
            return t.tsTypeReference(t.identifier('Uint8Array'));
        case 'bool':
            return t.tsBooleanKeyword();
        case 'google.protobuf.Timestamp':
            if (context.options.useDate === 'timestamp') {
                return t.tsTypeReference(t.identifier('Timestamp'));
            }
            if (context.options.useDate === 'date') {
                return t.tsTypeReference(t.identifier('Date'));
            }
            return t.tsTypeReference(t.identifier('Date'));
        case 'google.protobuf.Duration':
            return t.tsStringKeyword();
        case 'google.protobuf.Any':
            return t.tsTypeReference(t.identifier('Any'));
        default:
            throw new Error('getTSTypeFromProtoType() type not found');
    };
};

// https://github.com/protobufjs/protobuf.js/blob/master/src/types.js#L38-L54
export const types = {
    basic: {
        double: 1,
        float: 5,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0,
        string: 2,
        bytes: 2
    },
    defaults: {
        double: 0,
        float: 0,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 0,
        sfixed32: 0,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 0,
        sfixed64: 0,
        bool: false,
        string: '',
        bytes: [],
        undefined: null
    },
    long: { int64: 0, uint64: 0, sint64: 0, fixed64: 1, sfixed64: 1 },
    mapKey: {
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0,
        string: 2
    },
    packed: {
        double: 1,
        float: 5,
        int32: 0,
        uint32: 0,
        sint32: 0,
        fixed32: 5,
        sfixed32: 5,
        int64: 0,
        uint64: 0,
        sint64: 0,
        fixed64: 1,
        sfixed64: 1,
        bool: 0
    }
};
export const getWireNumber = (type) => {
    if (types.basic.hasOwnProperty(type)) {
        return types.basic[type];
    }
    return 2;
};

export const getPackedWireNumber = (type) => {
    if (types.packed.hasOwnProperty(type)) {
        return types.packed[type];
    }
    return 2;
};

export const getTagNumber = (field: ProtoField) => {
    let wire = getWireNumber(field.type);
    if (field.parsedType.type === 'Enum') {
        wire = 0;
    }
    if (field.rule === 'repeated') {
        wire = 2;
    }
    return ((field.id << 3) | wire) >>> 0;
};


export const getDefaultTSTypeFromProtoType = (field: ProtoField, isOptional: boolean) => {

    if (isOptional) {
        return t.identifier('undefined');
    }

    if (field.rule === 'repeated') {
        return t.arrayExpression([]);
    }

    if (field.keyType) {
        return t.objectExpression([])
    }

    if (field.parsedType?.type === 'Enum') {
        return t.numericLiteral(0);
    }

    switch (field.type) {
        case 'string':
            return t.stringLiteral('');
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.numericLiteral(0);
        case 'uint64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('UZERO')
            );
        case 'int64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('ZERO')
            );
        case 'bytes':
            return t.newExpression(
                t.identifier('Uint8Array'),
                []
            );
        case 'bool':
            return t.booleanLiteral(false);

        // OTHER TYPES
        case 'google.protobuf.Timestamp':
            return t.identifier('undefined');
        case 'google.protobuf.Duration':
            return t.identifier('undefined');
        case 'google.protobuf.Any':
            return t.identifier('undefined');

        case 'cosmos.base.v1beta1.Coins':
            return t.arrayExpression([]);
        case 'cosmos.base.v1beta1.Coin':
            return t.identifier('undefined');

        default:
            // console.warn('getDefaultTSTypeFromProtoType() type not found: ' + type);
            return t.identifier('undefined');
    };
};

const lowerFirst = (str: string) => {
    return str.charAt(0).toLowerCase() + str.substring(1);
};
const upperFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

export const getEnumToJsonName = (name) => {
    return lowerFirst(name) + 'ToJSON';
};

export const getEnumFromJsonName = (name) => {
    return lowerFirst(name) + 'FromJSON';
};

export const getFieldsTypeName = (field: ProtoField) => {
    if (field?.scope.length <= 1) return field.parsedType.name;
    const [_pkg, ...scopes] = field.scope;
    return [...scopes, field.parsedType.name].join('_');
};

export const getKeyTypeEntryName = (typeName: string, prop: string) => {
    return `${typeName}_${pascal(prop)}Entry`;
};

export const getBaseCreateTypeFuncName = (name) => {
    return `createBase${upperFirst(name)}`;
};

export const getOneOfs = (type: ProtoType) => {
    const keys = Object.keys(type.oneofs ?? {});
    if (!keys.length) return [];
    if (keys.length !== 1) throw new Error('getOneOfs() oneofs cardinality not known!');
    return type.oneofs[keys[0]].oneof;
};

export const getFieldOptionality = (field: ProtoField, isOneOf: boolean) => {
    return isOneOf || field?.options?.['(gogoproto.nullable)'];
};

export const getObjectNameOld = (name: string, scope: string[] = []) => {
    if (!scope.length || scope.length === 1) return name;
    const [_pkg, ...scopes] = scope;
    return [...scopes, name].join('_')
};

const getProtoFieldTypeName = (context: ProtoParseContext, field: ProtoField) => {
    let name = context.getTypeName(field)
    return renderNameSafely(name);
};

const getProtoField = (context: ProtoParseContext, field: ProtoField) => {
    let ast: any = null;
    let optional = false;

    if (
        field.parsedType.name === 'Any' &&
        field.options?.['(cosmos_proto.accepts_interface)']) {
        // look for implements_interface where
        // (cosmos_proto.implements_interface) === (cosmos_proto.accepts_interface)
        console.log(field);
        /*

        normally you would lookup from the current ref however, there is no actual type of this referenced Union type name so you need to iterate through all of the types in the ref and any imports

        Q: should we create a type that is the Union so we can reference it? or should we just always look for this and explode the definition in place wherever we use it?

        IDEA: maybe in parser, we should add meta info when we find `cosmos_proto.implements_interface` and `cosmos_proto.accepts_interface` so it's easy to query when needed, inline on this field
        */
    }

    if (field.options?.['(gogoproto.nullable)']) {
        optional = true;
    }

    if (NATIVE_TYPES.includes(field.type)) {
        ast = getTSTypeFromProtoType(context, field.type);
    } else {
        ast = t.tsTypeReference(t.identifier(getProtoFieldTypeName(context, field)));
    }

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSTypeFromProtoType(context, field.keyType)
                        )
                    )
                ],
                    t.tsTypeAnnotation(ast)
                )
            ])
        ]);
    }

    return ast;
};

export const createProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(name),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).reduce((m, fieldName) => {
                const isOneOf = oneOfs.includes(fieldName);
                const field = proto.fields[fieldName];
                const propSig = tsPropertySignature(
                    t.identifier(fieldName),
                    t.tsTypeAnnotation(
                        getProtoField(context, field)
                    ),
                    getFieldOptionality(field, isOneOf)
                );

                const comments = [];
                if (field.comment) {
                    comments.push(
                        commentBlock(field.comment)
                    );
                }
                if (field.options?.deprecated) {
                    comments.push(
                        commentBlock('@deprecated')
                    );
                }
                if (comments.length) {
                    propSig.leadingComments = comments;
                }

                m.push(propSig)
                return m;
            }, [])
        )
    ));

    const comments = [];

    if (proto.comment) {
        comments.push(commentBlock(proto.comment));
    }

    if (proto.options?.deprecated) {
        comments.push(commentBlock('@deprecated'));
    }

    if (comments.length) {
        declaration.leadingComments = comments;
    }


    return declaration;
};


export const createCreateProtoType = (name: string, proto: ProtoType) => {
    const oneOfs = getOneOfs(proto);

    const fields = Object.keys(proto.fields).map(key => {
        const isOneOf = oneOfs.includes(key);
        const isOptional = getFieldOptionality(proto.fields[key], isOneOf)
        return {
            name: key,
            ...proto.fields[key],
            isOptional
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(field, field.isOptional)
            )
        })


    return functionDeclaration(t.identifier(getBaseCreateTypeFuncName(name)),
        [],
        t.blockStatement([
            t.returnStatement(t.objectExpression(
                [
                    ...fields,
                ]
            ))
        ]), false, false, t.tsTypeAnnotation(
            t.tsTypeReference(t.identifier(name))
        ))
};

