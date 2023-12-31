export interface AminoException {
    aminoType?: string;
    toAmino?: any;
    fromAmino?: any;
}
export interface AminoExceptions {
    [key: string]: AminoException;
}

export const DEFAULT_AMINO_EXCEPTIONS: AminoExceptions = {
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
        aminoType: 'cosmos-sdk/MsgModifyWithdrawAddress'
    },
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
        aminoType: 'cosmos-sdk/MsgWithdrawDelegationReward'
    },
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': {
        // aminoType: 'cosmos-sdk/MsgWithdrawValCommission' // why is this what is in cosmos-sdk?
        aminoType: 'cosmos-sdk/MsgWithdrawValidatorCommission'
    },
    '/cosmos.gov.v1.MsgSubmitProposal': {
        aminoType: 'cosmos-sdk/v1/MsgSubmitProposal'
    },
    '/cosmos.gov.v1.MsgDeposit': {
        aminoType: 'cosmos-sdk/v1/MsgDeposit'
    },
    '/cosmos.gov.v1.MsgVote': {
        aminoType: 'cosmos-sdk/v1/MsgVote'
    },
    '/cosmos.gov.v1.MsgVoteWeighted': {
        aminoType: 'cosmos-sdk/v1/MsgVoteWeighted'
    },
    '/cosmos.gov.v1.MsgExecLegacyContent': {
        aminoType: 'cosmos-sdk/v1/MsgExecLegacyContent'
    },
    '/cosmos.group.v1.MsgSubmitProposal': {
        aminoType: 'cosmos-sdk/group/MsgSubmitProposal'
    },
    '/cosmos.group.v1.MsgWithdrawProposal': {
        aminoType: 'cosmos-sdk/group/MsgWithdrawProposal'
    },
    '/cosmos.group.v1.MsgVote': {
        aminoType: 'cosmos-sdk/group/MsgVote'
    },
    '/cosmos.group.v1.MsgExec': {
        aminoType: 'cosmos-sdk/group/MsgExec'
    },
    '/cosmos.group.v1.MsgLeaveGroup': {
        aminoType: 'cosmos-sdk/group/MsgLeaveGroup'
    },
    // TODO make a way to disable Amino if not registered
    '/cosmos.nft.v1beta1.MsgSend': {
        // TODO find aminoType name
        aminoType: 'cosmos-sdk/MsgNFTSend'
    }
}

