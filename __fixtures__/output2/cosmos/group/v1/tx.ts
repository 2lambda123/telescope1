//@ts-nocheck
/* eslint-disable */
import { Member, VoteOption, voteOptionFromJSON, voteOptionToJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,

  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;

    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";

    case Exec.EXEC_TRY:
      return "EXEC_TRY";

    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;

  /** members defines the group members. */
  members: Member[];

  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: Long;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;

  /** group_id is the unique ID of the group. */
  groupId: Long;

  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: Member[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;

  /** group_id is the unique ID of the group. */
  groupId: Long;

  /** new_admin is the group new admin account address. */
  newAdmin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;

  /** group_id is the unique ID of the group. */
  groupId: Long;

  /** metadata is the updated group's metadata. */
  metadata: string;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;

  /** group_id is the unique ID of the group. */
  groupId: Long;

  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;

  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;

  /** address is the account address of the group policy. */
  address: string;

  /** new_admin is the new group policy admin. */
  newAdmin: string;
}

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;

  /** members defines the group members. */
  members: Member[];

  /** group_metadata is any arbitrary metadata attached to the group. */
  groupMetadata: string;

  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  groupPolicyMetadata: string;

  /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
  groupPolicyAsAdmin: boolean;

  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  groupId: Long;

  /** group_policy_address is the account address of the newly created group policy. */
  groupPolicyAddress: string;
}

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;

  /** address is the account address of group policy. */
  address: string;

  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;

  /** address is the account address of group policy. */
  address: string;

  /** metadata is the updated group policy metadata. */
  metadata: string;
}

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** address is the account address of group policy. */
  address: string;

  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];

  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;

  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];

  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
}

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;

  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;

  /** voter is the voter account address. */
  voter: string;

  /** option is the voter's choice on the proposal. */
  option: VoteOption;

  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;

  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;

  /** signer is the account address used to execute the proposal. */
  signer: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {}

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;

  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {}

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupSDKType): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromAmino(e)) : [],
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toAmino(message: MsgCreateGroup): MsgCreateGroupSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: Long.UZERO
  };
}

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgCreateGroupResponseSDKType): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.group_id) ? object.group_id : undefined
    };
  },

  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseSDKType {
    const obj: any = {};
    message.groupId !== undefined && (obj.group_id = message.groupId);
    return obj;
  }

};

function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    groupId: Long.UZERO,
    memberUpdates: []
  };
}

export const MsgUpdateGroupMembers = {
  encode(message: MsgUpdateGroupMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    for (const v of message.memberUpdates) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      memberUpdates: Array.isArray(object?.memberUpdates) ? object.memberUpdates.map((e: any) => Member.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());

    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.memberUpdates = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.memberUpdates = object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgUpdateGroupMembersSDKType): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      groupId: isSet(object.group_id) ? object.group_id : undefined,
      memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => Member.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.group_id = message.groupId);

    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member_updates = [];
    }

    return obj;
  }

};

function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}

export const MsgUpdateGroupMembersResponse = {
  encode(_: MsgUpdateGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupMembersResponseSDKType): MsgUpdateGroupMembersResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    groupId: Long.UZERO,
    newAdmin: ""
  };
}

export const MsgUpdateGroupAdmin = {
  encode(message: MsgUpdateGroupAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupAdminSDKType): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      groupId: isSet(object.group_id) ? object.group_id : undefined,
      newAdmin: isSet(object.new_admin) ? object.new_admin : undefined
    };
  },

  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.group_id = message.groupId);
    message.newAdmin !== undefined && (obj.new_admin = message.newAdmin);
    return obj;
  }

};

function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}

export const MsgUpdateGroupAdminResponse = {
  encode(_: MsgUpdateGroupAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupAdminResponseSDKType): MsgUpdateGroupAdminResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: ""
  };
}

export const MsgUpdateGroupMetadata = {
  encode(message: MsgUpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupMetadataSDKType): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      groupId: isSet(object.group_id) ? object.group_id : undefined,
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.group_id = message.groupId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}

export const MsgUpdateGroupMetadataResponse = {
  encode(_: MsgUpdateGroupMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupMetadataResponseSDKType): MsgUpdateGroupMetadataResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    admin: "",
    groupId: Long.UZERO,
    metadata: "",
    decisionPolicy: undefined
  };
}

