import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderAmino, ProviderAminoType, ProviderSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.audit.v1beta2";

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseAmino {
  providers: ProviderAmino[];
  pagination?: PageResponseAmino;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor: string;
  owner: string;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestAmino {
  auditor: string;
  owner: string;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  auditor: string;
  owner: string;
}

/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination?: PageRequest;
}

/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestAmino {
  pagination?: PageRequestAmino;
}

/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
  pagination?: PageRequestSDKType;
}

/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner: string;
  pagination?: PageRequest;
}

/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestAmino {
  owner: string;
  pagination?: PageRequestAmino;
}

/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}

/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor: string;
  owner: string;
}

/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestAmino {
  auditor: string;
  owner: string;
}

/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
  auditor: string;
  owner: string;
}

/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor: string;
  pagination?: PageRequest;
}

/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestAmino {
  auditor: string;
  pagination?: PageRequestAmino;
}

/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
  auditor: string;
  pagination?: PageRequestSDKType;
}

function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}

export const QueryProvidersResponse = {
  encode(message: QueryProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};

    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryProvidersResponseSDKType): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryProvidersResponse): QueryProvidersResponseSDKType {
    const obj: any = {};

    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};

    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    auditor: "",
    owner: ""
  };
}

export const QueryProviderRequest = {
  encode(message: QueryProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProviderRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },

  fromSDK(object: QueryProviderRequestSDKType): QueryProviderRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },

  toSDK(message: QueryProviderRequest): QueryProviderRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },

  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    return {
      auditor: object.auditor,
      owner: object.owner
    };
  },

  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  }

};

function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllProvidersAttributesRequest = {
  encode(message: QueryAllProvidersAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersAttributesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllProvidersAttributesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAllProvidersAttributesRequestSDKType): QueryAllProvidersAttributesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryAllProvidersAttributesRequestAmino): QueryAllProvidersAttributesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryProviderAttributesRequest = {
  encode(message: QueryProviderAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAttributesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProviderAttributesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProviderAttributesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryProviderAttributesRequestSDKType): QueryProviderAttributesRequest {
    return {
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryProviderAttributesRequestAmino): QueryProviderAttributesRequest {
    return {
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return {
    auditor: "",
    owner: ""
  };
}

export const QueryProviderAuditorRequest = {
  encode(message: QueryProviderAuditorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAuditorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProviderAuditorRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryProviderAuditorRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },

  fromSDK(object: QueryProviderAuditorRequestSDKType): QueryProviderAuditorRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },

  toSDK(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },

  fromAmino(object: QueryProviderAuditorRequestAmino): QueryProviderAuditorRequest {
    return {
      auditor: object.auditor,
      owner: object.owner
    };
  },

  toAmino(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  }

};

function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return {
    auditor: "",
    pagination: undefined
  };
}

export const QueryAuditorAttributesRequest = {
  encode(message: QueryAuditorAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuditorAttributesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAuditorAttributesRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAuditorAttributesRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAuditorAttributesRequestSDKType): QueryAuditorAttributesRequest {
    return {
      auditor: object?.auditor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryAuditorAttributesRequestAmino): QueryAuditorAttributesRequest {
    return {
      auditor: object.auditor,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};