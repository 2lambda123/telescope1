import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryOrdersRequest, QueryOrdersRequestAmino, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseAmino, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestAmino, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseAmino, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestAmino, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseAmino, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestAmino, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseAmino, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestAmino, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseAmino, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestAmino, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseAmino, QueryLeaseResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }

  /* Orders queries orders with filters */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/orders/list`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }

  /* Order queries order details */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/orders/info`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint, options);
  }

  /* Bids queries bids with filters */
  async bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/bids/list`;
    return await this.req.get<QueryBidsResponseSDKType>(endpoint, options);
  }

  /* Bid queries bid details */
  async bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/bids/info`;
    return await this.req.get<QueryBidResponseSDKType>(endpoint, options);
  }

  /* Leases queries leases with filters */
  async leases(params: QueryLeasesRequest): Promise<QueryLeasesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/market/v1beta2/leases/list`;
    return await this.req.get<QueryLeasesResponseSDKType>(endpoint, options);
  }

  /* Lease queries lease details */
  async lease(params: QueryLeaseRequest): Promise<QueryLeaseResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/market/v1beta2/leases/info`;
    return await this.req.get<QueryLeaseResponseSDKType>(endpoint, options);
  }

}