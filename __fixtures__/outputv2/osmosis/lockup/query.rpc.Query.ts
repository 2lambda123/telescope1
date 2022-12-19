import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;

  /** Return locked balance of the module */
  moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;

  /** Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;

  /** Returns unlocking coins */
  accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;

  /** Return a locked coins that can't be withdrawn */
  accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;

  /** Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;

  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;

  /** Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;

  /** Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;

  /** Returns total locked per denom with longer past given time */
  lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;

  /** Returns lock record by id */
  lockedByID(request: LockedRequest): Promise<LockedResponse>;

  /** Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;

  /** Returns account locked records with longer duration */
  accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;

  /** Returns account locked records with a specific duration */
  accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;

  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;

  /** Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;

  /** Params returns lockup params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }

  moduleBalance(request: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> {
    const data = ModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
    return promise.then(data => ModuleBalanceResponse.decode(new _m0.Reader(data)));
  }

  moduleLockedAmount(request: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> {
    const data = ModuleLockedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
    return promise.then(data => ModuleLockedAmountResponse.decode(new _m0.Reader(data)));
  }

  accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const data = AccountUnlockableCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
    return promise.then(data => AccountUnlockableCoinsResponse.decode(new _m0.Reader(data)));
  }

  accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const data = AccountUnlockingCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
    return promise.then(data => AccountUnlockingCoinsResponse.decode(new _m0.Reader(data)));
  }

  accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const data = AccountLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
    return promise.then(data => AccountLockedCoinsResponse.decode(new _m0.Reader(data)));
  }

  accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
    const data = AccountLockedPastTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
    return promise.then(data => AccountLockedPastTimeResponse.decode(new _m0.Reader(data)));
  }

  accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const data = AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
    return promise.then(data => AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new _m0.Reader(data)));
  }

  accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
    const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
    return promise.then(data => AccountUnlockedBeforeTimeResponse.decode(new _m0.Reader(data)));
  }

  accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
    const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
    return promise.then(data => AccountLockedPastTimeDenomResponse.decode(new _m0.Reader(data)));
  }

  lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
    const data = LockedDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
    return promise.then(data => LockedDenomResponse.decode(new _m0.Reader(data)));
  }

  lockedByID(request: LockedRequest): Promise<LockedResponse> {
    const data = LockedRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
    return promise.then(data => LockedResponse.decode(new _m0.Reader(data)));
  }

  syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
    return promise.then(data => SyntheticLockupsByLockupIDResponse.decode(new _m0.Reader(data)));
  }

  accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
    const data = AccountLockedLongerDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
    return promise.then(data => AccountLockedLongerDurationResponse.decode(new _m0.Reader(data)));
  }

  accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
    const data = AccountLockedDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
    return promise.then(data => AccountLockedDurationResponse.decode(new _m0.Reader(data)));
  }

  accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const data = AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
    return promise.then(data => AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new _m0.Reader(data)));
  }

  accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
    const data = AccountLockedLongerDurationDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
    return promise.then(data => AccountLockedLongerDurationDenomResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse> {
      return queryService.moduleBalance(request);
    },

    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse> {
      return queryService.moduleLockedAmount(request);
    },

    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
      return queryService.accountUnlockableCoins(request);
    },

    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
      return queryService.accountUnlockingCoins(request);
    },

    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
      return queryService.accountLockedCoins(request);
    },

    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
      return queryService.accountLockedPastTime(request);
    },

    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
      return queryService.accountLockedPastTimeNotUnlockingOnly(request);
    },

    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
      return queryService.accountUnlockedBeforeTime(request);
    },

    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
      return queryService.accountLockedPastTimeDenom(request);
    },

    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
      return queryService.lockedDenom(request);
    },

    lockedByID(request: LockedRequest): Promise<LockedResponse> {
      return queryService.lockedByID(request);
    },

    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
      return queryService.syntheticLockupsByLockupID(request);
    },

    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
      return queryService.accountLockedLongerDuration(request);
    },

    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
      return queryService.accountLockedDuration(request);
    },

    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
      return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
    },

    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
      return queryService.accountLockedLongerDurationDenom(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
export interface UseModuleBalanceQuery<TData> extends ReactQueryParams<ModuleBalanceResponse, TData> {
  request?: ModuleBalanceRequest;
}
export interface UseModuleLockedAmountQuery<TData> extends ReactQueryParams<ModuleLockedAmountResponse, TData> {
  request?: ModuleLockedAmountRequest;
}
export interface UseAccountUnlockableCoinsQuery<TData> extends ReactQueryParams<AccountUnlockableCoinsResponse, TData> {
  request: AccountUnlockableCoinsRequest;
}
export interface UseAccountUnlockingCoinsQuery<TData> extends ReactQueryParams<AccountUnlockingCoinsResponse, TData> {
  request: AccountUnlockingCoinsRequest;
}
export interface UseAccountLockedCoinsQuery<TData> extends ReactQueryParams<AccountLockedCoinsResponse, TData> {
  request: AccountLockedCoinsRequest;
}
export interface UseAccountLockedPastTimeQuery<TData> extends ReactQueryParams<AccountLockedPastTimeResponse, TData> {
  request: AccountLockedPastTimeRequest;
}
export interface UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData> extends ReactQueryParams<AccountLockedPastTimeNotUnlockingOnlyResponse, TData> {
  request: AccountLockedPastTimeNotUnlockingOnlyRequest;
}
export interface UseAccountUnlockedBeforeTimeQuery<TData> extends ReactQueryParams<AccountUnlockedBeforeTimeResponse, TData> {
  request: AccountUnlockedBeforeTimeRequest;
}
export interface UseAccountLockedPastTimeDenomQuery<TData> extends ReactQueryParams<AccountLockedPastTimeDenomResponse, TData> {
  request: AccountLockedPastTimeDenomRequest;
}
export interface UseLockedDenomQuery<TData> extends ReactQueryParams<LockedDenomResponse, TData> {
  request: LockedDenomRequest;
}
export interface UseLockedByIDQuery<TData> extends ReactQueryParams<LockedResponse, TData> {
  request: LockedRequest;
}
export interface UseSyntheticLockupsByLockupIDQuery<TData> extends ReactQueryParams<SyntheticLockupsByLockupIDResponse, TData> {
  request: SyntheticLockupsByLockupIDRequest;
}
export interface UseAccountLockedLongerDurationQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationResponse, TData> {
  request: AccountLockedLongerDurationRequest;
}
export interface UseAccountLockedDurationQuery<TData> extends ReactQueryParams<AccountLockedDurationResponse, TData> {
  request: AccountLockedDurationRequest;
}
export interface UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationNotUnlockingOnlyResponse, TData> {
  request: AccountLockedLongerDurationNotUnlockingOnlyRequest;
}
export interface UseAccountLockedLongerDurationDenomQuery<TData> extends ReactQueryParams<AccountLockedLongerDurationDenomResponse, TData> {
  request: AccountLockedLongerDurationDenomRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useModuleBalance = <TData = ModuleBalanceResponse,>({
    request,
    options
  }: UseModuleBalanceQuery<TData>) => {
    return useQuery<ModuleBalanceResponse, Error, TData>(["moduleBalanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleBalance(request);
    }, options);
  };

  const useModuleLockedAmount = <TData = ModuleLockedAmountResponse,>({
    request,
    options
  }: UseModuleLockedAmountQuery<TData>) => {
    return useQuery<ModuleLockedAmountResponse, Error, TData>(["moduleLockedAmountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleLockedAmount(request);
    }, options);
  };

  const useAccountUnlockableCoins = <TData = AccountUnlockableCoinsResponse,>({
    request,
    options
  }: UseAccountUnlockableCoinsQuery<TData>) => {
    return useQuery<AccountUnlockableCoinsResponse, Error, TData>(["accountUnlockableCoinsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountUnlockableCoins(request);
    }, options);
  };

  const useAccountUnlockingCoins = <TData = AccountUnlockingCoinsResponse,>({
    request,
    options
  }: UseAccountUnlockingCoinsQuery<TData>) => {
    return useQuery<AccountUnlockingCoinsResponse, Error, TData>(["accountUnlockingCoinsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountUnlockingCoins(request);
    }, options);
  };

  const useAccountLockedCoins = <TData = AccountLockedCoinsResponse,>({
    request,
    options
  }: UseAccountLockedCoinsQuery<TData>) => {
    return useQuery<AccountLockedCoinsResponse, Error, TData>(["accountLockedCoinsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedCoins(request);
    }, options);
  };

  const useAccountLockedPastTime = <TData = AccountLockedPastTimeResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeQuery<TData>) => {
    return useQuery<AccountLockedPastTimeResponse, Error, TData>(["accountLockedPastTimeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedPastTime(request);
    }, options);
  };

  const useAccountLockedPastTimeNotUnlockingOnly = <TData = AccountLockedPastTimeNotUnlockingOnlyResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData>) => {
    return useQuery<AccountLockedPastTimeNotUnlockingOnlyResponse, Error, TData>(["accountLockedPastTimeNotUnlockingOnlyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedPastTimeNotUnlockingOnly(request);
    }, options);
  };

  const useAccountUnlockedBeforeTime = <TData = AccountUnlockedBeforeTimeResponse,>({
    request,
    options
  }: UseAccountUnlockedBeforeTimeQuery<TData>) => {
    return useQuery<AccountUnlockedBeforeTimeResponse, Error, TData>(["accountUnlockedBeforeTimeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountUnlockedBeforeTime(request);
    }, options);
  };

  const useAccountLockedPastTimeDenom = <TData = AccountLockedPastTimeDenomResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeDenomQuery<TData>) => {
    return useQuery<AccountLockedPastTimeDenomResponse, Error, TData>(["accountLockedPastTimeDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedPastTimeDenom(request);
    }, options);
  };

  const useLockedDenom = <TData = LockedDenomResponse,>({
    request,
    options
  }: UseLockedDenomQuery<TData>) => {
    return useQuery<LockedDenomResponse, Error, TData>(["lockedDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lockedDenom(request);
    }, options);
  };

  const useLockedByID = <TData = LockedResponse,>({
    request,
    options
  }: UseLockedByIDQuery<TData>) => {
    return useQuery<LockedResponse, Error, TData>(["lockedByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lockedByID(request);
    }, options);
  };

  const useSyntheticLockupsByLockupID = <TData = SyntheticLockupsByLockupIDResponse,>({
    request,
    options
  }: UseSyntheticLockupsByLockupIDQuery<TData>) => {
    return useQuery<SyntheticLockupsByLockupIDResponse, Error, TData>(["syntheticLockupsByLockupIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.syntheticLockupsByLockupID(request);
    }, options);
  };

  const useAccountLockedLongerDuration = <TData = AccountLockedLongerDurationResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationQuery<TData>) => {
    return useQuery<AccountLockedLongerDurationResponse, Error, TData>(["accountLockedLongerDurationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedLongerDuration(request);
    }, options);
  };

  const useAccountLockedDuration = <TData = AccountLockedDurationResponse,>({
    request,
    options
  }: UseAccountLockedDurationQuery<TData>) => {
    return useQuery<AccountLockedDurationResponse, Error, TData>(["accountLockedDurationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedDuration(request);
    }, options);
  };

  const useAccountLockedLongerDurationNotUnlockingOnly = <TData = AccountLockedLongerDurationNotUnlockingOnlyResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData>) => {
    return useQuery<AccountLockedLongerDurationNotUnlockingOnlyResponse, Error, TData>(["accountLockedLongerDurationNotUnlockingOnlyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
    }, options);
  };

  const useAccountLockedLongerDurationDenom = <TData = AccountLockedLongerDurationDenomResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationDenomQuery<TData>) => {
    return useQuery<AccountLockedLongerDurationDenomResponse, Error, TData>(["accountLockedLongerDurationDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accountLockedLongerDurationDenom(request);
    }, options);
  };

  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  return {
    /** Return full balance of the module */
    useModuleBalance,

    /** Return locked balance of the module */
    useModuleLockedAmount,

    /** Returns unlockable coins which are not withdrawn yet */
    useAccountUnlockableCoins,

    /** Returns unlocking coins */
    useAccountUnlockingCoins,

    /** Return a locked coins that can't be withdrawn */
    useAccountLockedCoins,

    /** Returns locked records of an account with unlock time beyond timestamp */
    useAccountLockedPastTime,

    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    useAccountLockedPastTimeNotUnlockingOnly,

    /** Returns unlocked records with unlock time before timestamp */
    useAccountUnlockedBeforeTime,

    /** Returns lock records by address, timestamp, denom */
    useAccountLockedPastTimeDenom,

    /** Returns total locked per denom with longer past given time */
    useLockedDenom,

    /** Returns lock record by id */
    useLockedByID,

    /** Returns synthetic lockups by native lockup id */
    useSyntheticLockupsByLockupID,

    /** Returns account locked records with longer duration */
    useAccountLockedLongerDuration,

    /** Returns account locked records with a specific duration */
    useAccountLockedDuration,

    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    useAccountLockedLongerDurationNotUnlockingOnly,

    /** Returns account's locked records for a denom with longer duration */
    useAccountLockedLongerDurationDenom,

    /** Params returns lockup params. */
    useParams
  };
};