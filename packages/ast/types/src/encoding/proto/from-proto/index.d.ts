import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@osmonauts/types';
export declare const fromProtoTypeMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
