import { ParsedExpr, SourcePosition } from "../../v1alpha1/syntax";
import { Decl, CheckedExpr } from "../../v1alpha1/checked";
import { ExprValue } from "../../v1alpha1/eval";
import { Status } from "../../../../rpc/status";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface ParseRequest {
  celSource: string;
  syntaxVersion: string;
  sourceLocation: string;
  disableMacros: boolean;
}

function createBaseParseRequest(): ParseRequest {
  return {
    celSource: "",
    syntaxVersion: "",
    sourceLocation: "",
    disableMacros: false
  };
}

export const ParseRequest = {
  encode(message: ParseRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.celSource !== "") {
      writer.uint32(10).string(message.celSource);
    }

    if (message.syntaxVersion !== "") {
      writer.uint32(18).string(message.syntaxVersion);
    }

    if (message.sourceLocation !== "") {
      writer.uint32(26).string(message.sourceLocation);
    }

    if (message.disableMacros === true) {
      writer.uint32(32).bool(message.disableMacros);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.celSource = reader.string();
          break;

        case 2:
          message.syntaxVersion = reader.string();
          break;

        case 3:
          message.sourceLocation = reader.string();
          break;

        case 4:
          message.disableMacros = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParseRequest {
    return {
      celSource: isSet(object.celSource) ? String(object.celSource) : "",
      syntaxVersion: isSet(object.syntaxVersion) ? String(object.syntaxVersion) : "",
      sourceLocation: isSet(object.sourceLocation) ? String(object.sourceLocation) : "",
      disableMacros: isSet(object.disableMacros) ? Boolean(object.disableMacros) : false
    };
  },

  toJSON(message: ParseRequest): unknown {
    const obj: any = {};
    message.celSource !== undefined && (obj.celSource = message.celSource);
    message.syntaxVersion !== undefined && (obj.syntaxVersion = message.syntaxVersion);
    message.sourceLocation !== undefined && (obj.sourceLocation = message.sourceLocation);
    message.disableMacros !== undefined && (obj.disableMacros = message.disableMacros);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParseRequest>, I>>(object: I): ParseRequest {
    const message = createBaseParseRequest();
    message.celSource = object.celSource ?? "";
    message.syntaxVersion = object.syntaxVersion ?? "";
    message.sourceLocation = object.sourceLocation ?? "";
    message.disableMacros = object.disableMacros ?? false;
    return message;
  }

};
export interface ParseResponse {
  parsedExpr: ParsedExpr;
  issues: Status[];
}

function createBaseParseResponse(): ParseResponse {
  return {
    parsedExpr: undefined,
    issues: []
  };
}

export const ParseResponse = {
  encode(message: ParseResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;

        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParseResponse {
    return {
      parsedExpr: isSet(object.parsedExpr) ? ParsedExpr.fromJSON(object.parsedExpr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromJSON(e)) : []
    };
  },

  toJSON(message: ParseResponse): unknown {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);

    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParseResponse>, I>>(object: I): ParseResponse {
    const message = createBaseParseResponse();
    message.parsedExpr = object.parsedExpr !== undefined && object.parsedExpr !== null ? ParsedExpr.fromPartial(object.parsedExpr) : undefined;
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  }

};
export interface CheckRequest {
  parsedExpr: ParsedExpr;
  typeEnv: Decl[];
  container: string;
  noStdEnv: boolean;
}

function createBaseCheckRequest(): CheckRequest {
  return {
    parsedExpr: undefined,
    typeEnv: [],
    container: "",
    noStdEnv: false
  };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.typeEnv) {
      Decl.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.container !== "") {
      writer.uint32(26).string(message.container);
    }

    if (message.noStdEnv === true) {
      writer.uint32(32).bool(message.noStdEnv);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;

        case 2:
          message.typeEnv.push(Decl.decode(reader, reader.uint32()));
          break;

        case 3:
          message.container = reader.string();
          break;

        case 4:
          message.noStdEnv = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckRequest {
    return {
      parsedExpr: isSet(object.parsedExpr) ? ParsedExpr.fromJSON(object.parsedExpr) : undefined,
      typeEnv: Array.isArray(object?.typeEnv) ? object.typeEnv.map((e: any) => Decl.fromJSON(e)) : [],
      container: isSet(object.container) ? String(object.container) : "",
      noStdEnv: isSet(object.noStdEnv) ? Boolean(object.noStdEnv) : false
    };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);

    if (message.typeEnv) {
      obj.typeEnv = message.typeEnv.map(e => e ? Decl.toJSON(e) : undefined);
    } else {
      obj.typeEnv = [];
    }

    message.container !== undefined && (obj.container = message.container);
    message.noStdEnv !== undefined && (obj.noStdEnv = message.noStdEnv);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest {
    const message = createBaseCheckRequest();
    message.parsedExpr = object.parsedExpr !== undefined && object.parsedExpr !== null ? ParsedExpr.fromPartial(object.parsedExpr) : undefined;
    message.typeEnv = object.typeEnv?.map(e => Decl.fromPartial(e)) || [];
    message.container = object.container ?? "";
    message.noStdEnv = object.noStdEnv ?? false;
    return message;
  }

};
export interface CheckResponse {
  checkedExpr: CheckedExpr;
  issues: Status[];
}

function createBaseCheckResponse(): CheckResponse {
  return {
    checkedExpr: undefined,
    issues: []
  };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;

        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckResponse {
    return {
      checkedExpr: isSet(object.checkedExpr) ? CheckedExpr.fromJSON(object.checkedExpr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromJSON(e)) : []
    };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    message.checkedExpr !== undefined && (obj.checkedExpr = message.checkedExpr ? CheckedExpr.toJSON(message.checkedExpr) : undefined);

    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse {
    const message = createBaseCheckResponse();
    message.checkedExpr = object.checkedExpr !== undefined && object.checkedExpr !== null ? CheckedExpr.fromPartial(object.checkedExpr) : undefined;
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  }

};
export interface EvalRequest_ExprValueMapEntry {
  key: string;
  value: ExprValue;
}

function createBaseEvalRequest_ExprValueMapEntry(): EvalRequest_ExprValueMapEntry {
  return {
    key: "",
    value: undefined
  };
}

export const EvalRequest_ExprValueMapEntry = {
  encode(message: EvalRequest_ExprValueMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      google.api.expr.v1alpha1.ExprValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest_ExprValueMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_ExprValueMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = google.api.expr.v1alpha1.ExprValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvalRequest_ExprValueMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? google.api.expr.v1alpha1.ExprValue.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: EvalRequest_ExprValueMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? google.api.expr.v1alpha1.ExprValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvalRequest_ExprValueMapEntry>, I>>(object: I): EvalRequest_ExprValueMapEntry {
    const message = createBaseEvalRequest_ExprValueMapEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? google.api.expr.v1alpha1.ExprValue.fromPartial(object.value) : undefined;
    return message;
  }

};
export interface EvalRequest {
  parsedExpr?: ParsedExpr;
  checkedExpr?: CheckedExpr;
  bindings: {
    [key: string]: ExprValue;
  };
  container: string;
}

function createBaseEvalRequest(): EvalRequest {
  return {
    parsedExpr: undefined,
    checkedExpr: undefined,
    bindings: undefined,
    container: ""
  };
}

export const EvalRequest = {
  encode(message: EvalRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }

    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(18).fork()).ldelim();
    }

    Object.entries(message.bindings).forEach(([key, value]) => {
      EvalRequest_BindingsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });

    if (message.container !== "") {
      writer.uint32(34).string(message.container);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;

        case 2:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;

        case 3:
          const entry3 = EvalRequest_BindingsMapEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.bindings[entry3.key] = entry3.value;
          }

          break;

        case 4:
          message.container = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvalRequest {
    return {
      parsedExpr: isSet(object.parsedExpr) ? ParsedExpr.fromJSON(object.parsedExpr) : undefined,
      checkedExpr: isSet(object.checkedExpr) ? CheckedExpr.fromJSON(object.checkedExpr) : undefined,
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromJSON(value);
        return acc;
      }, {}) : {},
      container: isSet(object.container) ? String(object.container) : ""
    };
  },

  toJSON(message: EvalRequest): unknown {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);
    message.checkedExpr !== undefined && (obj.checkedExpr = message.checkedExpr ? CheckedExpr.toJSON(message.checkedExpr) : undefined);
    obj.bindings = {};

    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toJSON(v);
      });
    }

    message.container !== undefined && (obj.container = message.container);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvalRequest>, I>>(object: I): EvalRequest {
    const message = createBaseEvalRequest();
    message.parsedExpr = object.parsedExpr !== undefined && object.parsedExpr !== null ? ParsedExpr.fromPartial(object.parsedExpr) : undefined;
    message.checkedExpr = object.checkedExpr !== undefined && object.checkedExpr !== null ? CheckedExpr.fromPartial(object.checkedExpr) : undefined;
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromPartial(value);
      }

      return acc;
    }, {});
    message.container = object.container ?? "";
    return message;
  }

};
export interface EvalResponse {
  result: ExprValue;
  issues: Status[];
}

