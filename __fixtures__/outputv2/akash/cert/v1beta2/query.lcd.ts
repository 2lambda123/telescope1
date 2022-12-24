import { CertificateFilter, CertificateFilterAmino, CertificateFilterAminoType, CertificateFilterSDKType, Certificate, CertificateAmino, CertificateAminoType, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryCertificatesRequest, QueryCertificatesRequestAmino, QueryCertificatesRequestAminoType, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseAmino, QueryCertificatesResponseAminoType, QueryCertificatesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.certificates = this.certificates.bind(this);
  }

  /* Certificates queries certificates */
  async certificates(params: QueryCertificatesRequest): Promise<QueryCertificatesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filter !== "undefined") {
      options.params.filter = params.filter;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/cert/v1beta2/certificates/list`;
    return await this.req.get<QueryCertificatesResponseSDKType>(endpoint, options);
  }

}