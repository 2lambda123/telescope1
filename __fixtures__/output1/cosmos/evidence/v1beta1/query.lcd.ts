import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/helpers";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Evidence queries evidence based on evidence hash. */
  async evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.evidenceHash !== "undefined") {
      options.params.evidence_hash = params.evidenceHash;
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidence_hash}`;
    return await this.request(endpoint, options);
  }

  /* AllEvidence queries all evidence. */
  async allEvidence(params: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence/`;
    return await this.request(endpoint, options);
  }

}