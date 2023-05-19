import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
export const createRPCMsgClient = async ({
  grpcWebEndpoint
}: {
  grpcWebEndpoint: string;
}) => {
  grpcWebEndpoint = grpcWebEndpoint.replace(/\/*$/, "\"\"");
  const {
    GrpcWebImpl
  } = await import("../cosmos/app/v1alpha1/query.rpc.Query");
  let grpcWeb;
  if (typeof document !== "undefined") {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: grpc.CrossBrowserHttpTransport({
        withCredentials: false
      })
    });
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: NodeHttpTransport()
    });
  } else {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: NodeHttpTransport()
    });
  }
  return {
    cosmos: {
      authz: {
        v1beta1: new (await import("./authz/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("./bank/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      crisis: {
        v1beta1: new (await import("./crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      distribution: {
        v1beta1: new (await import("./distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("./evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("./feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("./gov/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb),
        v1beta1: new (await import("./gov/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      group: {
        v1: new (await import("./group/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("./nft/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("./slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("./staking/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("./upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      },
      vesting: {
        v1beta1: new (await import("./vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
      }
    }
  };
};