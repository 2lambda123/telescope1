import { Any } from "../../../google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface MsgGrantAllowance {
  granter: string;
  grantee: string;
  allowance: Any;
}

function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}

export const MsgGrantAllowance = {
  encode(message: MsgGrantAllowance, writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrantAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },

  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  }

};
export interface MsgGrantAllowanceResponse {}

function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}

export const MsgGrantAllowanceResponse = {
  encode(message: MsgGrantAllowanceResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();

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

  fromJSON(object: any): MsgGrantAllowanceResponse {
    return {};
  },

  toJSON(message: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(object: I): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  }

};
export interface MsgRevokeAllowance {
  granter: string;
  grantee: string;
}

function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: "",
    grantee: ""
  };
}

export const MsgRevokeAllowance = {
  encode(message: MsgRevokeAllowance, writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRevokeAllowance {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },

  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  }

};
export interface MsgRevokeAllowanceResponse {}

function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}

export const MsgRevokeAllowanceResponse = {
  encode(message: MsgRevokeAllowanceResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();

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

  fromJSON(object: any): MsgRevokeAllowanceResponse {
    return {};
  },

  toJSON(message: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(object: I): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  }

};
export interface AminoMsgGrantAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgGrantAllowance";
  value: {
    granter: string;
    grantee: string;
    allowance: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgRevokeAllowance extends AminoMsg {
  type: "cosmos-sdk/MsgRevokeAllowance";
  value: {
    granter: string;
    grantee: string;
  };
}
export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: ({
      granter,
      grantee,
      allowance
    }: MsgGrantAllowance): AminoMsgGrantAllowance["value"] => {
      return {
        granter,
        grantee,
        allowance: {
          type_url: allowance.typeUrl,
          value: allowance.value
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      allowance
    }: AminoMsgGrantAllowance["value"]): MsgGrantAllowance => {
      return {
        granter,
        grantee,
        allowance: {
          typeUrl: allowance.type_url,
          value: allowance.value
        }
      };
    }
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: ({
      granter,
      grantee
    }: MsgRevokeAllowance): AminoMsgRevokeAllowance["value"] => {
      return {
        granter,
        grantee
      };
    },
    fromAmino: ({
      granter,
      grantee
    }: AminoMsgRevokeAllowance["value"]): MsgRevokeAllowance => {
      return {
        granter,
        grantee
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        type_url: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.encode(value).finish()
      };
    },

    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        type_url: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value
      };
    },

    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value
      };
    }

  },
  toJSON: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.toJSON(value)
      };
    },

    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.toJSON(value)
      };
    }

  },
  fromJSON: {
    grantAllowance(value: any) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromJSON(value)
      };
    },

    revokeAllowance(value: any) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromJSON(value)
      };
    }

  },
  fromPartial: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(value)
      };
    },

    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(value)
      };
    }

  }
};