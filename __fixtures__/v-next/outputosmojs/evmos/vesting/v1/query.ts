import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.vesting.v1";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
  /** address of the clawback vesting account */
  address: string;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestSDKType {
  address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
  /** current amount of locked tokens */
  locked: Coin[];
  /** current amount of unvested tokens */
  unvested: Coin[];
  /** current amount of vested tokens */
  vested: Coin[];
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseSDKType {
  locked: CoinSDKType[];
  unvested: CoinSDKType[];
  vested: CoinSDKType[];
}
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    address: ""
  };
}
export const QueryBalancesRequest = {
  encode(message: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryBalancesRequestSDKType): QueryBalancesRequest {
    return {
      address: object?.address
    };
  },
  fromSDKJSON(object: any): QueryBalancesRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: QueryBalancesRequest): QueryBalancesRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    locked: [],
    unvested: [],
    vested: []
  };
}
export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locked) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unvested) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vested) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locked.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unvested.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.vested.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalancesResponse {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromJSON(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromJSON(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBalancesResponse): unknown {
    const obj: any = {};
    if (message.locked) {
      obj.locked = message.locked.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.locked = [];
    }
    if (message.unvested) {
      obj.unvested = message.unvested.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.unvested = [];
    }
    if (message.vested) {
      obj.vested = message.vested.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.vested = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.locked = object.locked?.map(e => Coin.fromPartial(e)) || [];
    message.unvested = object.unvested?.map(e => Coin.fromPartial(e)) || [];
    message.vested = object.vested?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryBalancesResponseSDKType): QueryBalancesResponse {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromSDK(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromSDK(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryBalancesResponseSDKType {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromSDKJSON(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromSDKJSON(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryBalancesResponse): QueryBalancesResponseSDKType {
    const obj: any = {};
    if (message.locked) {
      obj.locked = message.locked.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.locked = [];
    }
    if (message.unvested) {
      obj.unvested = message.unvested.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.unvested = [];
    }
    if (message.vested) {
      obj.vested = message.vested.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.vested = [];
    }
    return obj;
  }
};