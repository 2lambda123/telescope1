import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
  poolId: bigint;
  sender: string;
  lowerTick: bigint;
  upperTick: bigint;
  tokenDesired0?: Coin;
  tokenDesired1?: Coin;
  tokenMinAmount0: string;
  tokenMinAmount1: string;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
  pool_id: bigint;
  sender: string;
  lower_tick: bigint;
  upper_tick: bigint;
  token_desired0?: CoinSDKType;
  token_desired1?: CoinSDKType;
  token_min_amount0: string;
  token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
  positionId: bigint;
  amount0: string;
  amount1: string;
  joinTime?: Date;
  liquidityCreated: string;
}
export interface MsgCreatePositionResponseSDKType {
  position_id: bigint;
  amount0: string;
  amount1: string;
  join_time?: Date;
  liquidity_created: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
  positionId: bigint;
  sender: string;
  liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
  position_id: bigint;
  sender: string;
  liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
  amount0: string;
  amount1: string;
}
export interface MsgWithdrawPositionResponseSDKType {
  amount0: string;
  amount1: string;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFees {
  positionIds: bigint[];
  sender: string;
}
/** ===================== MsgCollectFees */
export interface MsgCollectFeesSDKType {
  position_ids: bigint[];
  sender: string;
}
export interface MsgCollectFeesResponse {
  collectedFees: Coin[];
}
export interface MsgCollectFeesResponseSDKType {
  collected_fees: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
  positionIds: bigint[];
  sender: string;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
  position_ids: bigint[];
  sender: string;
}
export interface MsgCollectIncentivesResponse {
  collectedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseSDKType {
  collected_incentives: CoinSDKType[];
}
/** ===================== MsgCreateIncentive */
export interface MsgCreateIncentive {
  poolId: bigint;
  sender: string;
  incentiveDenom: string;
  incentiveAmount: string;
  emissionRate: string;
  startTime?: Date;
  minUptime?: Duration;
}
/** ===================== MsgCreateIncentive */
export interface MsgCreateIncentiveSDKType {
  pool_id: bigint;
  sender: string;
  incentive_denom: string;
  incentive_amount: string;
  emission_rate: string;
  start_time?: Date;
  min_uptime?: DurationSDKType;
}
export interface MsgCreateIncentiveResponse {
  incentiveDenom: string;
  incentiveAmount: string;
  emissionRate: string;
  startTime?: Date;
  minUptime?: Duration;
}
export interface MsgCreateIncentiveResponseSDKType {
  incentive_denom: string;
  incentive_amount: string;
  emission_rate: string;
  start_time?: Date;
  min_uptime?: DurationSDKType;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
  positionIds: bigint[];
  sender: string;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
  position_ids: bigint[];
  sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
  newPositionId: bigint;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
  new_position_id: bigint;
}
function createBaseMsgCreatePosition(): MsgCreatePosition {
  return {
    poolId: BigInt(0),
    sender: "",
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
    tokenDesired0: undefined,
    tokenDesired1: undefined,
    tokenMinAmount0: "",
    tokenMinAmount1: ""
  };
}
export const MsgCreatePosition = {
  encode(message: MsgCreatePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(24).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(32).int64(message.upperTick);
    }
    if (message.tokenDesired0 !== undefined) {
      Coin.encode(message.tokenDesired0, writer.uint32(42).fork()).ldelim();
    }
    if (message.tokenDesired1 !== undefined) {
      Coin.encode(message.tokenDesired1, writer.uint32(50).fork()).ldelim();
    }
    if (message.tokenMinAmount0 !== "") {
      writer.uint32(58).string(message.tokenMinAmount0);
    }
    if (message.tokenMinAmount1 !== "") {
      writer.uint32(66).string(message.tokenMinAmount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.lowerTick = reader.int64();
          break;
        case 4:
          message.upperTick = reader.int64();
          break;
        case 5:
          message.tokenDesired0 = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.tokenDesired1 = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.tokenMinAmount0 = reader.string();
          break;
        case 8:
          message.tokenMinAmount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePosition {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      lowerTick: isSet(object.lowerTick) ? BigInt(object.lowerTick.toString()) : BigInt(0),
      upperTick: isSet(object.upperTick) ? BigInt(object.upperTick.toString()) : BigInt(0),
      tokenDesired0: isSet(object.tokenDesired0) ? Coin.fromJSON(object.tokenDesired0) : undefined,
      tokenDesired1: isSet(object.tokenDesired1) ? Coin.fromJSON(object.tokenDesired1) : undefined,
      tokenMinAmount0: isSet(object.tokenMinAmount0) ? String(object.tokenMinAmount0) : "",
      tokenMinAmount1: isSet(object.tokenMinAmount1) ? String(object.tokenMinAmount1) : ""
    };
  },
  toJSON(message: MsgCreatePosition): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    message.tokenDesired0 !== undefined && (obj.tokenDesired0 = message.tokenDesired0 ? Coin.toJSON(message.tokenDesired0) : undefined);
    message.tokenDesired1 !== undefined && (obj.tokenDesired1 = message.tokenDesired1 ? Coin.toJSON(message.tokenDesired1) : undefined);
    message.tokenMinAmount0 !== undefined && (obj.tokenMinAmount0 = message.tokenMinAmount0);
    message.tokenMinAmount1 !== undefined && (obj.tokenMinAmount1 = message.tokenMinAmount1);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreatePosition>): MsgCreatePosition {
    const message = createBaseMsgCreatePosition();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? BigInt(object.lowerTick.toString()) : BigInt(0);
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? BigInt(object.upperTick.toString()) : BigInt(0);
    message.tokenDesired0 = object.tokenDesired0 !== undefined && object.tokenDesired0 !== null ? Coin.fromPartial(object.tokenDesired0) : undefined;
    message.tokenDesired1 = object.tokenDesired1 !== undefined && object.tokenDesired1 !== null ? Coin.fromPartial(object.tokenDesired1) : undefined;
    message.tokenMinAmount0 = object.tokenMinAmount0 ?? "";
    message.tokenMinAmount1 = object.tokenMinAmount1 ?? "";
    return message;
  },
  fromSDK(object: MsgCreatePositionSDKType): MsgCreatePosition {
    return {
      poolId: object?.pool_id,
      sender: object?.sender,
      lowerTick: object?.lower_tick,
      upperTick: object?.upper_tick,
      tokenDesired0: object.token_desired0 ? Coin.fromSDK(object.token_desired0) : undefined,
      tokenDesired1: object.token_desired1 ? Coin.fromSDK(object.token_desired1) : undefined,
      tokenMinAmount0: object?.token_min_amount0,
      tokenMinAmount1: object?.token_min_amount1
    };
  },
  fromSDKJSON(object: any): MsgCreatePositionSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      lower_tick: isSet(object.lower_tick) ? BigInt(object.lower_tick.toString()) : BigInt(0),
      upper_tick: isSet(object.upper_tick) ? BigInt(object.upper_tick.toString()) : BigInt(0),
      token_desired0: isSet(object.token_desired0) ? Coin.fromSDKJSON(object.token_desired0) : undefined,
      token_desired1: isSet(object.token_desired1) ? Coin.fromSDKJSON(object.token_desired1) : undefined,
      token_min_amount0: isSet(object.token_min_amount0) ? String(object.token_min_amount0) : "",
      token_min_amount1: isSet(object.token_min_amount1) ? String(object.token_min_amount1) : ""
    };
  },
  toSDK(message: MsgCreatePosition): MsgCreatePositionSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.sender = message.sender;
    obj.lower_tick = message.lowerTick;
    obj.upper_tick = message.upperTick;
    message.tokenDesired0 !== undefined && (obj.token_desired0 = message.tokenDesired0 ? Coin.toSDK(message.tokenDesired0) : undefined);
    message.tokenDesired1 !== undefined && (obj.token_desired1 = message.tokenDesired1 ? Coin.toSDK(message.tokenDesired1) : undefined);
    obj.token_min_amount0 = message.tokenMinAmount0;
    obj.token_min_amount1 = message.tokenMinAmount1;
    return obj;
  }
};
function createBaseMsgCreatePositionResponse(): MsgCreatePositionResponse {
  return {
    positionId: BigInt(0),
    amount0: "",
    amount1: "",
    joinTime: undefined,
    liquidityCreated: ""
  };
}
export const MsgCreatePositionResponse = {
  encode(message: MsgCreatePositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(toTimestamp(message.joinTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.liquidityCreated !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidityCreated, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.amount0 = reader.string();
          break;
        case 3:
          message.amount1 = reader.string();
          break;
        case 4:
          message.joinTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.liquidityCreated = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePositionResponse {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0),
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      joinTime: isSet(object.joinTime) ? new Date(object.joinTime) : undefined,
      liquidityCreated: isSet(object.liquidityCreated) ? String(object.liquidityCreated) : ""
    };
  },
  toJSON(message: MsgCreatePositionResponse): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    message.joinTime !== undefined && (obj.joinTime = message.joinTime.toISOString());
    message.liquidityCreated !== undefined && (obj.liquidityCreated = message.liquidityCreated);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreatePositionResponse>): MsgCreatePositionResponse {
    const message = createBaseMsgCreatePositionResponse();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.joinTime = object.joinTime ?? undefined;
    message.liquidityCreated = object.liquidityCreated ?? "";
    return message;
  },
  fromSDK(object: MsgCreatePositionResponseSDKType): MsgCreatePositionResponse {
    return {
      positionId: object?.position_id,
      amount0: object?.amount0,
      amount1: object?.amount1,
      joinTime: object.join_time ?? undefined,
      liquidityCreated: object?.liquidity_created
    };
  },
  fromSDKJSON(object: any): MsgCreatePositionResponseSDKType {
    return {
      position_id: isSet(object.position_id) ? BigInt(object.position_id.toString()) : BigInt(0),
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      join_time: isSet(object.join_time) ? new Date(object.join_time) : undefined,
      liquidity_created: isSet(object.liquidity_created) ? String(object.liquidity_created) : ""
    };
  },
  toSDK(message: MsgCreatePositionResponse): MsgCreatePositionResponseSDKType {
    const obj: any = {};
    obj.position_id = message.positionId;
    obj.amount0 = message.amount0;
    obj.amount1 = message.amount1;
    message.joinTime !== undefined && (obj.join_time = message.joinTime ?? undefined);
    obj.liquidity_created = message.liquidityCreated;
    return obj;
  }
};
function createBaseMsgWithdrawPosition(): MsgWithdrawPosition {
  return {
    positionId: BigInt(0),
    sender: "",
    liquidityAmount: ""
  };
}
export const MsgWithdrawPosition = {
  encode(message: MsgWithdrawPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.liquidityAmount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.liquidityAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawPosition {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      liquidityAmount: isSet(object.liquidityAmount) ? String(object.liquidityAmount) : ""
    };
  },
  toJSON(message: MsgWithdrawPosition): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawPosition>): MsgWithdrawPosition {
    const message = createBaseMsgWithdrawPosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.liquidityAmount = object.liquidityAmount ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawPositionSDKType): MsgWithdrawPosition {
    return {
      positionId: object?.position_id,
      sender: object?.sender,
      liquidityAmount: object?.liquidity_amount
    };
  },
  fromSDKJSON(object: any): MsgWithdrawPositionSDKType {
    return {
      position_id: isSet(object.position_id) ? BigInt(object.position_id.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      liquidity_amount: isSet(object.liquidity_amount) ? String(object.liquidity_amount) : ""
    };
  },
  toSDK(message: MsgWithdrawPosition): MsgWithdrawPositionSDKType {
    const obj: any = {};
    obj.position_id = message.positionId;
    obj.sender = message.sender;
    obj.liquidity_amount = message.liquidityAmount;
    return obj;
  }
};
function createBaseMsgWithdrawPositionResponse(): MsgWithdrawPositionResponse {
  return {
    amount0: "",
    amount1: ""
  };
}
export const MsgWithdrawPositionResponse = {
  encode(message: MsgWithdrawPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount0 = reader.string();
          break;
        case 2:
          message.amount1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawPositionResponse {
    return {
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : ""
    };
  },
  toJSON(message: MsgWithdrawPositionResponse): unknown {
    const obj: any = {};
    message.amount0 !== undefined && (obj.amount0 = message.amount0);
    message.amount1 !== undefined && (obj.amount1 = message.amount1);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse {
    const message = createBaseMsgWithdrawPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawPositionResponseSDKType): MsgWithdrawPositionResponse {
    return {
      amount0: object?.amount0,
      amount1: object?.amount1
    };
  },
  fromSDKJSON(object: any): MsgWithdrawPositionResponseSDKType {
    return {
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : ""
    };
  },
  toSDK(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseSDKType {
    const obj: any = {};
    obj.amount0 = message.amount0;
    obj.amount1 = message.amount1;
    return obj;
  }
};
function createBaseMsgCollectFees(): MsgCollectFees {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgCollectFees = {
  encode(message: MsgCollectFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectFees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectFees {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgCollectFees): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCollectFees>): MsgCollectFees {
    const message = createBaseMsgCollectFees();
    message.positionIds = object.positionIds?.map(e => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgCollectFeesSDKType): MsgCollectFees {
    return {
      positionIds: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => e) : [],
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): MsgCollectFeesSDKType {
    return {
      position_ids: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: MsgCollectFees): MsgCollectFeesSDKType {
    const obj: any = {};
    if (message.positionIds) {
      obj.position_ids = message.positionIds.map(e => e);
    } else {
      obj.position_ids = [];
    }
    obj.sender = message.sender;
    return obj;
  }
};
function createBaseMsgCollectFeesResponse(): MsgCollectFeesResponse {
  return {
    collectedFees: []
  };
}
export const MsgCollectFeesResponse = {
  encode(message: MsgCollectFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collectedFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectedFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectFeesResponse {
    return {
      collectedFees: Array.isArray(object?.collectedFees) ? object.collectedFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCollectFeesResponse): unknown {
    const obj: any = {};
    if (message.collectedFees) {
      obj.collectedFees = message.collectedFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.collectedFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCollectFeesResponse>): MsgCollectFeesResponse {
    const message = createBaseMsgCollectFeesResponse();
    message.collectedFees = object.collectedFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCollectFeesResponseSDKType): MsgCollectFeesResponse {
    return {
      collectedFees: Array.isArray(object?.collected_fees) ? object.collected_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgCollectFeesResponseSDKType {
    return {
      collected_fees: Array.isArray(object?.collected_fees) ? object.collected_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgCollectFeesResponse): MsgCollectFeesResponseSDKType {
    const obj: any = {};
    if (message.collectedFees) {
      obj.collected_fees = message.collectedFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.collected_fees = [];
    }
    return obj;
  }
};
function createBaseMsgCollectIncentives(): MsgCollectIncentives {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgCollectIncentives = {
  encode(message: MsgCollectIncentives, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentives {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentives();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectIncentives {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgCollectIncentives): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCollectIncentives>): MsgCollectIncentives {
    const message = createBaseMsgCollectIncentives();
    message.positionIds = object.positionIds?.map(e => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgCollectIncentivesSDKType): MsgCollectIncentives {
    return {
      positionIds: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => e) : [],
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): MsgCollectIncentivesSDKType {
    return {
      position_ids: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: MsgCollectIncentives): MsgCollectIncentivesSDKType {
    const obj: any = {};
    if (message.positionIds) {
      obj.position_ids = message.positionIds.map(e => e);
    } else {
      obj.position_ids = [];
    }
    obj.sender = message.sender;
    return obj;
  }
};
function createBaseMsgCollectIncentivesResponse(): MsgCollectIncentivesResponse {
  return {
    collectedIncentives: []
  };
}
export const MsgCollectIncentivesResponse = {
  encode(message: MsgCollectIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collectedIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCollectIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollectIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCollectIncentivesResponse {
    return {
      collectedIncentives: Array.isArray(object?.collectedIncentives) ? object.collectedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCollectIncentivesResponse): unknown {
    const obj: any = {};
    if (message.collectedIncentives) {
      obj.collectedIncentives = message.collectedIncentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.collectedIncentives = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse {
    const message = createBaseMsgCollectIncentivesResponse();
    message.collectedIncentives = object.collectedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCollectIncentivesResponseSDKType): MsgCollectIncentivesResponse {
    return {
      collectedIncentives: Array.isArray(object?.collected_incentives) ? object.collected_incentives.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgCollectIncentivesResponseSDKType {
    return {
      collected_incentives: Array.isArray(object?.collected_incentives) ? object.collected_incentives.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseSDKType {
    const obj: any = {};
    if (message.collectedIncentives) {
      obj.collected_incentives = message.collectedIncentives.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.collected_incentives = [];
    }
    return obj;
  }
};
function createBaseMsgCreateIncentive(): MsgCreateIncentive {
  return {
    poolId: BigInt(0),
    sender: "",
    incentiveDenom: "",
    incentiveAmount: "",
    emissionRate: "",
    startTime: undefined,
    minUptime: undefined
  };
}
export const MsgCreateIncentive = {
  encode(message: MsgCreateIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.incentiveDenom !== "") {
      writer.uint32(26).string(message.incentiveDenom);
    }
    if (message.incentiveAmount !== "") {
      writer.uint32(34).string(message.incentiveAmount);
    }
    if (message.emissionRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.incentiveDenom = reader.string();
          break;
        case 4:
          message.incentiveAmount = reader.string();
          break;
        case 5:
          message.emissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateIncentive {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      incentiveDenom: isSet(object.incentiveDenom) ? String(object.incentiveDenom) : "",
      incentiveAmount: isSet(object.incentiveAmount) ? String(object.incentiveAmount) : "",
      emissionRate: isSet(object.emissionRate) ? String(object.emissionRate) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  toJSON(message: MsgCreateIncentive): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.incentiveDenom !== undefined && (obj.incentiveDenom = message.incentiveDenom);
    message.incentiveAmount !== undefined && (obj.incentiveAmount = message.incentiveAmount);
    message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.minUptime !== undefined && (obj.minUptime = message.minUptime ? Duration.toJSON(message.minUptime) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateIncentive>): MsgCreateIncentive {
    const message = createBaseMsgCreateIncentive();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.incentiveDenom = object.incentiveDenom ?? "";
    message.incentiveAmount = object.incentiveAmount ?? "";
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateIncentiveSDKType): MsgCreateIncentive {
    return {
      poolId: object?.pool_id,
      sender: object?.sender,
      incentiveDenom: object?.incentive_denom,
      incentiveAmount: object?.incentive_amount,
      emissionRate: object?.emission_rate,
      startTime: object.start_time ?? undefined,
      minUptime: object.min_uptime ? Duration.fromSDK(object.min_uptime) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateIncentiveSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      incentive_denom: isSet(object.incentive_denom) ? String(object.incentive_denom) : "",
      incentive_amount: isSet(object.incentive_amount) ? String(object.incentive_amount) : "",
      emission_rate: isSet(object.emission_rate) ? String(object.emission_rate) : "",
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      min_uptime: isSet(object.min_uptime) ? Duration.fromSDKJSON(object.min_uptime) : undefined
    };
  },
  toSDK(message: MsgCreateIncentive): MsgCreateIncentiveSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.sender = message.sender;
    obj.incentive_denom = message.incentiveDenom;
    obj.incentive_amount = message.incentiveAmount;
    obj.emission_rate = message.emissionRate;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.minUptime !== undefined && (obj.min_uptime = message.minUptime ? Duration.toSDK(message.minUptime) : undefined);
    return obj;
  }
};
function createBaseMsgCreateIncentiveResponse(): MsgCreateIncentiveResponse {
  return {
    incentiveDenom: "",
    incentiveAmount: "",
    emissionRate: "",
    startTime: undefined,
    minUptime: undefined
  };
}
export const MsgCreateIncentiveResponse = {
  encode(message: MsgCreateIncentiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveDenom !== "") {
      writer.uint32(10).string(message.incentiveDenom);
    }
    if (message.incentiveAmount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.incentiveAmount, 18).atomics);
    }
    if (message.emissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateIncentiveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIncentiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveDenom = reader.string();
          break;
        case 2:
          message.incentiveAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.emissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateIncentiveResponse {
    return {
      incentiveDenom: isSet(object.incentiveDenom) ? String(object.incentiveDenom) : "",
      incentiveAmount: isSet(object.incentiveAmount) ? String(object.incentiveAmount) : "",
      emissionRate: isSet(object.emissionRate) ? String(object.emissionRate) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  toJSON(message: MsgCreateIncentiveResponse): unknown {
    const obj: any = {};
    message.incentiveDenom !== undefined && (obj.incentiveDenom = message.incentiveDenom);
    message.incentiveAmount !== undefined && (obj.incentiveAmount = message.incentiveAmount);
    message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.minUptime !== undefined && (obj.minUptime = message.minUptime ? Duration.toJSON(message.minUptime) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateIncentiveResponse>): MsgCreateIncentiveResponse {
    const message = createBaseMsgCreateIncentiveResponse();
    message.incentiveDenom = object.incentiveDenom ?? "";
    message.incentiveAmount = object.incentiveAmount ?? "";
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateIncentiveResponseSDKType): MsgCreateIncentiveResponse {
    return {
      incentiveDenom: object?.incentive_denom,
      incentiveAmount: object?.incentive_amount,
      emissionRate: object?.emission_rate,
      startTime: object.start_time ?? undefined,
      minUptime: object.min_uptime ? Duration.fromSDK(object.min_uptime) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateIncentiveResponseSDKType {
    return {
      incentive_denom: isSet(object.incentive_denom) ? String(object.incentive_denom) : "",
      incentive_amount: isSet(object.incentive_amount) ? String(object.incentive_amount) : "",
      emission_rate: isSet(object.emission_rate) ? String(object.emission_rate) : "",
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      min_uptime: isSet(object.min_uptime) ? Duration.fromSDKJSON(object.min_uptime) : undefined
    };
  },
  toSDK(message: MsgCreateIncentiveResponse): MsgCreateIncentiveResponseSDKType {
    const obj: any = {};
    obj.incentive_denom = message.incentiveDenom;
    obj.incentive_amount = message.incentiveAmount;
    obj.emission_rate = message.emissionRate;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.minUptime !== undefined && (obj.min_uptime = message.minUptime ? Duration.toSDK(message.minUptime) : undefined);
    return obj;
  }
};
function createBaseMsgFungifyChargedPositions(): MsgFungifyChargedPositions {
  return {
    positionIds: [],
    sender: ""
  };
}
export const MsgFungifyChargedPositions = {
  encode(message: MsgFungifyChargedPositions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.positionIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFungifyChargedPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.positionIds.push(reader.uint64());
            }
          } else {
            message.positionIds.push(reader.uint64());
          }
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFungifyChargedPositions {
    return {
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgFungifyChargedPositions): unknown {
    const obj: any = {};
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.positionIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgFungifyChargedPositions>): MsgFungifyChargedPositions {
    const message = createBaseMsgFungifyChargedPositions();
    message.positionIds = object.positionIds?.map(e => BigInt(e.toString())) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgFungifyChargedPositionsSDKType): MsgFungifyChargedPositions {
    return {
      positionIds: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => e) : [],
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): MsgFungifyChargedPositionsSDKType {
    return {
      position_ids: Array.isArray(object?.position_ids) ? object.position_ids.map((e: any) => BigInt(e.toString())) : [],
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsSDKType {
    const obj: any = {};
    if (message.positionIds) {
      obj.position_ids = message.positionIds.map(e => e);
    } else {
      obj.position_ids = [];
    }
    obj.sender = message.sender;
    return obj;
  }
};
function createBaseMsgFungifyChargedPositionsResponse(): MsgFungifyChargedPositionsResponse {
  return {
    newPositionId: BigInt(0)
  };
}
export const MsgFungifyChargedPositionsResponse = {
  encode(message: MsgFungifyChargedPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newPositionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.newPositionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFungifyChargedPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFungifyChargedPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPositionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFungifyChargedPositionsResponse {
    return {
      newPositionId: isSet(object.newPositionId) ? BigInt(object.newPositionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgFungifyChargedPositionsResponse): unknown {
    const obj: any = {};
    message.newPositionId !== undefined && (obj.newPositionId = (message.newPositionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgFungifyChargedPositionsResponse>): MsgFungifyChargedPositionsResponse {
    const message = createBaseMsgFungifyChargedPositionsResponse();
    message.newPositionId = object.newPositionId !== undefined && object.newPositionId !== null ? BigInt(object.newPositionId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgFungifyChargedPositionsResponseSDKType): MsgFungifyChargedPositionsResponse {
    return {
      newPositionId: object?.new_position_id
    };
  },
  fromSDKJSON(object: any): MsgFungifyChargedPositionsResponseSDKType {
    return {
      new_position_id: isSet(object.new_position_id) ? BigInt(object.new_position_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseSDKType {
    const obj: any = {};
    obj.new_position_id = message.newPositionId;
    return obj;
  }
};