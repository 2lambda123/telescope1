import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}
export interface ParamsSDKType {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom: string;
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gaugeId: Long;
  weight: string;
}
export interface DistrRecordSDKType {
  gauge_id: Long;
  weight: string;
}

function createBaseParams(): Params {
  return {
    mintedDenom: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintedDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      mintedDenom: isSet(object.mintedDenom) ? String(object.mintedDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintedDenom = object.mintedDenom ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      mintedDenom: isSet(object.minted_denom) ? object.minted_denom : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.mintedDenom !== undefined && (obj.minted_denom = message.mintedDenom);
    return obj;
  }

};

function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: []
  };
}

export const LockableDurationsInfo = {
  encode(message: LockableDurationsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();

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

  fromJSON(object: any): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },

  toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  }

};

function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: "",
    records: []
  };
}

export const DistrInfo = {
  encode(message: DistrInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }

    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;

        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrInfo {
    return {
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: DistrInfoSDKType): DistrInfo {
    return {
      totalWeight: isSet(object.total_weight) ? object.total_weight : undefined,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDK(e)) : []
    };
  },

  toSDK(message: DistrInfo): DistrInfoSDKType {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.total_weight = message.totalWeight);

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  }

};

function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: Long.UZERO,
    weight: ""
  };
}

export const DistrRecord = {
  encode(message: DistrRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrRecord {
    return {
      gaugeId: isSet(object.gaugeId) ? Long.fromString(object.gaugeId) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },

  fromSDK(object: DistrRecordSDKType): DistrRecord {
    return {
      gaugeId: isSet(object.gauge_id) ? object.gauge_id : undefined,
      weight: isSet(object.weight) ? object.weight : undefined
    };
  },

  toSDK(message: DistrRecord): DistrRecordSDKType {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gauge_id = message.gaugeId);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  }

};