export const MsgCreateGroupPolicy = {
  encode(message: MsgCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.metadata = object.metadata ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgCreateGroupPolicySDKType): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      groupId: isSet(object.group_id) ? object.group_id : undefined,
      metadata: isSet(object.metadata) ? object.metadata : undefined,
      decisionPolicy: isSet(object.decision_policy) ? Any.fromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicySDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.group_id = message.groupId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined);
    return obj;
  }

};

function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return {
    address: ""
  };
}

export const MsgCreateGroupPolicyResponse = {
  encode(message: MsgCreateGroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupPolicyResponseSDKType): MsgCreateGroupPolicyResponse {
    return {
      address: isSet(object.address) ? object.address : undefined
    };
  },

  toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    admin: "",
    address: "",
    newAdmin: ""
  };
}

export const MsgUpdateGroupPolicyAdmin = {
  encode(message: MsgUpdateGroupPolicyAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyAdminSDKType): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      address: isSet(object.address) ? object.address : undefined,
      newAdmin: isSet(object.new_admin) ? object.new_admin : undefined
    };
  },

  toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.new_admin = message.newAdmin);
    return obj;
  }

};

function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: undefined
  };
}

export const MsgCreateGroupWithPolicy = {
  encode(message: MsgCreateGroupWithPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }

    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }

    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;

        case 3:
          message.groupMetadata = reader.string();
          break;

        case 4:
          message.groupPolicyMetadata = reader.string();
          break;

        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;

        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : [],
      groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
      groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
      groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }

    message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? "";
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgCreateGroupWithPolicySDKType): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromAmino(e)) : [],
      groupMetadata: isSet(object.group_metadata) ? object.group_metadata : undefined,
      groupPolicyMetadata: isSet(object.group_policy_metadata) ? object.group_policy_metadata : undefined,
      groupPolicyAsAdmin: isSet(object.group_policy_as_admin) ? object.group_policy_as_admin : undefined,
      decisionPolicy: isSet(object.decision_policy) ? Any.fromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicySDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);

    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }

    message.groupMetadata !== undefined && (obj.group_metadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined && (obj.group_policy_metadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined && (obj.group_policy_as_admin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined);
    return obj;
  }

};

function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    groupId: Long.UZERO,
    groupPolicyAddress: ""
  };
}

export const MsgCreateGroupWithPolicyResponse = {
  encode(message: MsgCreateGroupWithPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }

    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.groupId = (reader.uint64() as Long);
          break;

        case 2:
          message.groupPolicyAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
    };
  },

  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    return message;
  },

  fromAmino(object: MsgCreateGroupWithPolicyResponseSDKType): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: isSet(object.group_id) ? object.group_id : undefined,
      groupPolicyAddress: isSet(object.group_policy_address) ? object.group_policy_address : undefined
    };
  },

  toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseSDKType {
    const obj: any = {};
    message.groupId !== undefined && (obj.group_id = message.groupId);
    message.groupPolicyAddress !== undefined && (obj.group_policy_address = message.groupPolicyAddress);
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}

export const MsgUpdateGroupPolicyAdminResponse = {
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyAdminResponseSDKType): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    admin: "",
    address: "",
    decisionPolicy: undefined
  };
}

export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyDecisionPolicySDKType): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      address: isSet(object.address) ? object.address : undefined,
      decisionPolicy: isSet(object.decision_policy) ? Any.fromAmino(object.decision_policy) : undefined
    };
  },

  toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicySDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined);
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseSDKType): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    admin: "",
    address: "",
    metadata: ""
  };
}

export const MsgUpdateGroupPolicyMetadata = {
  encode(message: MsgUpdateGroupPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateGroupPolicyMetadataSDKType): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? object.admin : undefined,
      address: isSet(object.address) ? object.address : undefined,
      metadata: isSet(object.metadata) ? object.metadata : undefined
    };
  },

  toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataSDKType {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  }

};

function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}

export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },

  fromAmino(_: MsgUpdateGroupPolicyMetadataResponseSDKType): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },

  toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    address: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.proposers.push(reader.string());
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 5:
          message.exec = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.address = object.address ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },

  fromAmino(object: MsgSubmitProposalSDKType): MsgSubmitProposal {
    return {
      address: isSet(object.address) ? object.address : undefined,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: isSet(object.metadata) ? object.metadata : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toAmino(message: MsgSubmitProposal): MsgSubmitProposalSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }

    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  }

};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined
    };
  },

  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    return obj;
  }

};

