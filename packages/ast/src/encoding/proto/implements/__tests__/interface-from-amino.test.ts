import { InterfaceTypeUrlMap, TraverseTypeUrlRef } from '@osmonauts/types';
import { expectCode, printCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceFromAminoHelper, createInterfaceFromAmino } from '../from-amino';

const store = getTestProtoStore();
store.options.interfaces.enabled = true;
store.options.aminoEncoding.enabled = true;
store.options.aminoEncoding.useLegacyInlineEncoding = false;
store.traverseAll();

const typeMap: InterfaceTypeUrlMap = {
    ProposalContentI: [
        {
            ref: 'a/b/c.proto',
            pkg: 'a.b.c',
            types: [
                {
                    typeUrl: '/cosmos.gov.v1beta1.TextProposal',
                    aminoType: 'cosmos-sdk/TextProposal',
                    type: 'TextProposal',
                    importAs: 'TextProposal'
                }
            ]
        }
    ]
};

describe('ProposalContent', () => {
    const txRef = store.findProto('cosmos/gov/v1/tx.proto');
    const txContext = new ProtoParseContext(txRef, store, store.options);
    it('ProposalContent helper', () => {
        expectCode(createInterfaceFromAminoHelper(
            txContext,
            'ProposalContentI_fromAmino',
            typeMap['ProposalContentI']
        ));
    });
    it('ProposalContent', () => {
        expectCode(createInterfaceFromAmino(
            txContext,
            txRef,
            'ProposalContentI',
        ));
    });
});

describe('MsgCreateValidator', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/tx.proto');
    const ctx = new ProtoParseContext(ref, store, store.options);
    it('MsgCreateValidator', () => {
        expectCode(createInterfaceFromAmino(
            ctx,
            ref,
            'cosmos.crypto.PubKey',
        ));
    });
});