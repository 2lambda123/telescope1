import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
    this.params = this.params.bind(this);
    this.signingInfo = this.signingInfo.bind(this);
    this.signingInfos = this.signingInfos.bind(this);
  }

  /* Params queries the parameters of slashing module */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* SigningInfo queries the signing info of given cons address */
  async signingInfo(params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType> {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.consAddress}`;
    return await this.get<QuerySigningInfoResponseSDKType>(endpoint);
  }

  /* SigningInfos queries signing info of all validators */
  async signingInfos(params: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.get<QuerySigningInfosResponseSDKType>(endpoint, options);
  }

}