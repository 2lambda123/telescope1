import { Duration, DurationAmino, DurationAminoType, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockAminoType, PeriodLockSDKType } from "./lock";
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLockTokens, MsgLockTokensAmino, MsgLockTokensAminoType, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseAmino, MsgLockTokensResponseAminoType, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllAmino, MsgBeginUnlockingAllAminoType, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseAmino, MsgBeginUnlockingAllResponseAminoType, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingAmino, MsgBeginUnlockingAminoType, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseAmino, MsgBeginUnlockingResponseAminoType, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupAmino, MsgExtendLockupAminoType, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseAmino, MsgExtendLockupResponseAminoType, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockAmino, MsgForceUnlockAminoType, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseAmino, MsgForceUnlockResponseAminoType, MsgForceUnlockResponseSDKType } from "./tx";

/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse>;

  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse>;

  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse>;

  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse>;
  forceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lockTokens = this.lockTokens.bind(this);
    this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
    this.beginUnlocking = this.beginUnlocking.bind(this);
    this.extendLockup = this.extendLockup.bind(this);
    this.forceUnlock = this.forceUnlock.bind(this);
  }

  lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponse> {
    const data = MsgLockTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
    return promise.then(data => MsgLockTokensResponse.decode(new _m0.Reader(data)));
  }

  beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponse> {
    const data = MsgBeginUnlockingAll.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
    return promise.then(data => MsgBeginUnlockingAllResponse.decode(new _m0.Reader(data)));
  }

  beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponse> {
    const data = MsgBeginUnlocking.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
    return promise.then(data => MsgBeginUnlockingResponse.decode(new _m0.Reader(data)));
  }

  extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponse> {
    const data = MsgExtendLockup.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
    return promise.then(data => MsgExtendLockupResponse.decode(new _m0.Reader(data)));
  }

  forceUnlock(request: MsgForceUnlock): Promise<MsgForceUnlockResponse> {
    const data = MsgForceUnlock.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ForceUnlock", data);
    return promise.then(data => MsgForceUnlockResponse.decode(new _m0.Reader(data)));
  }

}