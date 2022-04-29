import { createProtoObjectWithMethods } from './encoding';
import generate from '@babel/generator';
import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'

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

it('cosmos/authz/v1beta1/authz', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const res = traverse(store, ref.proto);
});

it('osmosis/gamm/v1beta1/tx', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const res = traverse(store, ref.proto);
    expectCode(createProtoObjectWithMethods(
        'MsgJoinPool', getNestedProto(res).MsgJoinPool
    ))
});

it('cosmos/tx/signing/v1beta1/signing', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    const res = traverse(store, ref.proto);
});

it('cosmos/tx/v1beta1/tx', () => {
    const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
    const res = traverse(store, ref.proto);
});

it('cosmwasm/wasm/v1/proposal', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
    const res = traverse(store, ref.proto);
});

it('cosmwasm/wasm/v1/query', () => {
    const ref = store.findProto('cosmwasm/wasm/v1/query.proto');
    const res = traverse(store, ref.proto);
});
