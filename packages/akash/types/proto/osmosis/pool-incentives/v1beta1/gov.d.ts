import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DistrRecord } from "../../../osmosis/pool-incentives/v1beta1/incentives";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
    title: string;
    description: string;
    records: DistrRecord[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
    title: string;
    description: string;
    records: DistrRecord[];
}
export declare const ReplacePoolIncentivesProposal: {
    encode(message: ReplacePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReplacePoolIncentivesProposal;
    fromJSON(object: any): ReplacePoolIncentivesProposal;
    toJSON(message: ReplacePoolIncentivesProposal): unknown;
    fromPartial<I extends unknown>(object: I): ReplacePoolIncentivesProposal;
};
export declare const UpdatePoolIncentivesProposal: {
    encode(message: UpdatePoolIncentivesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolIncentivesProposal;
    fromJSON(object: any): UpdatePoolIncentivesProposal;
    toJSON(message: UpdatePoolIncentivesProposal): unknown;
    fromPartial<I extends unknown>(object: I): UpdatePoolIncentivesProposal;
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
