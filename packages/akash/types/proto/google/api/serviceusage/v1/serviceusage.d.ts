import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Service } from "../../../../google/api/serviceusage/v1/resources";
import { Operation } from "../../../../google/longrunning/operations";
/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
    /**
     * Name of the consumer and service to enable the service on.
     *
     * The `EnableService` and `DisableService` methods currently only support
     * projects.
     *
     * Enabling a service requires that the service is public or is shared with
     * the user enabling the service.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponse {
    /** The new state of the service after enabling. */
    service: Service;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
    /**
     * Name of the consumer and service to disable the service on.
     *
     * The enable and disable methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
    /**
     * Indicates if services that are enabled and which depend on this service
     * should also be disabled. If not set, an error will be generated if any
     * enabled services depend on the service to be disabled. When set, the
     * service, and any enabled services that depend on it, will be disabled
     * together.
     */
    disableDependentServices: boolean;
    /** Defines the behavior for checking service usage when disabling a service. */
    checkIfServiceHasUsage: DisableServiceRequest_CheckIfServiceHasUsage;
}
/**
 * Enum to determine if service usage should be checked when disabling a
 * service.
 */
export declare enum DisableServiceRequest_CheckIfServiceHasUsage {
    /** CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED - When unset, the default behavior is used, which is SKIP. */
    CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
    /** SKIP - If set, skip checking service usage when disabling a service. */
    SKIP = 1,
    /**
     * CHECK - If set, service usage is checked when disabling the service. If a
     * service, or its dependents, has usage in the last 30 days, the request
     * returns a FAILED_PRECONDITION error.
     */
    CHECK = 2,
    UNRECOGNIZED = -1
}
export declare function disableServiceRequest_CheckIfServiceHasUsageFromJSON(object: any): DisableServiceRequest_CheckIfServiceHasUsage;
export declare function disableServiceRequest_CheckIfServiceHasUsageToJSON(object: DisableServiceRequest_CheckIfServiceHasUsage): string;
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponse {
    /** The new state of the service after disabling. */
    service: Service;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
    /**
     * Name of the consumer and service to get the `ConsumerState` for.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     */
    name: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
    /**
     * Parent to search for services on.
     *
     * An example name would be:
     * `projects/123` where `123` is the project number.
     */
    parent: string;
    /**
     * Requested size of the next page of data.
     * Requested page size cannot exceed 200.
     * If not set, the default page size is 50.
     */
    pageSize: number;
    /**
     * Token identifying which result to start with, which is returned by a
     * previous list call.
     */
    pageToken: string;
    /**
     * Only list services that conform to the given filter.
     * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     */
    filter: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
    /** The available services for the requested project. */
    services: Service[];
    /**
     * Token that can be passed to `ListServices` to resume a paginated
     * query.
     */
    nextPageToken: string;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
    /**
     * Parent to enable services on.
     *
     * An example name would be:
     * `projects/123` where `123` is the project number.
     *
     * The `BatchEnableServices` method currently only supports projects.
     */
    parent: string;
    /**
     * The identifiers of the services to enable on the project.
     *
     * A valid identifier would be:
     * serviceusage.googleapis.com
     *
     * Enabling services requires that each service is public or is shared with
     * the user enabling the service.
     *
     * A single request can enable a maximum of 20 services at a time. If more
     * than 20 services are specified, the request will fail, and no state changes
     * will occur.
     */
    serviceIds: string[];
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponse {
    /** The new state of the services after enabling. */
    services: Service[];
    /**
     * If allow_partial_success is true, and one or more services could not be
     * enabled, this field contains the details about each failure.
     */
    failures: BatchEnableServicesResponse_EnableFailure[];
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailure {
    /** The service id of a service that could not be enabled. */
    serviceId: string;
    /** An error message describing why the service could not be enabled. */
    errorMessage: string;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequest {
    /**
     * Parent to retrieve services from.
     * If this is set, the parent of all of the services specified in `names` must
     * match this field. An example name would be: `projects/123` where `123` is
     * the project number. The `BatchGetServices` method currently only supports
     * projects.
     */
    parent: string;
    /**
     * Names of the services to retrieve.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com` where `123` is the
     * project number.
     * A single request can get a maximum of 30 services at a time.
     */
    names: string[];
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponse {
    /** The requested Service states. */
    services: Service[];
}
export declare const EnableServiceRequest: {
    encode(message: EnableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest;
    fromJSON(object: any): EnableServiceRequest;
    toJSON(message: EnableServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): EnableServiceRequest;
};
export declare const EnableServiceResponse: {
    encode(message: EnableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceResponse;
    fromJSON(object: any): EnableServiceResponse;
    toJSON(message: EnableServiceResponse): unknown;
    fromPartial<I extends unknown>(object: I): EnableServiceResponse;
};
export declare const DisableServiceRequest: {
    encode(message: DisableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest;
    fromJSON(object: any): DisableServiceRequest;
    toJSON(message: DisableServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): DisableServiceRequest;
};
export declare const DisableServiceResponse: {
    encode(message: DisableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceResponse;
    fromJSON(object: any): DisableServiceResponse;
    toJSON(message: DisableServiceResponse): unknown;
    fromPartial<I extends unknown>(object: I): DisableServiceResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): GetServiceRequest;
};
export declare const ListServicesRequest: {
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListServicesResponse;
};
export declare const BatchEnableServicesRequest: {
    encode(message: BatchEnableServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest;
    fromJSON(object: any): BatchEnableServicesRequest;
    toJSON(message: BatchEnableServicesRequest): unknown;
    fromPartial<I extends unknown>(object: I): BatchEnableServicesRequest;
};
export declare const BatchEnableServicesResponse: {
    encode(message: BatchEnableServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse;
    fromJSON(object: any): BatchEnableServicesResponse;
    toJSON(message: BatchEnableServicesResponse): unknown;
    fromPartial<I extends unknown>(object: I): BatchEnableServicesResponse;
};
export declare const BatchEnableServicesResponse_EnableFailure: {
    encode(message: BatchEnableServicesResponse_EnableFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse_EnableFailure;
    fromJSON(object: any): BatchEnableServicesResponse_EnableFailure;
    toJSON(message: BatchEnableServicesResponse_EnableFailure): unknown;
    fromPartial<I extends unknown>(object: I): BatchEnableServicesResponse_EnableFailure;
};
export declare const BatchGetServicesRequest: {
    encode(message: BatchGetServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesRequest;
    fromJSON(object: any): BatchGetServicesRequest;
    toJSON(message: BatchGetServicesRequest): unknown;
    fromPartial<I extends unknown>(object: I): BatchGetServicesRequest;
};
export declare const BatchGetServicesResponse: {
    encode(message: BatchGetServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesResponse;
    fromJSON(object: any): BatchGetServicesResponse;
    toJSON(message: BatchGetServicesResponse): unknown;
    fromPartial<I extends unknown>(object: I): BatchGetServicesResponse;
};
/**
 * Enables services that service consumers want to use on Google Cloud Platform,
 * lists the available or enabled services, or disables services that service
 * consumers no longer use.
 *
 * See [Service Usage API](https://cloud.google.com/service-usage/docs/overview)
 */
export interface ServiceUsage {
    /** Enable a service so that it can be used with a project. */
    EnableService(request: EnableServiceRequest): Promise<Operation>;
    /**
     * Disable a service so that it can no longer be used with a project.
     * This prevents unintended usage that may cause unexpected billing
     * charges or security leaks.
     *
     * It is not valid to call the disable method on a service that is not
     * currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
     * the target service is not currently enabled.
     */
    DisableService(request: DisableServiceRequest): Promise<Operation>;
    /** Returns the service configuration and enabled state for a given service. */
    GetService(request: GetServiceRequest): Promise<Service>;
    /**
     * List all services available to the specified project, and the current
     * state of those services with respect to the project. The list includes
     * all public services, all services for which the calling user has the
     * `servicemanagement.services.bind` permission, and all services that have
     * already been enabled on the project. The list can be filtered to
     * only include services in a specific state, for example to only include
     * services enabled on the project.
     *
     * WARNING: If you need to query enabled services frequently or across
     * an organization, you should use
     * [Cloud Asset Inventory
     * API](https://cloud.google.com/asset-inventory/docs/apis), which provides
     * higher throughput and richer filtering capability.
     */
    ListServices(request: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * Enable multiple services on a project. The operation is atomic: if enabling
     * any service fails, then the entire batch fails, and no state changes occur.
     * To enable a single service, use the `EnableService` method instead.
     */
    BatchEnableServices(request: BatchEnableServicesRequest): Promise<Operation>;
    /**
     * Returns the service configurations and enabled states for a given list of
     * services.
     */
    BatchGetServices(request: BatchGetServicesRequest): Promise<BatchGetServicesResponse>;
}
export declare class ServiceUsageClientImpl implements ServiceUsage {
    private readonly rpc;
    constructor(rpc: Rpc);
    EnableService(request: EnableServiceRequest): Promise<Operation>;
    DisableService(request: DisableServiceRequest): Promise<Operation>;
    GetService(request: GetServiceRequest): Promise<Service>;
    ListServices(request: ListServicesRequest): Promise<ListServicesResponse>;
    BatchEnableServices(request: BatchEnableServicesRequest): Promise<Operation>;
    BatchGetServices(request: BatchGetServicesRequest): Promise<BatchGetServicesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
