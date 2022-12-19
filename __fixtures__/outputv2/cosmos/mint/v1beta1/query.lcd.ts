import { Params, ParamsAmino, ParamsSDKType } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestAmino, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseAmino, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestAmino, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseAmino, QueryAnnualProvisionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* Inflation returns the current minting inflation value. */
  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.req.get<QueryInflationResponseSDKType>(endpoint);
  }

  /* AnnualProvisions current minting annual provisions value. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }

}