import cases from 'jest-in-case'
import { isRefIncluded } from '../src';
import { getTestProtoStore } from '../test-utils';

const store = getTestProtoStore();

const protos = [
    'cosmos/bank/v1beta1/bank.proto',
    'cosmos/bank/v1beta1/query.proto',
    'cosmos/bank/v1beta1/tx.proto',
    'cosmos/gov/v1beta1/gov.proto',
    'cosmos/gov/v1beta1/query.proto',
    'cosmos/gov/v1beta1/tx.proto',
    'akash/cert/v1beta2/query.proto',
    'google/api/expr/conformance/v1alpha1/conformance_service.proto',
    'osmosis/gamm/v1beta1/query.proto',
    'osmosis/gamm/v1beta1/tx.proto',
    'osmosis/gamm/v2/query.proto',
];
const protoNameValPairs = protos.map(el => {
    return {
        name: el,
        value: el
    }
});

cases(`isRefIncluded pkg evmos.erc20.*`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        packages: [
            'evmos.erc20.*'
        ]
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`isRefIncluded pkg *.gov.*`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        packages: [
            '*.gov.*'
        ]
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`isRefIncluded proto osmosis/**/gamm/**/*.proto`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        protos: [
            'osmosis/**/gamm/**/*.proto'
        ]
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`isRefIncluded proto osmosis/**/gamm/**/query.proto`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        protos: [
            'osmosis/**/gamm/**/query.proto'
        ]
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`isRefIncluded cosmos.*`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        packages: [
            'cosmos.*'
        ]
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`empty`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: [],
        packages: []
    });
    expect(included).toMatchSnapshot();
},
    protoNameValPairs
);

cases(`pkg osmosis.gamm.v1beta1`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: [],
        packages: ['osmosis.gamm.v1beta1']
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);

cases(`proto akash/cert/v1beta2/query.proto`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: ['akash/cert/v1beta2/query.proto'],
        packages: []
    });
    expect(included).toMatchSnapshot();
}, protoNameValPairs);