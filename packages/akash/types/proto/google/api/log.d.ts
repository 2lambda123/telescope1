import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LabelDescriptor } from "../../google/api/label";
/**
 * A description of a log type. Example in YAML format:
 *
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptor {
    /**
     * The name of the log. It must be less than 512 characters long and can
     * include the following characters: upper- and lower-case alphanumeric
     * characters [A-Za-z0-9], and punctuation characters including
     * slash, underscore, hyphen, period [/_-.].
     */
    name: string;
    /**
     * The set of labels that are available to describe a specific log entry.
     * Runtime requests that contain labels not specified here are
     * considered invalid.
     */
    labels: LabelDescriptor[];
    /**
     * A human-readable description of this log. This information appears in
     * the documentation and can contain details.
     */
    description: string;
    /**
     * The human-readable name for this log. This information appears on
     * the user interface and should be concise.
     */
    displayName: string;
}
export declare const LogDescriptor: {
    encode(message: LogDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogDescriptor;
    fromJSON(object: any): LogDescriptor;
    toJSON(message: LogDescriptor): unknown;
    fromPartial<I extends unknown>(object: I): LogDescriptor;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
