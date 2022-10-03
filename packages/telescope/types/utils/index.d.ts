import { ProtoRoot, ProtoRef } from '@osmonauts/types';
import { ImportObj } from '../types';
export declare const getRoot: (ref: ProtoRef) => ProtoRoot;
export declare const UTILS: {
    AminoHeight: string;
    AminoMsg: string;
    AminoTypes: string;
    decodeBech32Pubkey: string;
    defaultRegistryTypes: string;
    encodeBech32Pubkey: string;
    fromBase64: string;
    fromBech32: string;
    fromDuration: string;
    fromHex: string;
    fromUtf8: string;
    fromJsonTimestamp: string;
    fromTimestamp: string;
    GeneratedType: string;
    isSet: string;
    isObject: string;
    Long: string;
    createProtobufRpcClient: string;
    QueryClient: string;
    Tendermint34Client: string;
    OfflineSigner: string;
    omitDefault: string;
    Registry: string;
    SigningStargateClient: string;
    toBase64: string;
    toUtf8: string;
    toDuration: string;
    toTimestamp: string;
    bytesFromBase64: string;
    base64FromBytes: string;
    setPaginationParams: string;
    _m0: {
        type: string;
        path: string;
        name: string;
    };
    Exact: string;
    Rpc: string;
    LCDClient: string;
    DeepPartial: string;
};
export declare const fixlocalpaths: (imports: ImportObj[]) => {
    path: string;
    type: string;
    name: string;
    importAs?: string;
}[];
export declare const getRelativePath: (f1: string, f2: string) => string;
export declare const variableSlug: (str: any) => any;
