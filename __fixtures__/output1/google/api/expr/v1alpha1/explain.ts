import { Value } from "./value";
import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, Long, isSet } from "@osmonauts/helpers";
export interface Explain {
  values: Value[];
  exprSteps: ExprStep[];
}

function createBaseExplain(): Explain {
  return {
    values: [],
    exprSteps: []
  };
}

export const Explain = {
  encode(message: Explain, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.exprSteps) {
      Explain_ExprStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Explain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;

        case 2:
          message.exprSteps.push(Explain_ExprStep.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Explain {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : [],
      exprSteps: Array.isArray(object?.exprSteps) ? object.exprSteps.map((e: any) => Explain_ExprStep.fromJSON(e)) : []
    };
  },

  toJSON(message: Explain): unknown {
    const obj: any = {};

    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }

    if (message.exprSteps) {
      obj.exprSteps = message.exprSteps.map(e => e ? Explain_ExprStep.toJSON(e) : undefined);
    } else {
      obj.exprSteps = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Explain>, I>>(object: I): Explain {
    const message = createBaseExplain();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    message.exprSteps = object.exprSteps?.map(e => ExprStep.fromPartial(e)) || [];
    return message;
  }

};
export interface Explain_ExprStep {
  id: Long;
  valueIndex: number;
}

function createBaseExplain_ExprStep(): Explain_ExprStep {
  return {
    id: Long.UZERO,
    valueIndex: 0
  };
}

export const Explain_ExprStep = {
  encode(message: Explain_ExprStep, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }

    if (message.valueIndex !== 0) {
      writer.uint32(16).int32(message.valueIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Explain_ExprStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplain_ExprStep();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
          break;

        case 2:
          message.valueIndex = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Explain_ExprStep {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO,
      valueIndex: isSet(object.valueIndex) ? Number(object.valueIndex) : 0
    };
  },

  toJSON(message: Explain_ExprStep): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.valueIndex !== undefined && (obj.valueIndex = Math.round(message.valueIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Explain_ExprStep>, I>>(object: I): Explain_ExprStep {
    const message = createBaseExplain_ExprStep();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.valueIndex = object.valueIndex ?? 0;
    return message;
  }

};