import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import * as fm from "../../../grpc-gateway";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
export class Query {
  static AllProvidersAttributes(request: QueryAllProvidersAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/list?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ProviderAttributes(request: QueryProviderAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/${request["owner"]}/list?${fm.renderURLSearchParams(request, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ProviderAuditorAttributes(request: QueryProviderAuditorRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/audit/v1beta2/audit/attributes/${request["auditor"]}/{owner}?${fm.renderURLSearchParams(request, ["auditor"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AuditorAttributes(request: QueryAuditorAttributesRequest, initRequest?: fm.InitReq): Promise<QueryProvidersResponse> {
    return fm.fetchReq(`/akash/provider/v1beta2/auditor/${request["auditor"]}/list?${fm.renderURLSearchParams(request, ["auditor"])}`, { ...initRequest,
      method: "GET"
    });
  }

}