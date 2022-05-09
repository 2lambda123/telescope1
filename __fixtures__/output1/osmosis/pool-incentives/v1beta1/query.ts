import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial, toDuration, fromDuration } from "@osmonauts/helpers";
export interface QueryGaugeIdsRequest {
  poolId: Long;
}

function createBaseQueryGaugeIdsRequest(): QueryGaugeIdsRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryGaugeIdsRequest = {
  encode(message: QueryGaugeIdsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO
    };
  },

  toJSON(message: QueryGaugeIdsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeIdsRequest>, I>>(object: I): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};
export interface QueryGaugeIdsResponse {
  gaugeIdsWithDuration: GaugeIdWithDuration[];
}

function createBaseQueryGaugeIdsResponse(): QueryGaugeIdsResponse {
  return {
    gaugeIdsWithDuration: []
  };
}

export const QueryGaugeIdsResponse = {
  encode(message: QueryGaugeIdsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gaugeIdsWithDuration) {
      QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gaugeIdsWithDuration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsResponse {
    return {
      gaugeIdsWithDuration: Array.isArray(object?.gaugeIdsWithDuration) ? object.gaugeIdsWithDuration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGaugeIdsResponse): unknown {
    const obj: any = {};

    if (message.gaugeIdsWithDuration) {
      obj.gaugeIdsWithDuration = message.gaugeIdsWithDuration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
    } else {
      obj.gaugeIdsWithDuration = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeIdsResponse>, I>>(object: I): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => GaugeIdWithDuration.fromPartial(e)) || [];
    return message;
  }

};
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
  gaugeId: Long;
  duration: string;
}

function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration(): QueryGaugeIdsResponse_GaugeIdWithDuration {
  return {
    gaugeId: Long.UZERO,
    duration: undefined
  };
}

export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
  encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }

    if (message.duration !== undefined) Duration.encode(toDuration(message.duration), writer.uint32(18).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 2:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return {
      gaugeId: isSet(object.gaugeId) ? Long.fromString(object.gaugeId) : Long.UZERO,
      duration: isSet(object.duration) ? String(object.duration) : undefined
    };
  },

  toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeIdsResponse_GaugeIdWithDuration>, I>>(object: I): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.duration = object.duration ?? undefined;
    return message;
  }

};
export interface QueryDistrInfoRequest {}

function createBaseQueryDistrInfoRequest(): QueryDistrInfoRequest {
  return {};
}

export const QueryDistrInfoRequest = {
  encode(message: QueryDistrInfoRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDistrInfoRequest {
    return {};
  },

  toJSON(message: QueryDistrInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDistrInfoRequest>, I>>(object: I): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  }

};
export interface QueryDistrInfoResponse {
  distrInfo: DistrInfo;
}

function createBaseQueryDistrInfoResponse(): QueryDistrInfoResponse {
  return {
    distrInfo: undefined
  };
}

export const QueryDistrInfoResponse = {
  encode(message: QueryDistrInfoResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistrInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDistrInfoResponse {
    return {
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined
    };
  },

  toJSON(message: QueryDistrInfoResponse): unknown {
    const obj: any = {};
    message.distrInfo !== undefined && (obj.distrInfo = message.distrInfo ? DistrInfo.toJSON(message.distrInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDistrInfoResponse>, I>>(object: I): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    return message;
  }

};
export interface QueryParamsRequest {}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return {};
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};
export interface QueryParamsResponse {
  params: Params;
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};
export interface QueryLockableDurationsRequest {}

function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}

export const QueryLockableDurationsRequest = {
  encode(message: QueryLockableDurationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLockableDurationsRequest {
    return {};
  },

  toJSON(message: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockableDurationsRequest>, I>>(object: I): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  }

};
export interface QueryLockableDurationsResponse {
  lockableDurations: string[];
}

function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}

export const QueryLockableDurationsResponse = {
  encode(message: QueryLockableDurationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLockableDurationsResponse>, I>>(object: I): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }

};
export interface QueryIncentivizedPoolsRequest {}

function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}

export const QueryIncentivizedPoolsRequest = {
  encode(message: QueryIncentivizedPoolsRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentivizedPoolsRequest {
    return {};
  },

  toJSON(message: QueryIncentivizedPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPoolsRequest>, I>>(object: I): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  }

};
export interface IncentivizedPool {
  poolId: Long;
  lockableDuration: string;
  gaugeId: Long;
}

function createBaseIncentivizedPool(): IncentivizedPool {
  return {
    poolId: Long.UZERO,
    lockableDuration: undefined,
    gaugeId: Long.UZERO
  };
}

export const IncentivizedPool = {
  encode(message: IncentivizedPool, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.lockableDuration !== undefined) Duration.encode(toDuration(message.lockableDuration), writer.uint32(18).fork()).ldelim();

    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.lockableDuration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.gaugeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IncentivizedPool {
    return {
      poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO,
      lockableDuration: isSet(object.lockableDuration) ? String(object.lockableDuration) : undefined,
      gaugeId: isSet(object.gaugeId) ? Long.fromString(object.gaugeId) : Long.UZERO
    };
  },

  toJSON(message: IncentivizedPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.lockableDuration !== undefined && (obj.lockableDuration = message.lockableDuration);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IncentivizedPool>, I>>(object: I): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.lockableDuration = object.lockableDuration ?? undefined;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    return message;
  }

};
export interface QueryIncentivizedPoolsResponse {
  incentivizedPools: IncentivizedPool[];
}

function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivizedPools: []
  };
}

export const QueryIncentivizedPoolsResponse = {
  encode(message: QueryIncentivizedPoolsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentivizedPools.push(IncentivizedPool.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentivizedPoolsResponse {
    return {
      incentivizedPools: Array.isArray(object?.incentivizedPools) ? object.incentivizedPools.map((e: any) => IncentivizedPool.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryIncentivizedPoolsResponse): unknown {
    const obj: any = {};

    if (message.incentivizedPools) {
      obj.incentivizedPools = message.incentivizedPools.map(e => e ? IncentivizedPool.toJSON(e) : undefined);
    } else {
      obj.incentivizedPools = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPoolsResponse>, I>>(object: I): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  }

};
export interface QueryExternalIncentiveGaugesRequest {}

function createBaseQueryExternalIncentiveGaugesRequest(): QueryExternalIncentiveGaugesRequest {
  return {};
}

export const QueryExternalIncentiveGaugesRequest = {
  encode(message: QueryExternalIncentiveGaugesRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryExternalIncentiveGaugesRequest {
    return {};
  },

  toJSON(message: QueryExternalIncentiveGaugesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalIncentiveGaugesRequest>, I>>(object: I): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  }

};
export interface QueryExternalIncentiveGaugesResponse {
  data: Gauge[];
}

function createBaseQueryExternalIncentiveGaugesResponse(): QueryExternalIncentiveGaugesResponse {
  return {
    data: []
  };
}

export const QueryExternalIncentiveGaugesResponse = {
  encode(message: QueryExternalIncentiveGaugesResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryExternalIncentiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryExternalIncentiveGaugesResponse): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExternalIncentiveGaugesResponse>, I>>(object: I): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  }

};