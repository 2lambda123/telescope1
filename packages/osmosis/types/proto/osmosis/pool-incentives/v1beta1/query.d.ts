import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "../../../osmosis/pool-incentives/v1beta1/incentives";
import { Gauge } from "../../../osmosis/incentives/gauge";
export interface QueryGaugeIdsRequest {
    poolId: Long;
}
export interface QueryGaugeIdsResponse {
    gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
    gaugeId: Long;
    duration: Duration;
}
export interface QueryDistrInfoRequest {
}
export interface QueryDistrInfoResponse {
    distrInfo: DistrInfo;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsResponse {
    lockableDurations: Duration[];
}
export interface QueryIncentivizedPoolsRequest {
}
export interface IncentivizedPool {
    poolId: Long;
    lockableDuration: Duration;
    gaugeId: Long;
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryExternalIncentiveGaugesRequest {
}
export interface QueryExternalIncentiveGaugesResponse {
    data: Gauge[];
}
export declare const QueryGaugeIdsRequest: {
    encode(message: QueryGaugeIdsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest;
    fromJSON(object: any): QueryGaugeIdsRequest;
    toJSON(message: QueryGaugeIdsRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryGaugeIdsRequest;
};
export declare const QueryGaugeIdsResponse: {
    encode(message: QueryGaugeIdsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse;
    fromJSON(object: any): QueryGaugeIdsResponse;
    toJSON(message: QueryGaugeIdsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryGaugeIdsResponse;
};
export declare const QueryGaugeIdsResponse_GaugeIdWithDuration: {
    encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration;
    fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration;
    toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
    fromPartial<I extends unknown>(object: I): QueryGaugeIdsResponse_GaugeIdWithDuration;
};
export declare const QueryDistrInfoRequest: {
    encode(_: QueryDistrInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest;
    fromJSON(_: any): QueryDistrInfoRequest;
    toJSON(_: QueryDistrInfoRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryDistrInfoRequest;
};
export declare const QueryDistrInfoResponse: {
    encode(message: QueryDistrInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse;
    fromJSON(object: any): QueryDistrInfoResponse;
    toJSON(message: QueryDistrInfoResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryDistrInfoResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryParamsResponse;
};
export declare const QueryLockableDurationsRequest: {
    encode(_: QueryLockableDurationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest;
    fromJSON(_: any): QueryLockableDurationsRequest;
    toJSON(_: QueryLockableDurationsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryLockableDurationsRequest;
};
export declare const QueryLockableDurationsResponse: {
    encode(message: QueryLockableDurationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse;
    fromJSON(object: any): QueryLockableDurationsResponse;
    toJSON(message: QueryLockableDurationsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryLockableDurationsResponse;
};
export declare const QueryIncentivizedPoolsRequest: {
    encode(_: QueryIncentivizedPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    toJSON(_: QueryIncentivizedPoolsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryIncentivizedPoolsRequest;
};
export declare const IncentivizedPool: {
    encode(message: IncentivizedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool;
    fromJSON(object: any): IncentivizedPool;
    toJSON(message: IncentivizedPool): unknown;
    fromPartial<I extends unknown>(object: I): IncentivizedPool;
};
export declare const QueryIncentivizedPoolsResponse: {
    encode(message: QueryIncentivizedPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    toJSON(message: QueryIncentivizedPoolsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryIncentivizedPoolsResponse;
};
export declare const QueryExternalIncentiveGaugesRequest: {
    encode(_: QueryExternalIncentiveGaugesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest;
    fromJSON(_: any): QueryExternalIncentiveGaugesRequest;
    toJSON(_: QueryExternalIncentiveGaugesRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryExternalIncentiveGaugesRequest;
};
export declare const QueryExternalIncentiveGaugesResponse: {
    encode(message: QueryExternalIncentiveGaugesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse;
    fromJSON(object: any): QueryExternalIncentiveGaugesResponse;
    toJSON(message: QueryExternalIncentiveGaugesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryExternalIncentiveGaugesResponse;
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
