import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
export class Msg {
  static CreateClawbackVestingAccount(request: MsgCreateClawbackVestingAccount, initRequest?: fm.initReq): Promise<MsgCreateClawbackVestingAccountResponse> {
    return fm.fetchReq(`/evmos.vesting.v1.Msg/CreateClawbackVestingAccount`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Clawback(request: MsgClawback, initRequest?: fm.initReq): Promise<MsgClawbackResponse> {
    return fm.fetchReq(`/evmos.vesting.v1.Msg/Clawback`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}