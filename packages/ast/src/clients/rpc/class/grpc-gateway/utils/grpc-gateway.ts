import { GenericParseContext } from '../../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType } from '../../utils/rpc';

import * as t from '@babel/types'

// initRequest is used in constructing GRPC-Gateway methods
// It is a second parameter in method signature.
// ex: static Send(req: MsgSend, initReq?: fm.InitReq)
// always the same, hence, declared outside of grpcGatewayMethodDefinition
export const initRequest = identifier(
    'initRequest',
    t.tSTypeAnnotation(
        t.tsTypeReference(
            t.tsQualifiedName(
                t.identifier('fm'),
                t.identifier('initReq')
            ),
        )
    ),
    true,
)

// initReqProperties contains information for initReq parameter in fetchReq arguments
const getInitReqProperties = () => {
    const initReqProperties = [];

    // <...initReq>
    const argSpreadInit: t.SpreadElement = t.spreadElement(
        t.identifier('initReq')
    )

    // <method: 'POST'>
    const argPOST: t.ObjectProperty = t.objectProperty(
        t.identifier('method'),
        t.stringLiteral('POST'),
        false,
        false,
    )

    // <JSON.stringify(req, fm.replacer)>
    const argBody: t.ObjectProperty = t.objectProperty(
        t.identifier('body'),
        t.callExpression(
            t.memberExpression(
                t.identifier('JSON'),
                t.identifier('stringify'),
                false,
            ),
            [
                t.identifier('req'),
                t.memberExpression(
                    t.identifier('fm'),
                    t.identifier('replacer'),
                    false
                )
            ]
        )
    )

    initReqProperties.push(argSpreadInit, argPOST, argBody)
    return initReqProperties
}

// fetchArgs will be used in method body's return statement expression.
// Contains arguments to fm.fetchReq
const getFetchReqArgs = (
    name: string,
    packageImport: string
) => {
    const fetchArgs = [];

    // first argument of fetchReq
    const argTemplateLiteral = t.templateLiteral(
        [
            t.templateElement(
                {
                    // todo: make dynamic
                    raw: '/' + packageImport + '/' + name,
                    cooked: '/' + packageImport + '/' + name
                },
                true,
            )
        ], // quasis
        [], // empty expressions
    )

    // adds proto path to fetchReq
    fetchArgs.push(argTemplateLiteral);

    // initReqProperties (contains information for initReq parameter in fetchReq) arguments: 
    const initReqProperties = getInitReqProperties()
    
    const fetchArgsInitReqObj = t.objectExpression(
        initReqProperties
    )
    // adds initReq parameter to fetchReq
    fetchArgs.push(fetchArgsInitReqObj)

    return fetchArgs
}

export const grpcGatewayMethodDefinitionNoBody = (
    context: GenericParseContext,
    name: string,
    msg: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {
    console.log(packageImport);
    const requestType = svc.requestType;
    const responseType = svc.responseType;

    // first parameter in method
    // ex: static Send(request: MsgSend)
    // paramRequst is an object representing everything in brackets here
    const paramRequst = identifier(
        'request',
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType),
            )
        ),
        false // todo: work around optional
    ); 

    // fetchArgs will be used in method body's return statement expression.
    // Contains arguments to fm.fetchReq
    const fetchArgs = getFetchReqArgs(name, packageImport)
    
    // method's body
    // const body = t.blockStatement(
    //     [
    //         t.returnStatement(
    //             t.callExpression(
    //                 t.memberExpression(
    //                     t.identifier('fm'),
    //                     t.identifier('fetchReq'),
    //                 ),
    //                 fetchArgs,
    //             )
    //         )
    //     ]
    // )

    return {classMethod: classMethod(
        'method',
        t.identifier(name),
        [paramRequst, initRequest], // params
        null, 
        returnReponseType(responseType),
        [],
        false,
        true,   // static 
    ), fetchArgs: fetchArgs}
}