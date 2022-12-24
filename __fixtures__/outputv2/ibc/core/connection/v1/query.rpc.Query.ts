import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndAminoType, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionAminoType, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightAminoType, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateAminoType, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../../google/protobuf/any";
import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionRequestAmino, QueryConnectionRequestAminoType, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseAmino, QueryConnectionResponseAminoType, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestAmino, QueryConnectionsRequestAminoType, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseAmino, QueryConnectionsResponseAminoType, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestAmino, QueryClientConnectionsRequestAminoType, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseAmino, QueryClientConnectionsResponseAminoType, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestAmino, QueryConnectionClientStateRequestAminoType, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseAmino, QueryConnectionClientStateResponseAminoType, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestAmino, QueryConnectionConsensusStateRequestAminoType, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseAmino, QueryConnectionConsensusStateResponseAminoType, QueryConnectionConsensusStateResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;

  /** Connections queries all the IBC connections of a chain. */
  connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;

  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;

  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;

  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }

  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new _m0.Reader(data)));
  }

  connections(request: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new _m0.Reader(data)));
  }

  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
  }

  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
  }

  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
      return queryService.connection(request);
    },

    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
      return queryService.connections(request);
    },

    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
      return queryService.clientConnections(request);
    },

    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
      return queryService.connectionClientState(request);
    },

    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
      return queryService.connectionConsensusState(request);
    }

  };
};