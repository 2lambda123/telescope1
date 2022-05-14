import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../types';
export interface EncodeMethod {
    typeName: string;
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const encodeMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => any[];
export declare const encodeMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
