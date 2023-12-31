import * as t from '@babel/types';
import { FromJSONMethod } from './index';
export declare const fromJSON: {
    string(args: FromJSONMethod): t.ObjectProperty;
    number(args: FromJSONMethod): t.ObjectProperty;
    double(args: FromJSONMethod): t.ObjectProperty;
    float(args: FromJSONMethod): t.ObjectProperty;
    int32(args: FromJSONMethod): t.ObjectProperty;
    sint32(args: FromJSONMethod): t.ObjectProperty;
    uint32(args: FromJSONMethod): t.ObjectProperty;
    fixed32(args: FromJSONMethod): t.ObjectProperty;
    sfixed32(args: FromJSONMethod): t.ObjectProperty;
    bool(args: FromJSONMethod): t.ObjectProperty;
    long(args: FromJSONMethod): t.ObjectProperty;
    int64(args: FromJSONMethod): t.ObjectProperty;
    uint64(args: FromJSONMethod): t.ObjectProperty;
    sint64(args: FromJSONMethod): t.ObjectProperty;
    fixed64(args: FromJSONMethod): t.ObjectProperty;
    sfixed64(args: FromJSONMethod): t.ObjectProperty;
    type(args: FromJSONMethod): t.ObjectProperty;
    enum(args: FromJSONMethod): t.ObjectProperty;
    bytes(args: FromJSONMethod): t.ObjectProperty;
    duration(args: FromJSONMethod): t.ObjectProperty;
    durationString(args: FromJSONMethod): t.ObjectProperty;
    timestamp(args: FromJSONMethod): t.ObjectProperty;
    timestampTimestamp(args: FromJSONMethod): t.ObjectProperty;
    timestampDate(args: FromJSONMethod): t.ObjectProperty;
    keyHash(args: FromJSONMethod): t.ObjectProperty;
    array(args: FromJSONMethod, expr: t.Expression): t.ObjectProperty;
};
export declare const arrayTypes: {
    string(): t.CallExpression;
    bool(): t.CallExpression;
    bytes(args: FromJSONMethod): t.CallExpression;
    long(args: FromJSONMethod): t.Expression;
    uint64(args: FromJSONMethod): t.Expression;
    int64(args: FromJSONMethod): t.Expression;
    sint64(args: FromJSONMethod): t.Expression;
    fixed64(args: FromJSONMethod): t.Expression;
    sfixed64(args: FromJSONMethod): t.Expression;
    number(): t.CallExpression;
    uint32(): t.CallExpression;
    int32(): t.CallExpression;
    sint32(): t.CallExpression;
    fixed32(): t.CallExpression;
    sfixed32(): t.CallExpression;
    double(): t.CallExpression;
    float(): t.CallExpression;
    enum(args: FromJSONMethod): t.CallExpression;
    type(args: FromJSONMethod): t.CallExpression;
};
