import { Member, MemberSDKType, VoteOption, VoteOptionSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateGroup, MsgCreateGroupSDKType, MsgCreateGroupResponse, MsgCreateGroupResponseSDKType, MsgUpdateGroupMembers, MsgUpdateGroupMembersSDKType, MsgUpdateGroupMembersResponse, MsgUpdateGroupMembersResponseSDKType, MsgUpdateGroupAdmin, MsgUpdateGroupAdminSDKType, MsgUpdateGroupAdminResponse, MsgUpdateGroupAdminResponseSDKType, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataSDKType, MsgUpdateGroupMetadataResponse, MsgUpdateGroupMetadataResponseSDKType, MsgCreateGroupPolicy, MsgCreateGroupPolicySDKType, MsgCreateGroupPolicyResponse, MsgCreateGroupPolicyResponseSDKType, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicySDKType, MsgCreateGroupWithPolicyResponse, MsgCreateGroupWithPolicyResponseSDKType, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminSDKType, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyAdminResponseSDKType, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicySDKType, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponseSDKType, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataSDKType, MsgUpdateGroupPolicyMetadataResponse, MsgUpdateGroupPolicyMetadataResponseSDKType, MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgWithdrawProposal, MsgWithdrawProposalSDKType, MsgWithdrawProposalResponse, MsgWithdrawProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgLeaveGroup, MsgLeaveGroupSDKType, MsgLeaveGroupResponse, MsgLeaveGroupResponseSDKType } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  /*CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.*/

  updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
  /*UpdateGroupMembers updates the group members with given group id and admin address.*/

  updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
  /*UpdateGroupAdmin updates the group admin with given group id and previous admin address.*/

  updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
  /*UpdateGroupMetadata updates the group metadata with given group id and admin address.*/

  createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
  /*CreateGroupPolicy creates a new group policy using given DecisionPolicy.*/

  createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
  /*CreateGroupWithPolicy creates a new group with policy.*/

  updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /*UpdateGroupPolicyAdmin updates a group policy admin.*/

  updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /*UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.*/

  updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /*UpdateGroupPolicyMetadata updates a group policy metadata.*/

  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /*SubmitProposal submits a new proposal.*/

  withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
  /*WithdrawProposal aborts a proposal.*/

  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /*Vote allows a voter to vote on a proposal.*/

  exec(request: MsgExec): Promise<MsgExecResponse>;
  /*Exec executes a proposal.*/

  leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
  /*LeaveGroup allows a group member to leave the group.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createGroup = this.createGroup.bind(this);
    this.updateGroupMembers = this.updateGroupMembers.bind(this);
    this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
    this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
    this.createGroupPolicy = this.createGroupPolicy.bind(this);
    this.createGroupWithPolicy = this.createGroupWithPolicy.bind(this);
    this.updateGroupPolicyAdmin = this.updateGroupPolicyAdmin.bind(this);
    this.updateGroupPolicyDecisionPolicy = this.updateGroupPolicyDecisionPolicy.bind(this);
    this.updateGroupPolicyMetadata = this.updateGroupPolicyMetadata.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.withdrawProposal = this.withdrawProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.exec = this.exec.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
    return promise.then(data => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
  }

  updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse> {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
    return promise.then(data => MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data)));
  }

  updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse> {
    const data = MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
    return promise.then(data => MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data)));
  }

  updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse> {
    const data = MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
    return promise.then(data => MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)));
  }

  createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse> {
    const data = MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
    return promise.then(data => MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data)));
  }

  createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse> {
    const data = MsgCreateGroupWithPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
    return promise.then(data => MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data)));
  }

  updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse> {
    const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
    return promise.then(data => MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data)));
  }

  updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
    return promise.then(data => MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data)));
  }

  updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
    return promise.then(data => MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data)));
  }

  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse> {
    const data = MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
    return promise.then(data => MsgWithdrawProposalResponse.decode(new _m0.Reader(data)));
  }

  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse> {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
    return promise.then(data => MsgLeaveGroupResponse.decode(new _m0.Reader(data)));
  }

}