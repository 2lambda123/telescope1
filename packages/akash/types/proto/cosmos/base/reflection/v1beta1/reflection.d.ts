import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interfaceNames: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interfaceName: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementationMessageNames: string[];
}
export declare const ListAllInterfacesRequest: {
    encode(_: ListAllInterfacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest;
    fromJSON(_: any): ListAllInterfacesRequest;
    toJSON(_: ListAllInterfacesRequest): unknown;
    fromPartial<I extends unknown>(_: I): ListAllInterfacesRequest;
};
export declare const ListAllInterfacesResponse: {
    encode(message: ListAllInterfacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponse;
    fromJSON(object: any): ListAllInterfacesResponse;
    toJSON(message: ListAllInterfacesResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListAllInterfacesResponse;
};
export declare const ListImplementationsRequest: {
    encode(message: ListImplementationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest;
    fromJSON(object: any): ListImplementationsRequest;
    toJSON(message: ListImplementationsRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListImplementationsRequest;
};
export declare const ListImplementationsResponse: {
    encode(message: ListImplementationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponse;
    fromJSON(object: any): ListImplementationsResponse;
    toJSON(message: ListImplementationsResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListImplementationsResponse;
};
/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
    /**
     * ListAllInterfaces lists all the interfaces registered in the interface
     * registry.
     */
    ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    /**
     * ListImplementations list all the concrete types that implement a given
     * interface.
     */
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
