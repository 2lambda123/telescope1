import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantAminoType, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationAminoType, GrantAuthorizationSDKType } from "./authz";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGrantsRequest, QueryGrantsRequestAmino, QueryGrantsRequestAminoType, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseAmino, QueryGrantsResponseAminoType, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestAmino, QueryGranterGrantsRequestAminoType, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseAmino, QueryGranterGrantsResponseAminoType, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestAmino, QueryGranteeGrantsRequestAminoType, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseAmino, QueryGranteeGrantsResponseAminoType, QueryGranteeGrantsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;

  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;

  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
    this.granterGrants = this.granterGrants.bind(this);
    this.granteeGrants = this.granteeGrants.bind(this);
  }

  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }

  granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then(data => QueryGranterGrantsResponse.decode(new _m0.Reader(data)));
  }

  granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then(data => QueryGranteeGrantsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
      return queryService.grants(request);
    },

    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
      return queryService.granterGrants(request);
    },

    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
      return queryService.granteeGrants(request);
    }

  };
};