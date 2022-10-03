import { Rpc } from "../helpers";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createEvmosRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.query")).createRpcQueryExtension(client)
      }
    },
    evmos: {
      erc20: {
        v1: (await import("./erc20/v1/query.rpc.query")).createRpcQueryExtension(client)
      }
    }
  };
};