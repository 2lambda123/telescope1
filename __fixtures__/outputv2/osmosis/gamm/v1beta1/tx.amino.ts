//@ts-nocheck
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgJoinPool, MsgJoinPoolAmino, MsgJoinPoolAminoType, MsgJoinPoolSDKType, MsgExitPool, MsgExitPoolAmino, MsgExitPoolAminoType, MsgExitPoolSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInAmino, MsgSwapExactAmountInAminoType, MsgSwapExactAmountInSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutAmino, MsgSwapExactAmountOutAminoType, MsgSwapExactAmountOutSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInAmino, MsgJoinSwapExternAmountInAminoType, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutAmino, MsgJoinSwapShareAmountOutAminoType, MsgJoinSwapShareAmountOutSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutAmino, MsgExitSwapExternAmountOutAminoType, MsgExitSwapExternAmountOutSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInAmino, MsgExitSwapShareAmountInAminoType, MsgExitSwapShareAmountInSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": {
    aminoType: "osmosis/gamm/join-pool",
    toAmino: MsgJoinPool.toAmino,
    fromAmino: MsgJoinPool.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgExitPool": {
    aminoType: "osmosis/gamm/exit-pool",
    toAmino: MsgExitPool.toAmino,
    fromAmino: MsgExitPool.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/gamm/swap-exact-amount-in",
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/gamm/swap-exact-amount-out",
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
    aminoType: "osmosis/gamm/join-swap-extern-amount-in",
    toAmino: MsgJoinSwapExternAmountIn.toAmino,
    fromAmino: MsgJoinSwapExternAmountIn.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
    aminoType: "osmosis/gamm/join-swap-share-amount-out",
    toAmino: MsgJoinSwapShareAmountOut.toAmino,
    fromAmino: MsgJoinSwapShareAmountOut.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
    aminoType: "osmosis/gamm/exit-swap-extern-amount-out",
    toAmino: MsgExitSwapExternAmountOut.toAmino,
    fromAmino: MsgExitSwapExternAmountOut.fromAmino
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
    aminoType: "osmosis/gamm/exit-swap-share-amount-in",
    toAmino: MsgExitSwapShareAmountIn.toAmino,
    fromAmino: MsgExitSwapShareAmountIn.fromAmino
  }
};