import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  tokenPairs(request: QueryTokenPairsRequest): Promise<QueryTokenPairsResponseSDKType>;
  /*TokenPairs retrieves registered token pairs*/

  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType>;
  /*TokenPair retrieves a registered token pair*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params retrieves the erc20 module params*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }

  tokenPairs(request: QueryTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryTokenPairsResponseSDKType> {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPairs", data);
    return promise.then(data => QueryTokenPairsResponse.decode(new _m0.Reader(data)));
  }

  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType> {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
    return promise.then(data => QueryTokenPairResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPairs(request: QueryTokenPairsRequest): Promise<QueryTokenPairsResponseSDKType> {
      return queryService.tokenPairs(request);
    },

    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponseSDKType> {
      return queryService.tokenPair(request);
    },

    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    }

  };
};