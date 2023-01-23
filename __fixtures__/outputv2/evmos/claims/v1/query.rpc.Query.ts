import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import * as fm from "../../../grpc-gateway";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
export class Query {
  static TotalUnclaimed(request: QueryTotalUnclaimedRequest, initRequest?: fm.InitReq): Promise<QueryTotalUnclaimedResponse> {
    return fm.fetchReq(`/evmos/claims/v1/total_unclaimed?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/claims/v1/params?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ClaimsRecords(request: QueryClaimsRecordsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsRecordsResponse> {
    return fm.fetchReq(`/evmos/claims/v1/claims_records?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ClaimsRecord(request: QueryClaimsRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimsRecordResponse> {
    return fm.fetchReq(`/evmos/claims/v1/claims_records/${request["address"]}?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

}