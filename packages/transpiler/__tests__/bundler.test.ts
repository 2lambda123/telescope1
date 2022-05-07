import { TelescopeBuilder } from '../src';
import * as t from '@babel/types';

import { ProtoStore } from '@osmonauts/proto-parser'
import { bundlePackages, getPackagesBundled } from '../src/bundle'
import generate from '@babel/generator';

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const input = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
};
// const telescope = new TelescopeBuilder(input);

it('getPackagesBundled', () => {
    const bundle = getPackagesBundled(store);
    expect(Object.keys(bundle)).toEqual(["ics23", "cosmos_proto", "cosmos", "cosmwasm", "gogoproto", "google", "ibc", "osmosis", "secret", "tendermint"]);
});

it('bundlePackages', () => {
    const bundled = bundlePackages(store, input);
    const packaged = bundled.reduce((m, bundle) => {
        m[bundle.base] = {
            bundle: '.' + bundle.bundleFile.split('__fixtures__')[1],
            base: bundle.base,
            code: generate(t.program([
                ...bundle.importPaths,
                ...bundle.body
            ])).code
        };
        return m;
    }, {});
    expect(packaged).toMatchSnapshot();
})