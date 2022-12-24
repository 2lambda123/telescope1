import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataAminoType, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomAmino, MsgCreateDenomAminoType, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseAmino, MsgCreateDenomResponseAminoType, MsgCreateDenomResponseSDKType, MsgMint, MsgMintAmino, MsgMintAminoType, MsgMintSDKType, MsgMintResponse, MsgMintResponseAmino, MsgMintResponseAminoType, MsgMintResponseSDKType, MsgBurn, MsgBurnAmino, MsgBurnAminoType, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseAmino, MsgBurnResponseAminoType, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminAmino, MsgChangeAdminAminoType, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseAmino, MsgChangeAdminResponseAminoType, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataAmino, MsgSetDenomMetadataAminoType, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseAmino, MsgSetDenomMetadataResponseAminoType, MsgSetDenomMetadataResponseSDKType } from "./tx";

/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
  }

  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new _m0.Reader(data)));
  }

  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

}