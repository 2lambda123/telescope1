export const helpers = `import * as _m0 from "protobufjs/minimal";
import * as Long from 'long';

// @ts-ignore
if (_m0.util.Long !== Long) {
    _m0.util.Long = (Long as any);

    _m0.configure();
}

export { Long };

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));

export function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));

export function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(''));
}

export interface AminoHeight {
    readonly revision_number?: string;
    readonly revision_height?: string;
};

export function omitDefault<T extends string | number | Long>(input: T): T | undefined {
    if (typeof input === "string") {
        return input === "" ? undefined : input;
    }

    if (typeof input === "number") {
        return input === 0 ? undefined : input;
    }

    if (Long.isLong(input)) {
        return input.isZero() ? undefined : input;
    }

    throw new Error(\`Got unsupported type \${typeof input}\`);
};

interface Duration {
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds: Long;
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * \`seconds\` field and a positive or negative \`nanos\` field. For durations
     * of one second or more, a non-zero value for the \`nanos\` field must be
     * of the same sign as the \`seconds\` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */

    nanos: number;
}

export function toDuration(duration: string): Duration {
    return {
        seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1000000000)),
        nanos: parseInt(duration) % 1000000000
    };
};

export function fromDuration(duration: Duration): string {
    return (parseInt(duration.seconds.toString()) * 1000000000 + duration.nanos).toString();
};

export function isSet(value: any): boolean {
    return value !== null && value !== undefined;
};

export function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
};

export interface PageRequest {
    key: Uint8Array;
    offset: Long;
    limit: Long;
    countTotal: boolean;
    reverse: boolean;
};

export interface PageRequestParams {
    "pagination.key"?: string;
    "pagination.offset"?: string;
    "pagination.limit"?: string;
    "pagination.count_total"?: boolean;
    "pagination.reverse"?: boolean;
};

export interface Params {
    params: PageRequestParams;
};

export const setPaginationParams = (options: Params, pagination?: PageRequest) => {

    if (!pagination) {
        return options;
    }

    if (typeof pagination?.countTotal !== "undefined") {
        options.params['pagination.count_total'] = pagination.countTotal;
    }
    if (typeof pagination?.key !== "undefined") {
        // String to Uint8Array
        // let uint8arr = new Uint8Array(Buffer.from(data,'base64')); 

        // Uint8Array to String
        options.params['pagination.key'] = Buffer.from(pagination.key).toString('base64');
    }
    if (typeof pagination?.limit !== "undefined") {
      options.params["pagination.limit"] = pagination.limit.toString()
    }
    if (typeof pagination?.offset !== "undefined") {
      options.params["pagination.offset"] = pagination.offset.toString()
    }    
    if (typeof pagination?.reverse !== "undefined") {
        options.params['pagination.reverse'] = pagination.reverse;
    }

    return options;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
};

interface Timestamp {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     */
    seconds: Long;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive.
     */

    nanos: number;
}

export function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = date.getTime() % 1000 * 1000000;
    return {
        seconds,
        nanos
    };
};

export function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
};

const fromJSON = (object: any): Timestamp => {
    return {
        seconds: isSet(object.seconds) ? Long.fromString(object.seconds) : Long.ZERO,
        nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
};

const timestampFromJSON = (object: any): Timestamp => {
  return {
    seconds: isSet(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
    nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
  };
}
  
export function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return timestampFromJSON(o);
  }
}
  
function numberToLong(number: number) {
    return Long.fromNumber(number);
}
`;