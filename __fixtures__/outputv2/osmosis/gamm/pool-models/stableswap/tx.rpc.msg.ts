import { PoolParams, PoolParamsAmino, PoolParamsAminoType, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolAmino, MsgCreateStableswapPoolAminoType, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseAmino, MsgCreateStableswapPoolResponseAminoType, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsAmino, MsgStableSwapAdjustScalingFactorsAminoType, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseAmino, MsgStableSwapAdjustScalingFactorsResponseAminoType, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export interface Msg {
  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStableswapPool = this.createStableswapPool.bind(this);
    this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
  }

  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse> {
    const data = MsgCreateStableswapPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
    return promise.then(data => MsgCreateStableswapPoolResponse.decode(new _m0.Reader(data)));
  }

  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    const data = MsgStableSwapAdjustScalingFactors.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
    return promise.then(data => MsgStableSwapAdjustScalingFactorsResponse.decode(new _m0.Reader(data)));
  }

}