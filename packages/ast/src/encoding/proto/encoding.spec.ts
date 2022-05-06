import { createProtoObjectWithMethods as create } from './encoding';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { ProtoParseContext } from '../context';

const store = new ProtoStore(__dirname + '/../../../../../__fixtures__/chain1');

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

const createProtoObjectWithMethods = (name: string, proto: any) => {
    return create(new ProtoParseContext(), name, proto);
}


describe('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('MsgJoinPool', () => {
        expectCode(createProtoObjectWithMethods(
            'MsgJoinPool', getNestedProto(res).MsgJoinPool
        ))
    })
    it('MsgSwapExactAmountOut', () => {
        expectCode(createProtoObjectWithMethods(
            'MsgSwapExactAmountOut', getNestedProto(res).MsgSwapExactAmountOut
        ))
    })
    it('MsgSwapExactAmountIn', () => {
        expectCode(createProtoObjectWithMethods(
            'MsgSwapExactAmountIn', getNestedProto(res).MsgSwapExactAmountIn
        ))
    })

});

describe('google/api/expr/conformance/v1alpha1/conformance_service', () => {
    const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');
    const res = traverse(store, ref);
    it('ParseRequest', () => {
        expectCode(createProtoObjectWithMethods(
            'ParseRequest', getNestedProto(res).ParseRequest
        ))
    })
});

describe('google/api/servicecontrol/v1/log_entry', () => {
    const ref = store.findProto('google/api/servicecontrol/v1/log_entry.proto');
    const res = traverse(store, ref);
    it('LogEntry', () => {
        expectCode(createProtoObjectWithMethods(
            'LogEntry', getNestedProto(res).LogEntry
        ))
    })
});

describe('google/api/expr/v1alpha1/syntax', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/syntax.proto');
    const res = traverse(store, ref);
    it('Constant', () => {
        expectCode(createProtoObjectWithMethods(
            'Constant', getNestedProto(res).Constant
        ))
    })
});

describe('cosmos/tx/signing/v1beta1/signing', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    const res = traverse(store, ref);
    it('SignatureDescriptors', () => {
        expectCode(createProtoObjectWithMethods(
            'SignatureDescriptors', getNestedProto(res).SignatureDescriptors
        ))
    })
    it('SignatureDescriptor', () => {
        expectCode(createProtoObjectWithMethods(
            'SignatureDescriptor', getNestedProto(res).SignatureDescriptor
        ))
    })
});

describe('cosmos/tx/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
    const res = traverse(store, ref);
    it('AuxSignerData', () => {
        expectCode(createProtoObjectWithMethods(
            'AuxSignerData', getNestedProto(res).AuxSignerData
        ))
    })
    it('ModeInfo_Multi', () => {
        expectCode(createProtoObjectWithMethods(
            'ModeInfo_Multi', getNestedProto(res).ModeInfo
        ))
    })
});

describe('google/api/expr/v1alpha1/checked', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
    const res = traverse(store, ref);
    it('Type', () => {
        expectCode(createProtoObjectWithMethods(
            'Type', getNestedProto(res).Type
        ))
    })
    describe('nested', () => {
        it('MapType', () => {
            expectCode(createProtoObjectWithMethods(
                'Type_MapType', getNestedProto(res).Type.nested.MapType
            ))
        })
    })
    describe('typeHash (Long)', () => {
        it('CheckedExpr', () => {
            expectCode(createProtoObjectWithMethods(
                'CheckedExpr', getNestedProto(res).CheckedExpr
            ))
        })
    })
});

it('google/api/expr/v1beta1/source', () => {
    const ref = store.findProto('google/api/expr/v1beta1/source.proto');
    const res = traverse(store, ref);
    expectCode(createProtoObjectWithMethods(
        'SourceInfo', getNestedProto(res).SourceInfo
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    expectCode(createProtoObjectWithMethods(
        'PinCodesProposal', getNestedProto(res).PinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref);
    expectCode(createProtoObjectWithMethods(
        'UnpinCodesProposal', getNestedProto(res).UnpinCodesProposal
    ))
});

it('cosmwasm/wasm/v1/query', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/query.proto');
    const res = traverse(store, ref);
    expectCode(createProtoObjectWithMethods(
        'QueryRawContractStateRequest', getNestedProto(res).QueryRawContractStateRequest
    ))
});