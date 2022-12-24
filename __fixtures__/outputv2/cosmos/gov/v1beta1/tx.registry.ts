import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionAmino, VoteOptionAminoType, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionAminoType, WeightedVoteOptionSDKType, TextProposal, TextProposalAmino, TextProposalAminoType, TextProposalSDKType } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalAmino, RegisterIncentiveProposalAminoType, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalAmino, ClientUpdateProposalAminoType, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalAmino, UpgradeProposalAminoType, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalAmino, ReplacePoolIncentivesProposalAminoType, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalAmino, UpdatePoolIncentivesProposalAminoType, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalAmino, SetSuperfluidAssetsProposalAminoType, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalAmino, RemoveSuperfluidAssetsProposalAminoType, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalAmino, UpdateUnpoolWhiteListProposalAminoType, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalAmino, UpdateFeeTokenProposalAminoType, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgSubmitProposalAmino, MsgSubmitProposalAminoType, MsgSubmitProposalSDKType, MsgVote, MsgVoteAmino, MsgVoteAminoType, MsgVoteSDKType, MsgVoteWeighted, MsgVoteWeightedAmino, MsgVoteWeightedAminoType, MsgVoteWeightedSDKType, MsgDeposit, MsgDepositAmino, MsgDepositAminoType, MsgDepositSDKType } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },

    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value
      };
    },

    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value
      };
    }

  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.toJSON(value)
      };
    },

    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.toJSON(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    }

  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },

    vote(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    },

    voteWeighted(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromJSON(value)
      };
    },

    deposit(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    }

  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },

    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    }

  }
};