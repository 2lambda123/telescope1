import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryEvidenceRequest, QueryEvidenceRequestAmino, QueryEvidenceRequestAminoType, QueryEvidenceRequestSDKType, QueryEvidenceResponse, QueryEvidenceResponseAmino, QueryEvidenceResponseAminoType, QueryEvidenceResponseSDKType, QueryAllEvidenceRequest, QueryAllEvidenceRequestAmino, QueryAllEvidenceRequestAminoType, QueryAllEvidenceRequestSDKType, QueryAllEvidenceResponse, QueryAllEvidenceResponseAmino, QueryAllEvidenceResponseAminoType, QueryAllEvidenceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }

  /* Evidence queries evidence based on evidence hash. */
  async evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponseSDKType> {
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidenceHash}`;
    return await this.req.get<QueryEvidenceResponseSDKType>(endpoint);
  }

  /* AllEvidence queries all evidence. */
  async allEvidence(params: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get<QueryAllEvidenceResponseSDKType>(endpoint, options);
  }

}