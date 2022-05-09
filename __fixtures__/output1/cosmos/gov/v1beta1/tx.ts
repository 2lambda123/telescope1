import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgSubmitProposal {
  content: Any;
  initialDeposit: Coin[];
  proposer: string;
}

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
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
          message.content = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
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
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);

    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  }

};
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer = _m0.Writer.create()): _m0.Writer {
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
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(object: I): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }

};
export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
}

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: undefined
  };
}

export const MsgVote = {
  encode(message: MsgVote, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  }

};
export interface MsgVoteResponse {}

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(message: MsgVoteResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgVoteResponse {
    return {};
  },

  toJSON(message: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(object: I): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  }

};
export interface MsgVoteWeighted {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
}

function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: []
  };
}

export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();

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
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVoteWeighted {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteWeighted>, I>>(object: I): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgVoteWeightedResponse {}

function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}

export const MsgVoteWeightedResponse = {
  encode(message: MsgVoteWeightedResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();

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

  fromJSON(object: any): MsgVoteWeightedResponse {
    return {};
  },

  toJSON(message: MsgVoteWeightedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteWeightedResponse>, I>>(object: I): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  }

};
export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}

function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeposit {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgDepositResponse {}

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromJSON(object: any): MsgDepositResponse {
    return {};
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};
export interface AminoMsgSubmitProposal extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: {
    content: {
      type_url: string;
      value: Uint8Array;
    };
    initial_deposit: {
      denom: string;
      amount: string;
    }[];
    proposer: string;
  };
}
export interface AminoMsgVote extends AminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
  };
}
export interface AminoMsgVoteWeighted extends AminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: {
    proposal_id: string;
    voter: string;
    options: {
      option: number;
      weight: string;
    }[];
  };
}
export interface AminoMsgDeposit extends AminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: {
    proposal_id: string;
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.gov.v1beta1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    toAmino: ({
      content,
      initialDeposit,
      proposer
    }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
      return {
        content: {
          type_url: content.typeUrl,
          value: content.value
        },
        initial_deposit: initialDeposit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer
      };
    },
    fromAmino: ({
      content,
      initial_deposit,
      proposer
    }: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
      return {
        content: {
          typeUrl: content.type_url,
          value: content.value
        },
        initialDeposit: initial_deposit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        proposer
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVote": {
    aminoType: "cosmos-sdk/MsgVote",
    toAmino: ({
      proposalId,
      voter,
      option
    }: MsgVote): AminoMsgVote["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        option
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option
    }: AminoMsgVote["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option)
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgVoteWeighted": {
    aminoType: "cosmos-sdk/MsgVoteWeighted",
    toAmino: ({
      proposalId,
      voter,
      options
    }: MsgVoteWeighted): AminoMsgVoteWeighted["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        options: options.map(el0 => ({
          option: el0.option,
          weight: el0.weight
        }))
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      options
    }: AminoMsgVoteWeighted["value"]): MsgVoteWeighted => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        options: options.map(el0 => ({
          option: voteOptionFromJSON(el0.option),
          weight: el0.weight
        }))
      };
    }
  },
  "/cosmos.gov.v1beta1.MsgDeposit": {
    aminoType: "cosmos-sdk/MsgDeposit",
    toAmino: ({
      proposalId,
      depositor,
      amount
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        proposal_id: proposalId.toString(),
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      proposal_id,
      depositor,
      amount
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        proposalId: Long.fromString(proposal_id),
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};