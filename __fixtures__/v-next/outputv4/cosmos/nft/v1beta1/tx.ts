import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";

/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSend {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;

  /** id defines the unique identification of nft */
  id: string;

  /** sender is the address of the owner of nft */
  sender: string;

  /** receiver is the receiver address of nft */
  receiver: string;
}

/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}

function createBaseMsgSend(): MsgSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },

  fromSDK(object: MsgSendSDKType): MsgSend {
    return {
      classId: object?.class_id,
      id: object?.id,
      sender: object?.sender,
      receiver: object?.receiver
    };
  },

  fromSDKJSON(object: any): MsgSendSDKType {
    return {
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },

  toSDK(message: MsgSend): MsgSendSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  }

};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();

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

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },

  fromSDK(_: MsgSendResponseSDKType): MsgSendResponse {
    return {};
  },

  fromSDKJSON(_: any): MsgSendResponseSDKType {
    return {};
  },

  toSDK(_: MsgSendResponse): MsgSendResponseSDKType {
    const obj: any = {};
    return obj;
  }

};