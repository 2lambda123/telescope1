import Long from "long";
import * as _m0 from "protobufjs/minimal";
export interface QuoteReport {
    id: string;
    timestamp: string;
    version: Long;
    isvEnclaveQuoteStatus: string;
    platformInfoBlob: string;
    isvEnclaveQuoteBody: string;
    advisoryIds: string[];
}
export interface QuoteReportBody {
    mrEnclave: string;
    mrSigner: string;
    reportData: string;
}
export interface QuoteReportData {
    version: Long;
    signType: Long;
    reportBody: QuoteReportBody;
}
export interface EndorsedAttestationReport {
    report: Uint8Array;
    signature: Uint8Array;
    signingCert: Uint8Array;
}
export interface SGXEC256Signature {
    gx: string;
    gy: string;
}
export interface PlatformInfoBlob {
    sgxEpidGroupFlags: number;
    sgxTcbEvaluationFlags: number;
    pseEvaluationFlags: number;
    latestEquivalentTcbPsvn: string;
    latestPseIsvsvn: string;
    latestPsdaSvn: string;
    xeid: number;
    gid: number;
    sgxEc256SignatureT: SGXEC256Signature;
}
export declare const QuoteReport: {
    encode(message: QuoteReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReport;
    fromJSON(object: any): QuoteReport;
    toJSON(message: QuoteReport): unknown;
    fromPartial<I extends unknown>(object: I): QuoteReport;
};
export declare const QuoteReportBody: {
    encode(message: QuoteReportBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportBody;
    fromJSON(object: any): QuoteReportBody;
    toJSON(message: QuoteReportBody): unknown;
    fromPartial<I extends unknown>(object: I): QuoteReportBody;
};
export declare const QuoteReportData: {
    encode(message: QuoteReportData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportData;
    fromJSON(object: any): QuoteReportData;
    toJSON(message: QuoteReportData): unknown;
    fromPartial<I extends unknown>(object: I): QuoteReportData;
};
export declare const EndorsedAttestationReport: {
    encode(message: EndorsedAttestationReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EndorsedAttestationReport;
    fromJSON(object: any): EndorsedAttestationReport;
    toJSON(message: EndorsedAttestationReport): unknown;
    fromPartial<I extends unknown>(object: I): EndorsedAttestationReport;
};
export declare const SGXEC256Signature: {
    encode(message: SGXEC256Signature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SGXEC256Signature;
    fromJSON(object: any): SGXEC256Signature;
    toJSON(message: SGXEC256Signature): unknown;
    fromPartial<I extends unknown>(object: I): SGXEC256Signature;
};
export declare const PlatformInfoBlob: {
    encode(message: PlatformInfoBlob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformInfoBlob;
    fromJSON(object: any): PlatformInfoBlob;
    toJSON(message: PlatformInfoBlob): unknown;
    fromPartial<I extends unknown>(object: I): PlatformInfoBlob;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
