import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";

/** Msg defines the fees Msg service. */
export interface Msg {
  /**
   * RegisterDevFeeInfo is used by a deployer to register a new contract for
   * receiving transaction fees
   */
  RegisterDevFeeInfo(request: DeepPartial<MsgRegisterDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterDevFeeInfoResponse>;

  /**
   * CancelDevFeeInfo is used by a deployer to cancel a registered contract
   * and stop receiving transaction fees
   */
  CancelDevFeeInfo(request: DeepPartial<MsgCancelDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgCancelDevFeeInfoResponse>;

  /** UpdateDevFeeInfo is used by a deployer to update the withdraw address */
  UpdateDevFeeInfo(request: DeepPartial<MsgUpdateDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateDevFeeInfoResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerDevFeeInfo = this.registerDevFeeInfo.bind(this);
    this.cancelDevFeeInfo = this.cancelDevFeeInfo.bind(this);
    this.updateDevFeeInfo = this.updateDevFeeInfo.bind(this);
  }

  registerDevFeeInfo(request: DeepPartial<MsgRegisterDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterDevFeeInfoResponse> {
    return this.rpc.unary(MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfo.fromPartial(request), metadata);
  }

  cancelDevFeeInfo(request: DeepPartial<MsgCancelDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgCancelDevFeeInfoResponse> {
    return this.rpc.unary(MsgCancelDevFeeInfo, MsgCancelDevFeeInfo.fromPartial(request), metadata);
  }

  updateDevFeeInfo(request: DeepPartial<MsgUpdateDevFeeInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateDevFeeInfoResponse> {
    return this.rpc.unary(MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfo.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "evmos.fees.v1.Msg"
};
export const MsgRegisterDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRegisterDevFeeInfo.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgRegisterDevFeeInfoResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgCancelDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "CancelDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCancelDevFeeInfo.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCancelDevFeeInfoResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUpdateDevFeeInfoDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateDevFeeInfo",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateDevFeeInfo.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUpdateDevFeeInfoResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};