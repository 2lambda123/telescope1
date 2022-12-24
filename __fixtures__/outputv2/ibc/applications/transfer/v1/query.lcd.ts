import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceAminoType, DenomTraceSDKType, Params, ParamsAmino, ParamsAminoType, ParamsSDKType } from "./transfer";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceRequestAmino, QueryDenomTraceRequestAminoType, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseAmino, QueryDenomTraceResponseAminoType, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestAmino, QueryDenomTracesRequestAminoType, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseAmino, QueryDenomTracesResponseAminoType, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestAminoType, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseAminoType, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
  }

  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.req.get<QueryDenomTraceResponseSDKType>(endpoint);
  }

  /* DenomTraces queries all denomination traces. */
  async denomTraces(params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.req.get<QueryDenomTracesResponseSDKType>(endpoint, options);
  }

  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}