import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType } from "./query";
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

  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* Returns superfluid asset type */
  async assetType(params: AssetTypeRequest): Promise<AssetTypeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.get<AssetTypeResponse>(endpoint, options);
  }

  /* Returns all superfluid asset types */
  async allAssets(_params: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.get<AllAssetsResponse>(endpoint);
  }

  /* Returns superfluid asset Multiplier */
  async assetMultiplier(params: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.get<AssetMultiplierResponse>(endpoint, options);
  }

  /* Returns all superfluid intermediary account */
  async allIntermediaryAccounts(params: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.get<AllIntermediaryAccountsResponse>(endpoint, options);
  }

  /* Returns intermediary account connected to a superfluid staked lock by id */
  async connectedIntermediaryAccount(params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lockId}`;
    return await this.get<ConnectedIntermediaryAccountResponse>(endpoint);
  }

  /* Returns the total amount of osmo superfluidly staked
  response denominated in uosmo */
  async totalSuperfluidDelegations(_params: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.get<TotalSuperfluidDelegationsResponse>(endpoint);
  }

  /* Returns the coins superfluid delegated for a delegator, validator, denom
  triplet */
  async superfluidDelegationAmount(params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.get<SuperfluidDelegationAmountResponse>(endpoint, options);
  }

  /* Returns all the superfluid poistions for a specific delegator */
  async superfluidDelegationsByDelegator(params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegatorAddress}`;
    return await this.get<SuperfluidDelegationsByDelegatorResponse>(endpoint);
  }

  /* SuperfluidUndelegationsByDelegator */
  async superfluidUndelegationsByDelegator(params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegatorAddress}`;
    return await this.get<SuperfluidUndelegationsByDelegatorResponse>(endpoint, options);
  }

  /* Returns all the superfluid positions of a specific denom delegated to one
  validator */
  async superfluidDelegationsByValidatorDenom(params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.get<SuperfluidDelegationsByValidatorDenomResponse>(endpoint, options);
  }

  /* Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount */
  async estimateSuperfluidDelegatedAmountByValidatorDenom(params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.get<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>(endpoint, options);
  }

}