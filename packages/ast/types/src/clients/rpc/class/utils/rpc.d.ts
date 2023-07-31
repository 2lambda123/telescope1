import * as t from '@babel/types';
export declare const processRpcComment: (e: ProtoServiceMethod) => any;
export declare const cleanType: (ResponseType: string) => string;
export declare const returnReponseType: (ResponseType: string) => t.TSTypeAnnotation;
export declare const optionalBool: (hasParams: boolean, fieldNames: string[]) => boolean;
