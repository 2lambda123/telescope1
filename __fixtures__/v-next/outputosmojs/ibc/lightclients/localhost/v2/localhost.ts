import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.localhost.v2";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
  /** the latest block height */
  latestHeight?: Height;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
  latest_height?: HeightSDKType;
}
function createBaseClientState(): ClientState {
  return {
    latestHeight: undefined
  };
}
export const ClientState = {
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    return {
      latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      latestHeight: object.latest_height ? Height.fromSDK(object.latest_height) : undefined
    };
  },
  fromSDKJSON(object: any): ClientStateSDKType {
    return {
      latest_height: isSet(object.latest_height) ? Height.fromSDKJSON(object.latest_height) : undefined
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    message.latestHeight !== undefined && (obj.latest_height = message.latestHeight ? Height.toSDK(message.latestHeight) : undefined);
    return obj;
  }
};