import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */
  inflationRateChange: string;
  /** maximum inflation rate */
  inflationMax: string;
  /** minimum inflation rate */
  inflationMin: string;
  /** goal of percent bonded atoms */
  goalBonded: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: bigint;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },
  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromSDK(object: MinterSDKType): Minter {
    return {
      inflation: object?.inflation,
      annualProvisions: object?.annual_provisions
    };
  },
  fromSDKJSON(object: any): MinterSDKType {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },
  toSDK(message: Minter): MinterSDKType {
    const obj: any = {};
    obj.inflation = message.inflation;
    obj.annual_provisions = message.annualProvisions;
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt(0)
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflationRateChange: isSet(object.inflationRateChange) ? String(object.inflationRateChange) : "",
      inflationMax: isSet(object.inflationMax) ? String(object.inflationMax) : "",
      inflationMin: isSet(object.inflationMin) ? String(object.inflationMin) : "",
      goalBonded: isSet(object.goalBonded) ? String(object.goalBonded) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflationRateChange !== undefined && (obj.inflationRateChange = message.inflationRateChange);
    message.inflationMax !== undefined && (obj.inflationMax = message.inflationMax);
    message.inflationMin !== undefined && (obj.inflationMin = message.inflationMin);
    message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      inflationRateChange: object?.inflation_rate_change,
      inflationMax: object?.inflation_max,
      inflationMin: object?.inflation_min,
      goalBonded: object?.goal_bonded,
      blocksPerYear: object?.blocks_per_year
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      inflation_rate_change: isSet(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
      inflation_max: isSet(object.inflation_max) ? String(object.inflation_max) : "",
      inflation_min: isSet(object.inflation_min) ? String(object.inflation_min) : "",
      goal_bonded: isSet(object.goal_bonded) ? String(object.goal_bonded) : "",
      blocks_per_year: isSet(object.blocks_per_year) ? BigInt(object.blocks_per_year.toString()) : BigInt(0)
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.inflation_rate_change = message.inflationRateChange;
    obj.inflation_max = message.inflationMax;
    obj.inflation_min = message.inflationMin;
    obj.goal_bonded = message.goalBonded;
    obj.blocks_per_year = message.blocksPerYear;
    return obj;
  }
};