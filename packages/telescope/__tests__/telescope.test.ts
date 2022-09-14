import { TelescopeBuilder } from '../src/builder';
import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeOptions } from '@osmonauts/types';
import { bundleBaseRegistries, bundleRegistries, parseContextsForRegistry } from '../src/bundle'
import { TelescopeInput } from '../src';
import { kebab } from "case";
import { join } from 'path';
import { getTestProtoStore } from '../test-utils';

const outPath = __dirname + '/../../../__fixtures__/output1';
const store = getTestProtoStore();
const contractsDir = __dirname + '/../../../__fixtures__/wasm/';
store.traverseAll();

const options: TelescopeOptions = {

  tsDisable: {
    disableAll: false,
    patterns: [
      'osmosis/**/*amino.ts',
    ],
    files: [
      'akash/deployment/v1beta1/deployment.ts'
    ]
  },

  prototypes: {
    parser: {
      keepCase: false
    },
    includePackageVar: true,
    fieldDefaultIsOptional: false,
    useOptionalNullable: true,
    allowUndefinedTypes: false,
    excluded: {
      packages: [
        'cosmos.gov.v1',
        'cosmos.group.v1'
      ],
      protos: [
        'cosmos/authz/v1beta1/event.proto'
      ]
    },
    typingsFormat: {
      useDeepPartial: true,
      useExact: false,
      timestamp: 'date',
      duration: 'duration'
    }
  },

  bundle: {
    enabled: true
  },

  cosmwasm: {
    contracts: [
      {
        name: 'SG721',
        dir: join(contractsDir, 'sg721')
      },
      {
        name: 'Minter',
        dir: join(contractsDir, 'minter')
      }
    ],
    outPath,
    options: {
      bundle: {
        bundleFile: 'contracts.ts',
        scope: 'contracts'
      },
      types: {
        enabled: true
      },
      client: {
        enabled: true
      },
      reactQuery: {
        enabled: true,
        optionalClient: true,
        version: 'v4',
        mutations: true
      },
      recoil: {
        enabled: false
      },
      messageComposer: {
        enabled: false
      }
    }
  },

  stargateClients: {
    enabled: true,
    includeCosmosDefaultTypes: true
  },

  aggregatedLCD: {
    dir: 'osmosis',
    filename: 'agg-lcd.ts',
    packages: [
      'cosmos.bank.v1beta1',
      'osmosis.gamm.v1beta1'
    ],
    addToBundle: true
  },

  lcdClients: {
    enabled: true,
    scopedIsExclusive: false,
    scoped: [
      {
        dir: 'osmosis',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'osmosis.gamm.v1beta1'
        ],
        addToBundle: true,
        methodName: 'createCustomLCDClient'
      },
      {
        dir: 'evmos',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ],
        addToBundle: true,
        methodName: 'createEvmosLCDClient'
      }
    ]
  },

  rpcClients: {
    enabled: true,
    camelCase: true,
    scopedIsExclusive: false,
    scoped: [
      {
        dir: 'cosmos',
        filename: 'cosmos-rpc-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1'
        ],
        addToBundle: true,
        methodNameQuery: 'createCosmicRPCQueryClient',
        methodNameTx: 'createCosmicRPCTxClient'
      },
      {
        dir: 'evmos',
        filename: 'evmos-rpc-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ],
        addToBundle: true,
        methodNameQuery: 'createEvmosRPCQueryClient',
        methodNameTx: 'createEvmosRPCTxClient'
      }
    ]
  },

  aminoEncoding: {
    enabled: true,
    exceptions: {
      '/akash.audit.v1beta2.MsgSignProviderAttributes': {
        aminoType: 'mymessage-testonly'
      }
    },
    typeUrlToAmino: (typeUrl: string) => {
      const name = typeUrl.replace(/^\//, '');
      const elements = name.split('.');
      const pkg = elements[0];

      switch (pkg) {
        case 'akash': {
          const n = elements
            .filter(a => !a.match(/v1beta1/));
          n[n.length - 1] = kebab(n[n.length - 1]);
          n[n.length - 1] = n[n.length - 1].replace(/^msg-/, 'testonly-');
          return n.join('/');
        }
      }
    },
  },
  packages: {
    akash: {
      deployment: {
        v1beta1: {
          prototypes: {
            allowUndefinedTypes: true,
            typingsFormat: {
              useDeepPartial: false
            }
          },
          aminoEncoding: {
            enabled: false
          }
        }
      },
      prototypes: {
        typingsFormat: {
          useExact: true
        }
      }
    }
  }
};

const input: TelescopeInput = {
  outPath,
  protoDirs: [__dirname + '/../../../__fixtures__/chain1'],
  options
};

const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
  it('bundleRegistries', async () => {
    await telescope.build();
    const registries = bundleRegistries(telescope);
    const result = registries.map(reg => ({
      ['package']: reg.package,
      contexts: parseContextsForRegistry(reg.contexts)
    }))
    // console.log(JSON.stringify(result, null, 2));
  });

  it('bundleBaseRegistries', () => {
    const registries = bundleBaseRegistries(telescope);
    const result = registries.map(reg => ({
      base: reg.base,
      pkgs: reg.pkgs.map(
        obj => {
          return {
            ['package']: obj.package,
            contexts: parseContextsForRegistry(obj.contexts)
          }
        }
      )
    }));
    // console.log(JSON.stringify(result, null, 2));
  });
})





