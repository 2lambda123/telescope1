import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";

/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;

  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;

  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;

  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;

  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;

  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  ChannelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;

  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;

  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;

  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;

  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.channelOpenInit = this.channelOpenInit.bind(this);
    this.channelOpenTry = this.channelOpenTry.bind(this);
    this.channelOpenAck = this.channelOpenAck.bind(this);
    this.channelOpenConfirm = this.channelOpenConfirm.bind(this);
    this.channelCloseInit = this.channelCloseInit.bind(this);
    this.channelCloseConfirm = this.channelCloseConfirm.bind(this);
    this.recvPacket = this.recvPacket.bind(this);
    this.timeout = this.timeout.bind(this);
    this.timeoutOnClose = this.timeoutOnClose.bind(this);
    this.acknowledgement = this.acknowledgement.bind(this);
  }

  channelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse> {
    return this.rpc.unary(MsgChannelOpenInit, MsgChannelOpenInit.fromPartial(request), metadata);
  }

  channelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse> {
    return this.rpc.unary(MsgChannelOpenTry, MsgChannelOpenTry.fromPartial(request), metadata);
  }

  channelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse> {
    return this.rpc.unary(MsgChannelOpenAck, MsgChannelOpenAck.fromPartial(request), metadata);
  }

  channelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse> {
    return this.rpc.unary(MsgChannelOpenConfirm, MsgChannelOpenConfirm.fromPartial(request), metadata);
  }

  channelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse> {
    return this.rpc.unary(MsgChannelCloseInit, MsgChannelCloseInit.fromPartial(request), metadata);
  }

  channelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse> {
    return this.rpc.unary(MsgChannelCloseConfirm, MsgChannelCloseConfirm.fromPartial(request), metadata);
  }

  recvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse> {
    return this.rpc.unary(MsgRecvPacket, MsgRecvPacket.fromPartial(request), metadata);
  }

  timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse> {
    return this.rpc.unary(MsgTimeout, MsgTimeout.fromPartial(request), metadata);
  }

  timeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse> {
    return this.rpc.unary(MsgTimeoutOnClose, MsgTimeoutOnClose.fromPartial(request), metadata);
  }

  acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse> {
    return this.rpc.unary(MsgAcknowledgement, MsgAcknowledgement.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "ibc.core.channel.v1.Msg"
};
export const MsgChannelOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenInit",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenInit.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelOpenInitResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChannelOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenTry",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenTry.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelOpenTryResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChannelOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenAck",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenAck.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelOpenAckResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelOpenConfirm.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelOpenConfirmResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChannelCloseInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseInit",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelCloseInit.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelCloseInitResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseConfirm",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChannelCloseConfirm.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChannelCloseConfirmResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgRecvPacketDesc: UnaryMethodDefinitionish = {
  methodName: "RecvPacket",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRecvPacket.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgRecvPacketResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgTimeoutDesc: UnaryMethodDefinitionish = {
  methodName: "Timeout",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTimeout.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgTimeoutResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish = {
  methodName: "TimeoutOnClose",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgTimeoutOnClose.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgTimeoutOnCloseResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "Acknowledgement",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgAcknowledgement.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgAcknowledgementResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};