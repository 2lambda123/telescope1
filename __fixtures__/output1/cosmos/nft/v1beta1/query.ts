import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryBalanceRequest {
  classId: string;
  owner: string;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): QueryBalanceRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};
export interface QueryBalanceResponse {
  amount: Long;
}

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: Long.UZERO
  };
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};
export interface QueryOwnerRequest {
  classId: string;
  id: string;
}

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}

export const QueryOwnerRequest = {
  encode(message: QueryOwnerRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(object: I): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};
export interface QueryOwnerResponse {
  owner: string;
}

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}

export const QueryOwnerResponse = {
  encode(message: QueryOwnerResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(object: I): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  }

};
export interface QuerySupplyRequest {
  classId: string;
}

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};
export interface QuerySupplyResponse {
  amount: Long;
}

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: Long.UZERO
  };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.UZERO
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};
export interface QueryNFTsRequest {
  classId: string;
  owner: string;
  pagination: PageRequest;
}

function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: undefined
  };
}

export const QueryNFTsRequest = {
  encode(message: QueryNFTsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsRequest>, I>>(object: I): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryNFTsResponse {
  nfts: NFT[];
  pagination: PageResponse;
}

function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: undefined
  };
}

export const QueryNFTsResponse = {
  encode(message: QueryNFTsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};

    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsResponse>, I>>(object: I): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryNFTRequest {
  classId: string;
  id: string;
}

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};
export interface QueryNFTResponse {
  nft: NFT;
}

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(object: I): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  }

};
export interface QueryClassRequest {
  classId: string;
}

function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}

export const QueryClassRequest = {
  encode(message: QueryClassRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassRequest>, I>>(object: I): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};
export interface QueryClassResponse {
  class: Class;
}

function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}

export const QueryClassResponse = {
  encode(message: QueryClassResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassResponse>, I>>(object: I): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  }

};
export interface QueryClassesRequest {
  pagination: PageRequest;
}

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}

export const QueryClassesRequest = {
  encode(message: QueryClassesRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();

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

  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(object: I): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryClassesResponse {
  classes: Class[];
  pagination: PageResponse;
}

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesResponse = {
  encode(message: QueryClassesResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(object: I): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};