import { fetchReq } from "../../../grpc-gateway";
import { MsgRegisterDevFeeInfo, MsgRegisterDevFeeInfoSDKType, MsgRegisterDevFeeInfoResponse, MsgRegisterDevFeeInfoResponseSDKType, MsgCancelDevFeeInfo, MsgCancelDevFeeInfoSDKType, MsgCancelDevFeeInfoResponse, MsgCancelDevFeeInfoResponseSDKType, MsgUpdateDevFeeInfo, MsgUpdateDevFeeInfoSDKType, MsgUpdateDevFeeInfoResponse, MsgUpdateDevFeeInfoResponseSDKType } from "./tx";
export class Msg {
  static RegisterDevFeeInfo(request: MsgRegisterDevFeeInfo, initRequest?: fm.initReq): Promise<MsgRegisterDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1.Msg/RegisterDevFeeInfo`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CancelDevFeeInfo(request: MsgCancelDevFeeInfo, initRequest?: fm.initReq): Promise<MsgCancelDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1.Msg/CancelDevFeeInfo`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateDevFeeInfo(request: MsgUpdateDevFeeInfo, initRequest?: fm.initReq): Promise<MsgUpdateDevFeeInfoResponse> {
    return fm.fetchReq(`/evmos.fees.v1.Msg/UpdateDevFeeInfo`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}