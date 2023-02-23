import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashAuditV1beta2Queryrpc from "./akash/audit/v1beta2/query.rpc.Query";
import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query";
import * as _AkashDeploymentV1beta1Queryrpc from "./akash/deployment/v1beta1/query.rpc.Query";
import * as _AkashDeploymentV1beta2Queryrpc from "./akash/deployment/v1beta2/query.rpc.Query";
import * as _AkashEscrowV1beta1Queryrpc from "./akash/escrow/v1beta1/query.rpc.Query";
import * as _AkashEscrowV1beta2Queryrpc from "./akash/escrow/v1beta2/query.rpc.Query";
import * as _AkashMarketV1beta2Queryrpc from "./akash/market/v1beta2/query.rpc.Query";
import * as _AkashProviderV1beta2Queryrpc from "./akash/provider/v1beta2/query.rpc.Query";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
import * as _EvmosClaimsV1Queryrpc from "./evmos/claims/v1/query.rpc.Query";
import * as _EvmosEpochsV1Queryrpc from "./evmos/epochs/v1/query.rpc.Query";
import * as _EvmosErc20V1Queryrpc from "./evmos/erc20/v1/query.rpc.Query";
import * as _EvmosFeesV1Queryrpc from "./evmos/fees/v1/query.rpc.Query";
import * as _EvmosIncentivesV1Queryrpc from "./evmos/incentives/v1/query.rpc.Query";
import * as _EvmosInflationV1Queryrpc from "./evmos/inflation/v1/query.rpc.Query";
import * as _EvmosRecoveryV1Queryrpc from "./evmos/recovery/v1/query.rpc.Query";
import * as _EvmosVestingV1Queryrpc from "./evmos/vesting/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _IbcCorePortV1Queryrpc from "./ibc/core/port/v1/query.rpc.Query";
import * as _OsmosisClaimV1beta1Queryrpc from "./osmosis/claim/v1beta1/query.rpc.Query";
import * as _OsmosisEpochsQueryrpc from "./osmosis/epochs/query.rpc.Query";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";
import * as _OsmosisIbcratelimitV1beta1Queryrpc from "./osmosis/ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _OsmosisIncentivesQueryrpc from "./osmosis/incentives/query.rpc.Query";
import * as _OsmosisLockupQueryrpc from "./osmosis/lockup/query.rpc.Query";
import * as _OsmosisMintV1beta1Queryrpc from "./osmosis/mint/v1beta1/query.rpc.Query";
import * as _OsmosisPoolincentivesV1beta1Queryrpc from "./osmosis/pool-incentives/v1beta1/query.rpc.Query";
import * as _OsmosisSuperfluidQueryrpc from "./osmosis/superfluid/query.rpc.Query";
import * as _OsmosisTokenfactoryV1beta1Queryrpc from "./osmosis/tokenfactory/v1beta1/query.rpc.Query";
import * as _OsmosisTwapV1beta1Queryrpc from "./osmosis/twap/v1beta1/query.rpc.Query";
import * as _OsmosisTxfeesV1beta1Queryrpc from "./osmosis/txfees/v1beta1/query.rpc.Query";
export const createRpcQueryStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      audit: {
        v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryStores(rpc)
      },
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryStores(rpc)
      },
      deployment: {
        v1beta1: _AkashDeploymentV1beta1Queryrpc.createRpcQueryStores(rpc),
        v1beta2: _AkashDeploymentV1beta2Queryrpc.createRpcQueryStores(rpc)
      },
      escrow: {
        v1beta1: _AkashEscrowV1beta1Queryrpc.createRpcQueryStores(rpc),
        v1beta2: _AkashEscrowV1beta2Queryrpc.createRpcQueryStores(rpc)
      },
      market: {
        v1beta2: _AkashMarketV1beta2Queryrpc.createRpcQueryStores(rpc)
      },
      provider: {
        v1beta2: _AkashProviderV1beta2Queryrpc.createRpcQueryStores(rpc)
      }
    },
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryStores(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      base: {
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryStores(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryStores(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryStores(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryStores(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryStores(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryStores(rpc)
      }
    },
    evmos: {
      claims: {
        v1: _EvmosClaimsV1Queryrpc.createRpcQueryStores(rpc)
      },
      epochs: {
        v1: _EvmosEpochsV1Queryrpc.createRpcQueryStores(rpc)
      },
      erc20: {
        v1: _EvmosErc20V1Queryrpc.createRpcQueryStores(rpc)
      },
      fees: {
        v1: _EvmosFeesV1Queryrpc.createRpcQueryStores(rpc)
      },
      incentives: {
        v1: _EvmosIncentivesV1Queryrpc.createRpcQueryStores(rpc)
      },
      inflation: {
        v1: _EvmosInflationV1Queryrpc.createRpcQueryStores(rpc)
      },
      recovery: {
        v1: _EvmosRecoveryV1Queryrpc.createRpcQueryStores(rpc)
      },
      vesting: {
        v1: _EvmosVestingV1Queryrpc.createRpcQueryStores(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryStores(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryStores(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryStores(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryStores(rpc)
        },
        port: {
          v1: _IbcCorePortV1Queryrpc.createRpcQueryStores(rpc)
        }
      }
    },
    osmosis: {
      claim: {
        v1beta1: _OsmosisClaimV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryStores(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryStores(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryStores(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      incentives: _OsmosisIncentivesQueryrpc.createRpcQueryStores(rpc),
      lockup: _OsmosisLockupQueryrpc.createRpcQueryStores(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryStores(rpc),
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryStores(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryStores(rpc)
      }
    }
  };
};