import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface MsgVerifyInvariant {
  sender: string;
  invariantModuleName: string;
  invariantRoute: string;
}

function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}

export const MsgVerifyInvariant = {
  encode(message: MsgVerifyInvariant, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }

    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.invariantModuleName = reader.string();
          break;

        case 3:
          message.invariantRoute = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVerifyInvariant {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariantModuleName: isSet(object.invariantModuleName) ? String(object.invariantModuleName) : "",
      invariantRoute: isSet(object.invariantRoute) ? String(object.invariantRoute) : ""
    };
  },

  toJSON(message: MsgVerifyInvariant): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(object: I): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  }

};
export interface MsgVerifyInvariantResponse {}

function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}

export const MsgVerifyInvariantResponse = {
  encode(message: MsgVerifyInvariantResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();

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

  fromJSON(object: any): MsgVerifyInvariantResponse {
    return {};
  },

  toJSON(message: MsgVerifyInvariantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(object: I): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }

};
export interface AminoMsgVerifyInvariant extends AminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
  };
}
export const AminoConverter = {
  "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
    aminoType: "cosmos-sdk/MsgVerifyInvariant",
    toAmino: ({
      sender,
      invariantModuleName,
      invariantRoute
    }: MsgVerifyInvariant): AminoMsgVerifyInvariant["value"] => {
      return {
        sender,
        invariant_module_name: invariantModuleName,
        invariant_route: invariantRoute
      };
    },
    fromAmino: ({
      sender,
      invariant_module_name,
      invariant_route
    }: AminoMsgVerifyInvariant["value"]): MsgVerifyInvariant => {
      return {
        sender,
        invariantModuleName: invariant_module_name,
        invariantRoute: invariant_route
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        type_url: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value
      };
    }

  },
  toJSON: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.toJSON(value)
      };
    }

  },
  fromJSON: {
    verifyInvariant(value: any) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromJSON(value)
      };
    }

  },
  fromPartial: {
    verifyInvariant(value: MsgVerifyInvariant) {
      return {
        typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        value: MsgVerifyInvariant.fromPartial(value)
      };
    }

  }
};