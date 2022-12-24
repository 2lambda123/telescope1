import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodAmino, PeriodAminoType, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountAmino, MsgCreateClawbackVestingAccountAminoType, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseAmino, MsgCreateClawbackVestingAccountResponseAminoType, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackAmino, MsgClawbackAminoType, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseAmino, MsgClawbackResponseAminoType, MsgClawbackResponseSDKType } from "./tx";

/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;

  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
    this.clawback = this.clawback.bind(this);
  }

  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse> {
    const data = MsgCreateClawbackVestingAccount.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "CreateClawbackVestingAccount", data);
    return promise.then(data => MsgCreateClawbackVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "Clawback", data);
    return promise.then(data => MsgClawbackResponse.decode(new _m0.Reader(data)));
  }

}