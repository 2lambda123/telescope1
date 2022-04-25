import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MonitoredResource, MonitoredResourceDescriptor } from "../../../google/api/monitored_resource";
import { Status } from "../../../google/rpc/status";
import { Duration } from "../../../google/protobuf/duration";
import { Observable } from "rxjs";
import { LogEntry } from "../../../google/logging/v2/log_entry";
import { Empty } from "../../../google/protobuf/empty";
/** The parameters to DeleteLog. */
export interface DeleteLogRequest {
    /**
     * Required. The resource name of the log to delete:
     *
     * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
     * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
     * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
     * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
     *
     * `[LOG_ID]` must be URL-encoded. For example,
     * `"projects/my-project-id/logs/syslog"`,
     * `"organizations/123/logs/cloudaudit.googleapis.com%2Factivity"`.
     *
     * For more information about log names, see
     * [LogEntry][google.logging.v2.LogEntry].
     */
    logName: string;
}
/** The parameters to WriteLogEntries. */
export interface WriteLogEntriesRequest {
    /**
     * Optional. A default log resource name that is assigned to all log entries
     * in `entries` that do not specify a value for `log_name`:
     *
     * * `projects/[PROJECT_ID]/logs/[LOG_ID]`
     * * `organizations/[ORGANIZATION_ID]/logs/[LOG_ID]`
     * * `billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]`
     * * `folders/[FOLDER_ID]/logs/[LOG_ID]`
     *
     * `[LOG_ID]` must be URL-encoded. For example:
     *
     *     "projects/my-project-id/logs/syslog"
     *     "organizations/123/logs/cloudaudit.googleapis.com%2Factivity"
     *
     * The permission `logging.logEntries.create` is needed on each project,
     * organization, billing account, or folder that is receiving new log
     * entries, whether the resource is specified in `logName` or in an
     * individual log entry.
     */
    logName: string;
    /**
     * Optional. A default monitored resource object that is assigned to all log
     * entries in `entries` that do not specify a value for `resource`. Example:
     *
     *     { "type": "gce_instance",
     *       "labels": {
     *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
     *
     * See [LogEntry][google.logging.v2.LogEntry].
     */
    resource: MonitoredResource;
    /**
     * Optional. Default labels that are added to the `labels` field of all log
     * entries in `entries`. If a log entry already has a label with the same key
     * as a label in this parameter, then the log entry's label is not changed.
     * See [LogEntry][google.logging.v2.LogEntry].
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Required. The log entries to send to Logging. The order of log
     * entries in this list does not matter. Values supplied in this method's
     * `log_name`, `resource`, and `labels` fields are copied into those log
     * entries in this list that do not include values for their corresponding
     * fields. For more information, see the
     * [LogEntry][google.logging.v2.LogEntry] type.
     *
     * If the `timestamp` or `insert_id` fields are missing in log entries, then
     * this method supplies the current time or a unique identifier, respectively.
     * The supplied values are chosen so that, among the log entries that did not
     * supply their own values, the entries earlier in the list will sort before
     * the entries later in the list. See the `entries.list` method.
     *
     * Log entries with timestamps that are more than the
     * [logs retention period](https://cloud.google.com/logging/quotas) in
     * the past or more than 24 hours in the future will not be available when
     * calling `entries.list`. However, those log entries can still be [exported
     * with
     * LogSinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
     *
     * To improve throughput and to avoid exceeding the
     * [quota limit](https://cloud.google.com/logging/quotas) for calls to
     * `entries.write`, you should try to include several log entries in this
     * list, rather than calling this method for each individual log entry.
     */
    entries: LogEntry[];
    /**
     * Optional. Whether valid entries should be written even if some other
     * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
     * entry is not written, then the response status is the error associated
     * with one of the failed entries and the response includes error details
     * keyed by the entries' zero-based index in the `entries.write` method.
     */
    partialSuccess: boolean;
    /**
     * Optional. If true, the request should expect normal response, but the
     * entries won't be persisted nor exported. Useful for checking whether the
     * logging API endpoints are working properly before sending valuable data.
     */
    dryRun: boolean;
}
export interface WriteLogEntriesRequest_LabelsEntry {
    key: string;
    value: string;
}
/** Result returned from WriteLogEntries. */
export interface WriteLogEntriesResponse {
}
/** Error details for WriteLogEntries with partial success. */
export interface WriteLogEntriesPartialErrors {
    /**
     * When `WriteLogEntriesRequest.partial_success` is true, records the error
     * status for entries that were not written due to a permanent error, keyed
     * by the entry's zero-based index in `WriteLogEntriesRequest.entries`.
     *
     * Failed requests for which no entries are written will not include
     * per-entry errors.
     */
    logEntryErrors: {
        [key: number]: Status;
    };
}
export interface WriteLogEntriesPartialErrors_LogEntryErrorsEntry {
    key: number;
    value: Status;
}
/** The parameters to `ListLogEntries`. */
export interface ListLogEntriesRequest {
    /**
     * Required. Names of one or more parent resources from which to
     * retrieve log entries:
     *
     * *  `projects/[PROJECT_ID]`
     * *  `organizations/[ORGANIZATION_ID]`
     * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
     * *  `folders/[FOLDER_ID]`
     *
     * May alternatively be one or more views:
     *
     *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *
     * Projects listed in the `project_ids` field are added to this list.
     */
    resourceNames: string[];
    /**
     * Optional. A filter that chooses which log entries to return.  See [Advanced
     * Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries).
     * Only log entries that match the filter are returned.  An empty filter
     * matches all log entries in the resources listed in `resource_names`.
     * Referencing a parent resource that is not listed in `resource_names` will
     * cause the filter to return no results. The maximum length of the filter is
     * 20000 characters.
     */
    filter: string;
    /**
     * Optional. How the results should be sorted.  Presently, the only permitted
     * values are `"timestamp asc"` (default) and `"timestamp desc"`. The first
     * option returns entries in order of increasing values of
     * `LogEntry.timestamp` (oldest first), and the second option returns entries
     * in order of decreasing timestamps (newest first).  Entries with equal
     * timestamps are returned in order of their `insert_id` values.
     */
    orderBy: string;
    /**
     * Optional. The maximum number of results to return from this request. Default is 50.
     * If the value is negative or exceeds 1000, the request is rejected. The
     * presence of `next_page_token` in the response indicates that more results
     * might be available.
     */
    pageSize: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method.  `page_token` must be the value of
     * `next_page_token` from the previous response.  The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
}
/** Result returned from `ListLogEntries`. */
export interface ListLogEntriesResponse {
    /**
     * A list of log entries.  If `entries` is empty, `nextPageToken` may still be
     * returned, indicating that more entries may exist.  See `nextPageToken` for
     * more information.
     */
    entries: LogEntry[];
    /**
     * If there might be more results than those appearing in this response, then
     * `nextPageToken` is included.  To get the next set of results, call this
     * method again using the value of `nextPageToken` as `pageToken`.
     *
     * If a value for `next_page_token` appears and the `entries` field is empty,
     * it means that the search found no log entries so far but it did not have
     * time to search all the possible log entries.  Retry the method with this
     * value for `page_token` to continue the search.  Alternatively, consider
     * speeding up the search by changing your filter to specify a single log name
     * or resource type, or to narrow the time range of the search.
     */
    nextPageToken: string;
}
/** The parameters to ListMonitoredResourceDescriptors */
export interface ListMonitoredResourceDescriptorsRequest {
    /**
     * Optional. The maximum number of results to return from this request.
     * Non-positive values are ignored.  The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method.  `pageToken` must be the value of
     * `nextPageToken` from the previous response.  The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
}
/** Result returned from ListMonitoredResourceDescriptors. */
export interface ListMonitoredResourceDescriptorsResponse {
    /** A list of resource descriptors. */
    resourceDescriptors: MonitoredResourceDescriptor[];
    /**
     * If there might be more results than those appearing in this response, then
     * `nextPageToken` is included.  To get the next set of results, call this
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** The parameters to ListLogs. */
export interface ListLogsRequest {
    /**
     * Required. The resource name that owns the logs:
     *
     * *  `projects/[PROJECT_ID]`
     * *  `organizations/[ORGANIZATION_ID]`
     * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
     * *  `folders/[FOLDER_ID]`
     */
    parent: string;
    /**
     * Optional. The maximum number of results to return from this request.
     * Non-positive values are ignored.  The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method.  `pageToken` must be the value of
     * `nextPageToken` from the previous response.  The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The resource name that owns the logs:
     *
     *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *
     * To support legacy queries, it could also be:
     *
     * *  `projects/[PROJECT_ID]`
     * *  `organizations/[ORGANIZATION_ID]`
     * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
     * *  `folders/[FOLDER_ID]`
     */
    resourceNames: string[];
}
/** Result returned from ListLogs. */
export interface ListLogsResponse {
    /**
     * A list of log names. For example,
     * `"projects/my-project/logs/syslog"` or
     * `"organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     */
    logNames: string[];
    /**
     * If there might be more results than those appearing in this response, then
     * `nextPageToken` is included.  To get the next set of results, call this
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** The parameters to `TailLogEntries`. */
export interface TailLogEntriesRequest {
    /**
     * Required. Name of a parent resource from which to retrieve log entries:
     *
     * *  `projects/[PROJECT_ID]`
     * *  `organizations/[ORGANIZATION_ID]`
     * *  `billingAccounts/[BILLING_ACCOUNT_ID]`
     * *  `folders/[FOLDER_ID]`
     *
     * May alternatively be one or more views:
     *
     *  * `projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     *  * `folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`
     */
    resourceNames: string[];
    /**
     * Optional. A filter that chooses which log entries to return.  See [Advanced
     * Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     * Only log entries that match the filter are returned.  An empty filter
     * matches all log entries in the resources listed in `resource_names`.
     * Referencing a parent resource that is not in `resource_names` will cause
     * the filter to return no results. The maximum length of the filter is 20000
     * characters.
     */
    filter: string;
    /**
     * Optional. The amount of time to buffer log entries at the server before
     * being returned to prevent out of order results due to late arriving log
     * entries. Valid values are between 0-60000 milliseconds. Defaults to 2000
     * milliseconds.
     */
    bufferWindow: Duration;
}
/** Result returned from `TailLogEntries`. */
export interface TailLogEntriesResponse {
    /**
     * A list of log entries. Each response in the stream will order entries with
     * increasing values of `LogEntry.timestamp`. Ordering is not guaranteed
     * between separate responses.
     */
    entries: LogEntry[];
    /**
     * If entries that otherwise would have been included in the session were not
     * sent back to the client, counts of relevant entries omitted from the
     * session with the reason that they were not included. There will be at most
     * one of each reason per response. The counts represent the number of
     * suppressed entries since the last streamed response.
     */
    suppressionInfo: TailLogEntriesResponse_SuppressionInfo[];
}
/** Information about entries that were omitted from the session. */
export interface TailLogEntriesResponse_SuppressionInfo {
    /** The reason that entries were omitted from the session. */
    reason: TailLogEntriesResponse_SuppressionInfo_Reason;
    /** A lower bound on the count of entries omitted due to `reason`. */
    suppressedCount: number;
}
/** An indicator of why entries were omitted. */
export declare enum TailLogEntriesResponse_SuppressionInfo_Reason {
    /** REASON_UNSPECIFIED - Unexpected default. */
    REASON_UNSPECIFIED = 0,
    /**
     * RATE_LIMIT - Indicates suppression occurred due to relevant entries being
     * received in excess of rate limits. For quotas and limits, see
     * [Logging API quotas and
     * limits](https://cloud.google.com/logging/quotas#api-limits).
     */
    RATE_LIMIT = 1,
    /**
     * NOT_CONSUMED - Indicates suppression occurred due to the client not consuming
     * responses quickly enough.
     */
    NOT_CONSUMED = 2,
    UNRECOGNIZED = -1
}
export declare function tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): TailLogEntriesResponse_SuppressionInfo_Reason;
export declare function tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: TailLogEntriesResponse_SuppressionInfo_Reason): string;
export declare const DeleteLogRequest: {
    encode(message: DeleteLogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogRequest;
    fromJSON(object: any): DeleteLogRequest;
    toJSON(message: DeleteLogRequest): unknown;
    fromPartial<I extends unknown>(object: I): DeleteLogRequest;
};
export declare const WriteLogEntriesRequest: {
    encode(message: WriteLogEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesRequest;
    fromJSON(object: any): WriteLogEntriesRequest;
    toJSON(message: WriteLogEntriesRequest): unknown;
    fromPartial<I extends unknown>(object: I): WriteLogEntriesRequest;
};
export declare const WriteLogEntriesRequest_LabelsEntry: {
    encode(message: WriteLogEntriesRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesRequest_LabelsEntry;
    fromJSON(object: any): WriteLogEntriesRequest_LabelsEntry;
    toJSON(message: WriteLogEntriesRequest_LabelsEntry): unknown;
    fromPartial<I extends unknown>(object: I): WriteLogEntriesRequest_LabelsEntry;
};
export declare const WriteLogEntriesResponse: {
    encode(_: WriteLogEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesResponse;
    fromJSON(_: any): WriteLogEntriesResponse;
    toJSON(_: WriteLogEntriesResponse): unknown;
    fromPartial<I extends unknown>(_: I): WriteLogEntriesResponse;
};
export declare const WriteLogEntriesPartialErrors: {
    encode(message: WriteLogEntriesPartialErrors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesPartialErrors;
    fromJSON(object: any): WriteLogEntriesPartialErrors;
    toJSON(message: WriteLogEntriesPartialErrors): unknown;
    fromPartial<I extends unknown>(object: I): WriteLogEntriesPartialErrors;
};
export declare const WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
    encode(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
    fromJSON(object: any): WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
    toJSON(message: WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
    fromPartial<I extends unknown>(object: I): WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
};
export declare const ListLogEntriesRequest: {
    encode(message: ListLogEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogEntriesRequest;
    fromJSON(object: any): ListLogEntriesRequest;
    toJSON(message: ListLogEntriesRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListLogEntriesRequest;
};
export declare const ListLogEntriesResponse: {
    encode(message: ListLogEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogEntriesResponse;
    fromJSON(object: any): ListLogEntriesResponse;
    toJSON(message: ListLogEntriesResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListLogEntriesResponse;
};
export declare const ListMonitoredResourceDescriptorsRequest: {
    encode(message: ListMonitoredResourceDescriptorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsRequest;
    fromJSON(object: any): ListMonitoredResourceDescriptorsRequest;
    toJSON(message: ListMonitoredResourceDescriptorsRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListMonitoredResourceDescriptorsRequest;
};
export declare const ListMonitoredResourceDescriptorsResponse: {
    encode(message: ListMonitoredResourceDescriptorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsResponse;
    fromJSON(object: any): ListMonitoredResourceDescriptorsResponse;
    toJSON(message: ListMonitoredResourceDescriptorsResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListMonitoredResourceDescriptorsResponse;
};
export declare const ListLogsRequest: {
    encode(message: ListLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogsRequest;
    fromJSON(object: any): ListLogsRequest;
    toJSON(message: ListLogsRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListLogsRequest;
};
export declare const ListLogsResponse: {
    encode(message: ListLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogsResponse;
    fromJSON(object: any): ListLogsResponse;
    toJSON(message: ListLogsResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListLogsResponse;
};
export declare const TailLogEntriesRequest: {
    encode(message: TailLogEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesRequest;
    fromJSON(object: any): TailLogEntriesRequest;
    toJSON(message: TailLogEntriesRequest): unknown;
    fromPartial<I extends unknown>(object: I): TailLogEntriesRequest;
};
export declare const TailLogEntriesResponse: {
    encode(message: TailLogEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesResponse;
    fromJSON(object: any): TailLogEntriesResponse;
    toJSON(message: TailLogEntriesResponse): unknown;
    fromPartial<I extends unknown>(object: I): TailLogEntriesResponse;
};
export declare const TailLogEntriesResponse_SuppressionInfo: {
    encode(message: TailLogEntriesResponse_SuppressionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesResponse_SuppressionInfo;
    fromJSON(object: any): TailLogEntriesResponse_SuppressionInfo;
    toJSON(message: TailLogEntriesResponse_SuppressionInfo): unknown;
    fromPartial<I extends unknown>(object: I): TailLogEntriesResponse_SuppressionInfo;
};
/** Service for ingesting and querying logs. */
export interface LoggingServiceV2 {
    /**
     * Deletes all the log entries in a log for the _Default Log Bucket. The log
     * reappears if it receives new entries. Log entries written shortly before
     * the delete operation might not be deleted. Entries received after the
     * delete operation with a timestamp before the operation will be deleted.
     */
    DeleteLog(request: DeleteLogRequest): Promise<Empty>;
    /**
     * Writes log entries to Logging. This API method is the
     * only way to send log entries to Logging. This method
     * is used, directly or indirectly, by the Logging agent
     * (fluentd) and all logging libraries configured to use Logging.
     * A single request may contain log entries for a maximum of 1000
     * different resources (projects, organizations, billing accounts or
     * folders)
     */
    WriteLogEntries(request: WriteLogEntriesRequest): Promise<WriteLogEntriesResponse>;
    /**
     * Lists log entries.  Use this method to retrieve log entries that originated
     * from a project/folder/organization/billing account.  For ways to export log
     * entries, see [Exporting
     * Logs](https://cloud.google.com/logging/docs/export).
     */
    ListLogEntries(request: ListLogEntriesRequest): Promise<ListLogEntriesResponse>;
    /** Lists the descriptors for monitored resource types used by Logging. */
    ListMonitoredResourceDescriptors(request: ListMonitoredResourceDescriptorsRequest): Promise<ListMonitoredResourceDescriptorsResponse>;
    /**
     * Lists the logs in projects, organizations, folders, or billing accounts.
     * Only logs that have entries are listed.
     */
    ListLogs(request: ListLogsRequest): Promise<ListLogsResponse>;
    /**
     * Streaming read of log entries as they are ingested. Until the stream is
     * terminated, it will continue reading logs.
     */
    TailLogEntries(request: Observable<TailLogEntriesRequest>): Observable<TailLogEntriesResponse>;
}
export declare class LoggingServiceV2ClientImpl implements LoggingServiceV2 {
    private readonly rpc;
    constructor(rpc: Rpc);
    DeleteLog(request: DeleteLogRequest): Promise<Empty>;
    WriteLogEntries(request: WriteLogEntriesRequest): Promise<WriteLogEntriesResponse>;
    ListLogEntries(request: ListLogEntriesRequest): Promise<ListLogEntriesResponse>;
    ListMonitoredResourceDescriptors(request: ListMonitoredResourceDescriptorsRequest): Promise<ListMonitoredResourceDescriptorsResponse>;
    ListLogs(request: ListLogsRequest): Promise<ListLogsResponse>;
    TailLogEntries(request: Observable<TailLogEntriesRequest>): Observable<TailLogEntriesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
    serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
    bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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
