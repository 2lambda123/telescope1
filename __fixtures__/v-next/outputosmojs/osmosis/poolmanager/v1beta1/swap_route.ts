import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
export interface SwapAmountInRoute {
  poolId: bigint;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
  pool_id: bigint;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  poolId: bigint;
  tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: bigint;
  token_in_denom: string;
}
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: BigInt(0),
    tokenOutDenom: ""
  };
}
export const SwapAmountInRoute = {
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountInRouteSDKType): SwapAmountInRoute {
    return {
      poolId: object?.pool_id,
      tokenOutDenom: object?.token_out_denom
    };
  },
  fromSDKJSON(object: any): SwapAmountInRouteSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
    };
  },
  toSDK(message: SwapAmountInRoute): SwapAmountInRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_out_denom = message.tokenOutDenom;
    return obj;
  }
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: BigInt(0),
    tokenInDenom: ""
  };
}
export const SwapAmountOutRoute = {
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : ""
    };
  },
  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountOutRouteSDKType): SwapAmountOutRoute {
    return {
      poolId: object?.pool_id,
      tokenInDenom: object?.token_in_denom
    };
  },
  fromSDKJSON(object: any): SwapAmountOutRouteSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : ""
    };
  },
  toSDK(message: SwapAmountOutRoute): SwapAmountOutRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_in_denom = message.tokenInDenom;
    return obj;
  }
};