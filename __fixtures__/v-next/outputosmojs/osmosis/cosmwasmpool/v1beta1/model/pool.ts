import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "osmosis.cosmwasmpool.v1beta1";
export interface CosmWasmPool {
  poolAddress: string;
  contractAddress: string;
  poolId: bigint;
  codeId: bigint;
}
export interface CosmWasmPoolSDKType {
  pool_address: string;
  contract_address: string;
  pool_id: bigint;
  code_id: bigint;
}
function createBaseCosmWasmPool(): CosmWasmPool {
  return {
    poolAddress: "",
    contractAddress: "",
    poolId: BigInt(0),
    codeId: BigInt(0)
  };
}
export const CosmWasmPool = {
  encode(message: CosmWasmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolAddress !== "") {
      writer.uint32(10).string(message.poolAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmWasmPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmWasmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CosmWasmPool {
    return {
      poolAddress: isSet(object.poolAddress) ? String(object.poolAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0)
    };
  },
  toJSON(message: CosmWasmPool): unknown {
    const obj: any = {};
    message.poolAddress !== undefined && (obj.poolAddress = message.poolAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<CosmWasmPool>): CosmWasmPool {
    const message = createBaseCosmWasmPool();
    message.poolAddress = object.poolAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: CosmWasmPoolSDKType): CosmWasmPool {
    return {
      poolAddress: object?.pool_address,
      contractAddress: object?.contract_address,
      poolId: object?.pool_id,
      codeId: object?.code_id
    };
  },
  fromSDKJSON(object: any): CosmWasmPoolSDKType {
    return {
      pool_address: isSet(object.pool_address) ? String(object.pool_address) : "",
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      code_id: isSet(object.code_id) ? BigInt(object.code_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: CosmWasmPool): CosmWasmPoolSDKType {
    const obj: any = {};
    obj.pool_address = message.poolAddress;
    obj.contract_address = message.contractAddress;
    obj.pool_id = message.poolId;
    obj.code_id = message.codeId;
    return obj;
  }
};