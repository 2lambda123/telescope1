import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
  /*Proposal queries proposal details based on ProposalID.*/

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
  /*Proposals queries all proposals based on given status.*/

  vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
  /*Vote queries voted information based on proposalID, voterAddr.*/

  votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
  /*Votes queries votes of a given proposal.*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries all parameters of the gov module.*/

  deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType>;
  /*Deposit queries single deposit information based proposalID, depositAddr.*/

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
  /*Deposits queries all deposits of a single proposal.*/

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
  /*TallyResult queries the tally of a proposal vote.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new _m0.Reader(data)));
  }

  vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  }

  votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType> {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new _m0.Reader(data)));
  }

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }

}