import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Return full balance of the module */
  async moduleBalance(_params: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_balance`;
    return await this.get<ModuleBalanceResponse>(endpoint);
  }

  /* Return locked balance of the module */
  async moduleLockedAmount(_params: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount`;
    return await this.get<ModuleLockedAmountResponse>(endpoint);
  }

  /* Returns unlockable coins which are not withdrawn yet */
  async accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.get<AccountUnlockableCoinsResponse>(endpoint);
  }

  /* Returns unlocking coins */
  async accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.get<AccountUnlockingCoinsResponse>(endpoint);
  }

  /* Return a locked coins that can't be withdrawn */
  async accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.get<AccountLockedCoinsResponse>(endpoint);
  }

  /* Returns locked records of an account with unlock time beyond timestamp */
  async accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime/${params.owner}`;
    return await this.get<AccountLockedPastTimeResponse>(endpoint, options);
  }

  /* Returns locked records of an account with unlock time beyond timestamp
  excluding tokens started unlocking */
  async accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${params.owner}`;
    return await this.get<AccountLockedPastTimeNotUnlockingOnlyResponse>(endpoint, options);
  }

  /* Returns unlocked records with unlock time before timestamp */
  async accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_unlocked_before_time/${params.owner}`;
    return await this.get<AccountUnlockedBeforeTimeResponse>(endpoint, options);
  }

  /* Returns lock records by address, timestamp, denom */
  async accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_denom/${params.owner}`;
    return await this.get<AccountLockedPastTimeDenomResponse>(endpoint, options);
  }

  /* Returns total locked per denom with longer past given time */
  async lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/locked_denom`;
    return await this.get<LockedDenomResponse>(endpoint, options);
  }

  /* Returns lock record by id */
  async lockedByID(params: LockedRequest): Promise<LockedResponse> {
    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lockId}`;
    return await this.get<LockedResponse>(endpoint);
  }

  /* Returns synthetic lockups by native lockup id */
  async syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lockId}`;
    return await this.get<SyntheticLockupsByLockupIDResponse>(endpoint);
  }

  /* Returns account locked records with longer duration */
  async accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${params.owner}`;
    return await this.get<AccountLockedLongerDurationResponse>(endpoint, options);
  }

  /* Returns account locked records with a specific duration */
  async accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_duration/${params.owner}`;
    return await this.get<AccountLockedDurationResponse>(endpoint, options);
  }

  /* Returns account locked records with longer duration excluding tokens
  started unlocking */
  async accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${params.owner}`;
    return await this.get<AccountLockedLongerDurationNotUnlockingOnlyResponse>(endpoint, options);
  }

  /* Returns account's locked records for a denom with longer duration */
  async accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${params.owner}`;
    return await this.get<AccountLockedLongerDurationDenomResponse>(endpoint, options);
  }

}