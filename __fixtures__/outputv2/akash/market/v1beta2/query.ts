import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  filters?: OrderFilters;
  pagination?: PageRequest;
}

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestAmino {
  filters?: OrderFiltersAmino;
  pagination?: PageRequestAmino;
}

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
  filters?: OrderFiltersSDKType;
  pagination?: PageRequestSDKType;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseAmino {
  orders: OrderAmino[];
  pagination?: PageResponseAmino;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  id?: OrderID;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestAmino {
  id?: OrderIDAmino;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
  id?: OrderIDSDKType;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  order?: Order;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
  order?: OrderSDKType;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  filters?: BidFilters;
  pagination?: PageRequest;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestAmino {
  filters?: BidFiltersAmino;
  pagination?: PageRequestAmino;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
  filters?: BidFiltersSDKType;
  pagination?: PageRequestSDKType;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseAmino {
  bids: QueryBidResponseAmino[];
  pagination?: PageResponseAmino;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
  bids: QueryBidResponseSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  id?: BidID;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestAmino {
  id?: BidIDAmino;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
  id?: BidIDSDKType;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  bid?: Bid;
  escrowAccount?: Account;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseAmino {
  bid?: BidAmino;
  escrow_account?: AccountAmino;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
  bid?: BidSDKType;
  escrow_account?: AccountSDKType;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  filters?: LeaseFilters;
  pagination?: PageRequest;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestAmino {
  filters?: LeaseFiltersAmino;
  pagination?: PageRequestAmino;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
  filters?: LeaseFiltersSDKType;
  pagination?: PageRequestSDKType;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseAmino {
  leases: QueryLeaseResponseAmino[];
  pagination?: PageResponseAmino;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
  leases: QueryLeaseResponseSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  id?: LeaseID;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestAmino {
  id?: LeaseIDAmino;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
  id?: LeaseIDSDKType;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  lease?: Lease;
  escrowPayment?: FractionalPayment;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseAmino {
  lease?: LeaseAmino;
  escrow_payment?: FractionalPaymentAmino;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
  lease?: LeaseSDKType;
  escrow_payment?: FractionalPaymentSDKType;
}

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    filters: undefined,
    pagination: undefined
  };
}

export const QueryOrdersRequest = {
  encode(message: QueryOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryOrdersRequest {
    return {
      filters: isSet(object.filters) ? OrderFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? OrderFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryOrdersRequestSDKType): QueryOrdersRequest {
    return {
      filters: object.filters ? OrderFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryOrdersRequest): QueryOrdersRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    return {
      filters: object?.filters ? OrderFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryOrdersRequest): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? OrderFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}

export const QueryOrdersResponse = {
  encode(message: QueryOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};

    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryOrdersResponseSDKType): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryOrdersResponse): QueryOrdersResponseSDKType {
    const obj: any = {};

    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino {
    const obj: any = {};

    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: undefined
  };
}

export const QueryOrderRequest = {
  encode(message: QueryOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOrderRequest {
    return {
      id: isSet(object.id) ? OrderID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? OrderID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: QueryOrderRequestSDKType): QueryOrderRequest {
    return {
      id: object.id ? OrderID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: QueryOrderRequest): QueryOrderRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    return {
      id: object?.id ? OrderID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: QueryOrderRequest): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: undefined
  };
}

export const QueryOrderResponse = {
  encode(message: QueryOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },

  fromSDK(object: QueryOrderResponseSDKType): QueryOrderResponse {
    return {
      order: object.order ? Order.fromSDK(object.order) : undefined
    };
  },

  toSDK(message: QueryOrderResponse): QueryOrderResponseSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toSDK(message.order) : undefined);
    return obj;
  },

  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    return {
      order: object?.order ? Order.fromAmino(object.order) : undefined
    };
  },

  toAmino(message: QueryOrderResponse): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  }

};

function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    filters: undefined,
    pagination: undefined
  };
}

export const QueryBidsRequest = {
  encode(message: QueryBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryBidsRequest {
    return {
      filters: isSet(object.filters) ? BidFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? BidFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryBidsRequestSDKType): QueryBidsRequest {
    return {
      filters: object.filters ? BidFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryBidsRequest): QueryBidsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    return {
      filters: object?.filters ? BidFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBidsRequest): QueryBidsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? BidFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}

export const QueryBidsResponse = {
  encode(message: QueryBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {};

    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryBidsResponseSDKType): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryBidsResponse): QueryBidsResponseSDKType {
    const obj: any = {};

    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toSDK(e) : undefined);
    } else {
      obj.bids = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBidsResponse): QueryBidsResponseAmino {
    const obj: any = {};

    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e) : undefined);
    } else {
      obj.bids = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: undefined
  };
}

export const QueryBidRequest = {
  encode(message: QueryBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBidRequest {
    return {
      id: isSet(object.id) ? BidID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.id = object.id !== undefined && object.id !== null ? BidID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: QueryBidRequestSDKType): QueryBidRequest {
    return {
      id: object.id ? BidID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: QueryBidRequest): QueryBidRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    return {
      id: object?.id ? BidID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined,
    escrowAccount: undefined
  };
}

export const QueryBidResponse = {
  encode(message: QueryBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }

    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;

        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBidResponse {
    return {
      bid: isSet(object.bid) ? Bid.fromJSON(object.bid) : undefined,
      escrowAccount: isSet(object.escrowAccount) ? Account.fromJSON(object.escrowAccount) : undefined
    };
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
    message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
    return message;
  },

  fromSDK(object: QueryBidResponseSDKType): QueryBidResponse {
    return {
      bid: object.bid ? Bid.fromSDK(object.bid) : undefined,
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },

  toSDK(message: QueryBidResponse): QueryBidResponseSDKType {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toSDK(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },

  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    return {
      bid: object?.bid ? Bid.fromAmino(object.bid) : undefined,
      escrowAccount: object?.escrow_account ? Account.fromAmino(object.escrow_account) : undefined
    };
  },

  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
    return obj;
  }

};

function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    filters: undefined,
    pagination: undefined
  };
}

export const QueryLeasesRequest = {
  encode(message: QueryLeasesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryLeasesRequest {
    return {
      filters: isSet(object.filters) ? LeaseFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryLeasesRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? LeaseFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryLeasesRequestSDKType): QueryLeasesRequest {
    return {
      filters: object.filters ? LeaseFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryLeasesRequest): QueryLeasesRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest {
    return {
      filters: object?.filters ? LeaseFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryLeasesRequest): QueryLeasesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LeaseFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    leases: [],
    pagination: undefined
  };
}

export const QueryLeasesResponse = {
  encode(message: QueryLeasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryLeasesResponse): unknown {
    const obj: any = {};

    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toJSON(e) : undefined);
    } else {
      obj.leases = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryLeasesResponseSDKType): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryLeasesResponse): QueryLeasesResponseSDKType {
    const obj: any = {};

    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryLeasesResponse): QueryLeasesResponseAmino {
    const obj: any = {};

    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e) : undefined);
    } else {
      obj.leases = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return {
    id: undefined
  };
}

export const QueryLeaseRequest = {
  encode(message: QueryLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLeaseRequest {
    return {
      id: isSet(object.id) ? LeaseID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: QueryLeaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    message.id = object.id !== undefined && object.id !== null ? LeaseID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: QueryLeaseRequestSDKType): QueryLeaseRequest {
    return {
      id: object.id ? LeaseID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: QueryLeaseRequest): QueryLeaseRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest {
    return {
      id: object?.id ? LeaseID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: QueryLeaseRequest): QueryLeaseRequestAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    lease: undefined,
    escrowPayment: undefined
  };
}

export const QueryLeaseResponse = {
  encode(message: QueryLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }

    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32());
          break;

        case 2:
          message.escrowPayment = FractionalPayment.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLeaseResponse {
    return {
      lease: isSet(object.lease) ? Lease.fromJSON(object.lease) : undefined,
      escrowPayment: isSet(object.escrowPayment) ? FractionalPayment.fromJSON(object.escrowPayment) : undefined
    };
  },

  toJSON(message: QueryLeaseResponse): unknown {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrowPayment = message.escrowPayment ? FractionalPayment.toJSON(message.escrowPayment) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    message.lease = object.lease !== undefined && object.lease !== null ? Lease.fromPartial(object.lease) : undefined;
    message.escrowPayment = object.escrowPayment !== undefined && object.escrowPayment !== null ? FractionalPayment.fromPartial(object.escrowPayment) : undefined;
    return message;
  },

  fromSDK(object: QueryLeaseResponseSDKType): QueryLeaseResponse {
    return {
      lease: object.lease ? Lease.fromSDK(object.lease) : undefined,
      escrowPayment: object.escrow_payment ? FractionalPayment.fromSDK(object.escrow_payment) : undefined
    };
  },

  toSDK(message: QueryLeaseResponse): QueryLeaseResponseSDKType {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toSDK(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrow_payment = message.escrowPayment ? FractionalPayment.toSDK(message.escrowPayment) : undefined);
    return obj;
  },

  fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse {
    return {
      lease: object?.lease ? Lease.fromAmino(object.lease) : undefined,
      escrowPayment: object?.escrow_payment ? FractionalPayment.fromAmino(object.escrow_payment) : undefined
    };
  },

  toAmino(message: QueryLeaseResponse): QueryLeaseResponseAmino {
    const obj: any = {};
    obj.lease = message.lease ? Lease.toAmino(message.lease) : undefined;
    obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment) : undefined;
    return obj;
  }

};