import * as t from '@babel/types';
import { ProtoType } from '../../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoParseContext } from '../../context';
interface AminoConverterItemParams {
    root: ProtoRoot;
    context: AminoParseContext;
    proto: ProtoType;
}
export declare const createAminoConverterItem: ({ root, context, proto }: AminoConverterItemParams) => t.ObjectProperty;
interface AminoConverterParams {
    name: string;
    root: ProtoRoot;
    context: AminoParseContext;
    protos: ProtoType[];
}
export declare const createAminoConverter: ({ name, root, context, protos }: AminoConverterParams) => t.ExportNamedDeclaration;
export {};