function createBaseEvalResponse(): EvalResponse {
  return {
    result: undefined,
    issues: []
  };
}

export const EvalResponse = {
  encode(message: EvalResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      ExprValue.encode(message.result, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = ExprValue.decode(reader, reader.uint32());
          break;

        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvalResponse {
    return {
      result: isSet(object.result) ? ExprValue.fromJSON(object.result) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromJSON(e)) : []
    };
  },

  toJSON(message: EvalResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? ExprValue.toJSON(message.result) : undefined);

    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvalResponse>, I>>(object: I): EvalResponse {
    const message = createBaseEvalResponse();
    message.result = object.result !== undefined && object.result !== null ? ExprValue.fromPartial(object.result) : undefined;
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  }

};
export interface IssueDetails {
  severity: Severity;
  position: SourcePosition;
  id: Long;
}

function createBaseIssueDetails(): IssueDetails {
  return {
    severity: undefined,
    position: undefined,
    id: Long.UZERO
  };
}

export const IssueDetails = {
  encode(message: IssueDetails, writer = _m0.Writer.create()): _m0.Writer {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }

    if (message.position !== undefined) {
      SourcePosition.encode(message.position, writer.uint32(18).fork()).ldelim();
    }

    if (!message.id.isZero()) {
      writer.uint32(24).int64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IssueDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssueDetails();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.severity = (reader.int32() as any);
          break;

        case 2:
          message.position = SourcePosition.decode(reader, reader.uint32());
          break;

        case 3:
          message.id = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IssueDetails {
    return {
      severity: isSet(object.severity) ? issueDetails_SeverityFromJSON(object.severity) : 0,
      position: isSet(object.position) ? SourcePosition.fromJSON(object.position) : undefined,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO
    };
  },

  toJSON(message: IssueDetails): unknown {
    const obj: any = {};
    message.severity !== undefined && (obj.severity = issueDetails_SeverityToJSON(message.severity));
    message.position !== undefined && (obj.position = message.position ? SourcePosition.toJSON(message.position) : undefined);
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IssueDetails>, I>>(object: I): IssueDetails {
    const message = createBaseIssueDetails();
    message.severity = object.severity ?? 0;
    message.position = object.position !== undefined && object.position !== null ? SourcePosition.fromPartial(object.position) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    return message;
  }

};
export enum IssueDetails_Severity {
  /*An unspecified severity.*/
  SEVERITY_UNSPECIFIED = 0,

  /*Deprecation issue for statements and method that may no longer be
  supported or maintained.*/
  DEPRECATION = 1,

  /*Warnings such as: unused variables.*/
  WARNING = 2,

  /*Errors such as: unmatched curly braces or variable redefinition.*/
  ERROR = 3,
  UNRECOGNIZED = -1,
}
export function issueDetailsSeverityFromJSON(object: any): IssueDetails_Severity {
  switch (object) {
    case "SEVERITY_UNSPECIFIED":
      return IssueDetails_Severity.SEVERITY_UNSPECIFIED;

    case "DEPRECATION":
      return IssueDetails_Severity.DEPRECATION;

    case "WARNING":
      return IssueDetails_Severity.WARNING;

    case "ERROR":
      return IssueDetails_Severity.ERROR;

    case -1:
    case "UNRECOGNIZED":
    default:
      return IssueDetails_Severity.UNRECOGNIZED;
  }
}
export function issueDetailsSeverityToJSON(object: IssueDetails_Severity): string {
  switch (object) {
    case IssueDetails_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";

    case IssueDetails_Severity.DEPRECATION:
      return "DEPRECATION";

    case IssueDetails_Severity.WARNING:
      return "WARNING";

    case IssueDetails_Severity.ERROR:
      return "ERROR";

    default:
      return "UNKNOWN";
  }
}