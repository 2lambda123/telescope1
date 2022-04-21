import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const registry = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": MsgJoinPool,
  "/osmosis.gamm.v1beta1.MsgExitPool": MsgExitPool,
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": MsgSwapExactAmountIn,
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": MsgSwapExactAmountOut,
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": MsgJoinSwapExternAmountIn,
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": MsgJoinSwapShareAmountOut,
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": MsgExitSwapExternAmountOut,
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": MsgExitSwapShareAmountIn
};