function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    proposalId: Long.UZERO,
    address: ""
  };
}

export const MsgWithdrawProposal = {
  encode(message: MsgWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromAmino(object: MsgWithdrawProposalSDKType): MsgWithdrawProposal {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      address: isSet(object.address) ? object.address : undefined
    };
  },

  toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  }

};

function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}

export const MsgWithdrawProposalResponse = {
  encode(_: MsgWithdrawProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },

  fromAmino(_: MsgWithdrawProposalResponseSDKType): MsgWithdrawProposalResponse {
    return {};
  },

  toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = (reader.int32() as any);
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.exec = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },

  fromAmino(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      voter: isSet(object.voter) ? object.voter : undefined,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? object.metadata : undefined,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0
    };
  },

  toAmino(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  }

};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgVoteResponse {
    return {};
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },

  fromAmino(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },

  toAmino(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgExec(): MsgExec {
  return {
    proposalId: Long.UZERO,
    signer: ""
  };
}

export const MsgExec = {
  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },

  fromAmino(object: MsgExecSDKType): MsgExec {
    return {
      proposalId: isSet(object.proposal_id) ? object.proposal_id : undefined,
      signer: isSet(object.signer) ? object.signer : undefined
    };
  },

  toAmino(message: MsgExec): MsgExecSDKType {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposal_id = message.proposalId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  }

};

function createBaseMsgExecResponse(): MsgExecResponse {
  return {};
}

export const MsgExecResponse = {
  encode(_: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgExecResponse {
    return {};
  },

  toJSON(_: MsgExecResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },

  fromAmino(_: MsgExecResponseSDKType): MsgExecResponse {
    return {};
  },

  toAmino(_: MsgExecResponse): MsgExecResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    address: "",
    groupId: Long.UZERO
  };
}

export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.groupId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  },

  fromAmino(object: MsgLeaveGroupSDKType): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? object.address : undefined,
      groupId: isSet(object.group_id) ? object.group_id : undefined
    };
  },

  toAmino(message: MsgLeaveGroup): MsgLeaveGroupSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.group_id = message.groupId);
    return obj;
  }

};

function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}

export const MsgLeaveGroupResponse = {
  encode(_: MsgLeaveGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },

  fromAmino(_: MsgLeaveGroupResponseSDKType): MsgLeaveGroupResponse {
    return {};
  },

  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;

  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;

  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;

  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;

  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;

  /** CreateGroupWithPolicy creates a new group with policy. */
  CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;

  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;

  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;

  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;

  /** SubmitProposal submits a new proposal. */
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;

  /** WithdrawProposal aborts a proposal. */
  WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;

  /** Vote allows a voter to vote on a proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;

  /** Exec executes a proposal. */
  Exec(request: MsgExec): Promise<MsgExecResponse>;

  /** LeaveGroup allows a group member to leave the group. */
  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
    this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
    this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
    this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
    this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
    this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
    this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
    this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.WithdrawProposal = this.WithdrawProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Exec = this.Exec.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
  }

  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroup", data);
    return promise.then(data => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse> {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMembers", data);
    return promise.then(data => MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse> {
    const data = MsgUpdateGroupAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupAdmin", data);
    return promise.then(data => MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse> {
    const data = MsgUpdateGroupMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupMetadata", data);
    return promise.then(data => MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)));
  }

  CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse> {
    const data = MsgCreateGroupPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupPolicy", data);
    return promise.then(data => MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data)));
  }

  CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse> {
    const data = MsgCreateGroupWithPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "CreateGroupWithPolicy", data);
    return promise.then(data => MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse> {
    const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyAdmin", data);
    return promise.then(data => MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyDecisionPolicy", data);
    return promise.then(data => MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data)));
  }

  UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "UpdateGroupPolicyMetadata", data);
    return promise.then(data => MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data)));
  }

  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse> {
    const data = MsgWithdrawProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "WithdrawProposal", data);
    return promise.then(data => MsgWithdrawProposalResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse> {
    const data = MsgLeaveGroup.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Msg", "LeaveGroup", data);
    return promise.then(data => MsgLeaveGroupResponse.decode(new _m0.Reader(data)));
  }

}