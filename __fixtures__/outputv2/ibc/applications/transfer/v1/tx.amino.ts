import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightAminoType, HeightSDKType } from "../../../core/client/v1/client";
import { MsgTransfer, MsgTransferAmino, MsgTransferAminoType, MsgTransferSDKType } from "./tx";
export const AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: MsgTransfer.toAmino,
    fromAmino: MsgTransfer.fromAmino
  }
};