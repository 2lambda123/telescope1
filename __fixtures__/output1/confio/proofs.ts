import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export enum HashOp {
  /*NO_HASH is the default if no data passed. Note this is an illegal argument some places.*/
  NO_HASH = 0,
  SHA256 = 1,
  SHA512 = 2,
  KECCAK = 3,
  RIPEMD160 = 4,

  /*ripemd160(sha256(x))*/
  BITCOIN = 5,
  UNRECOGNIZED = -1,
}
export enum LengthOp {
  /*NO_PREFIX don't include any length info*/
  NO_PREFIX = 0,

  /*VAR_PROTO uses protobuf (and go-amino) varint encoding of the length*/
  VAR_PROTO = 1,

  /*VAR_RLP uses rlp int encoding of the length*/
  VAR_RLP = 2,

  /*FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer*/
  FIXED32_BIG = 3,

  /*FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer*/
  FIXED32_LITTLE = 4,

  /*FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer*/
  FIXED64_BIG = 5,

  /*FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer*/
  FIXED64_LITTLE = 6,

  /*REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output)*/
  REQUIRE_32_BYTES = 7,

  /*REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output)*/
  REQUIRE_64_BYTES = 8,
  UNRECOGNIZED = -1,
}
export interface ExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp;
  path: InnerOp[];
}

function createBaseExistenceProof(): ExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}

export const ExistenceProof = {
  encode(message: ExistenceProof, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.path) {
      InnerOp.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistenceProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => InnerOp.fromJSON(e)) : []
    };
  },

  toJSON(message: ExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);

    if (message.path) {
      obj.path = message.path.map(e => e ? InnerOp.toJSON(e) : undefined);
    } else {
      obj.path = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExistenceProof>, I>>(object: I): ExistenceProof {
    const message = createBaseExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  }

};
export interface NonExistenceProof {
  key: Uint8Array;
  left: ExistenceProof;
  right: ExistenceProof;
}

function createBaseNonExistenceProof(): NonExistenceProof {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}

export const NonExistenceProof = {
  encode(message: NonExistenceProof, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.left !== undefined) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }

    if (message.right !== undefined) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NonExistenceProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined
    };
  },

  toJSON(message: NonExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? ExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? ExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NonExistenceProof>, I>>(object: I): NonExistenceProof {
    const message = createBaseNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }

};
export interface CommitmentProof {
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
  batch?: BatchProof;
  compressed?: CompressedBatchProof;
}

function createBaseCommitmentProof(): CommitmentProof {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}

export const CommitmentProof = {
  encode(message: CommitmentProof, writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    if (message.batch !== undefined) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }

    if (message.compressed !== undefined) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;

        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitmentProof {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
      batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
      compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined
    };
  },

  toJSON(message: CommitmentProof): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
    message.batch !== undefined && (obj.batch = message.batch ? BatchProof.toJSON(message.batch) : undefined);
    message.compressed !== undefined && (obj.compressed = message.compressed ? CompressedBatchProof.toJSON(message.compressed) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentProof>, I>>(object: I): CommitmentProof {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
    message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
    return message;
  }

};
export interface LeafOp {
  hash: HashOp;
  prehashKey: HashOp;
  prehashValue: HashOp;
  length: LengthOp;
  prefix: Uint8Array;
}

function createBaseLeafOp(): LeafOp {
  return {
    hash: undefined,
    prehashKey: undefined,
    prehashValue: undefined,
    length: undefined,
    prefix: new Uint8Array()
  };
}

export const LeafOp = {
  encode(message: LeafOp, writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }

    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }

    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }

    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }

    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeafOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
          break;

        case 2:
          message.prehashKey = (reader.int32() as any);
          break;

        case 3:
          message.prehashValue = (reader.int32() as any);
          break;

        case 4:
          message.length = (reader.int32() as any);
          break;

        case 5:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LeafOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prehashKey: isSet(object.prehashKey) ? hashOpFromJSON(object.prehashKey) : 0,
      prehashValue: isSet(object.prehashValue) ? hashOpFromJSON(object.prehashValue) : 0,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },

  toJSON(message: LeafOp): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prehashKey !== undefined && (obj.prehashKey = hashOpToJSON(message.prehashKey));
    message.prehashValue !== undefined && (obj.prehashValue = hashOpToJSON(message.prehashValue));
    message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeafOp>, I>>(object: I): LeafOp {
    const message = createBaseLeafOp();
    message.hash = object.hash ?? 0;
    message.prehashKey = object.prehashKey ?? 0;
    message.prehashValue = object.prehashValue ?? 0;
    message.length = object.length ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  }

};
export interface InnerOp {
  hash: HashOp;
  prefix: Uint8Array;
  suffix: Uint8Array;
}

function createBaseInnerOp(): InnerOp {
  return {
    hash: undefined,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}

export const InnerOp = {
  encode(message: InnerOp, writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }

    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }

    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InnerOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        case 3:
          message.suffix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InnerOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array()
    };
  },

  toJSON(message: InnerOp): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    message.suffix !== undefined && (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InnerOp>, I>>(object: I): InnerOp {
    const message = createBaseInnerOp();
    message.hash = object.hash ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    return message;
  }

};
export interface ProofSpec {
  leafSpec: LeafOp;
  innerSpec: InnerSpec;
  maxDepth: number;
  minDepth: number;
}

function createBaseProofSpec(): ProofSpec {
  return {
    leafSpec: undefined,
    innerSpec: undefined,
    maxDepth: 0,
    minDepth: 0
  };
}

export const ProofSpec = {
  encode(message: ProofSpec, writer = _m0.Writer.create()): _m0.Writer {
    if (message.leafSpec !== undefined) {
      LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }

    if (message.innerSpec !== undefined) {
      InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }

    if (message.maxDepth !== 0) {
      writer.uint32(24).int32(message.maxDepth);
    }

    if (message.minDepth !== 0) {
      writer.uint32(32).int32(message.minDepth);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.leafSpec = LeafOp.decode(reader, reader.uint32());
          break;

        case 2:
          message.innerSpec = InnerSpec.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxDepth = reader.int32();
          break;

        case 4:
          message.minDepth = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProofSpec {
    return {
      leafSpec: isSet(object.leafSpec) ? LeafOp.fromJSON(object.leafSpec) : undefined,
      innerSpec: isSet(object.innerSpec) ? InnerSpec.fromJSON(object.innerSpec) : undefined,
      maxDepth: isSet(object.maxDepth) ? Number(object.maxDepth) : 0,
      minDepth: isSet(object.minDepth) ? Number(object.minDepth) : 0
    };
  },

  toJSON(message: ProofSpec): unknown {
    const obj: any = {};
    message.leafSpec !== undefined && (obj.leafSpec = message.leafSpec ? LeafOp.toJSON(message.leafSpec) : undefined);
    message.innerSpec !== undefined && (obj.innerSpec = message.innerSpec ? InnerSpec.toJSON(message.innerSpec) : undefined);
    message.maxDepth !== undefined && (obj.maxDepth = Math.round(message.maxDepth));
    message.minDepth !== undefined && (obj.minDepth = Math.round(message.minDepth));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofSpec>, I>>(object: I): ProofSpec {
    const message = createBaseProofSpec();
    message.leafSpec = object.leafSpec !== undefined && object.leafSpec !== null ? LeafOp.fromPartial(object.leafSpec) : undefined;
    message.innerSpec = object.innerSpec !== undefined && object.innerSpec !== null ? InnerSpec.fromPartial(object.innerSpec) : undefined;
    message.maxDepth = object.maxDepth ?? 0;
    message.minDepth = object.minDepth ?? 0;
    return message;
  }

};
export interface InnerSpec {
  childOrder: number[];
  childSize: number;
  minPrefixLength: number;
  maxPrefixLength: number;
  emptyChild: Uint8Array;
  hash: HashOp;
}

function createBaseInnerSpec(): InnerSpec {
  return {
    childOrder: [],
    childSize: 0,
    minPrefixLength: 0,
    maxPrefixLength: 0,
    emptyChild: new Uint8Array(),
    hash: undefined
  };
}

export const InnerSpec = {
  encode(message: InnerSpec, writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(8).fork();

    for (const v of message.childOrder) {
      writer.int32(v);
    }

    writer.ldelim();

    if (message.childSize !== 0) {
      writer.uint32(16).int32(message.childSize);
    }

    if (message.minPrefixLength !== 0) {
      writer.uint32(24).int32(message.minPrefixLength);
    }

    if (message.maxPrefixLength !== 0) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }

    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }

    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InnerSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }

        case 2:
          message.childSize = reader.int32();
          break;

        case 3:
          message.minPrefixLength = reader.int32();
          break;

        case 4:
          message.maxPrefixLength = reader.int32();
          break;

        case 5:
          message.emptyChild = reader.bytes();
          break;

        case 6:
          message.hash = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InnerSpec {
    return {
      childOrder: Array.isArray(object?.childOrder) ? object.childOrder.map((e: any) => Number(e)) : [],
      childSize: isSet(object.childSize) ? Number(object.childSize) : 0,
      minPrefixLength: isSet(object.minPrefixLength) ? Number(object.minPrefixLength) : 0,
      maxPrefixLength: isSet(object.maxPrefixLength) ? Number(object.maxPrefixLength) : 0,
      emptyChild: isSet(object.emptyChild) ? bytesFromBase64(object.emptyChild) : new Uint8Array(),
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0
    };
  },

  toJSON(message: InnerSpec): unknown {
    const obj: any = {};

    if (message.childOrder) {
      obj.childOrder = message.childOrder.map(e => Math.round(e));
    } else {
      obj.childOrder = [];
    }

    message.childSize !== undefined && (obj.childSize = Math.round(message.childSize));
    message.minPrefixLength !== undefined && (obj.minPrefixLength = Math.round(message.minPrefixLength));
    message.maxPrefixLength !== undefined && (obj.maxPrefixLength = Math.round(message.maxPrefixLength));
    message.emptyChild !== undefined && (obj.emptyChild = base64FromBytes(message.emptyChild !== undefined ? message.emptyChild : new Uint8Array()));
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InnerSpec>, I>>(object: I): InnerSpec {
    const message = createBaseInnerSpec();
    message.childOrder = object.childOrder?.map(e => e) || [];
    message.childSize = object.childSize ?? 0;
    message.minPrefixLength = object.minPrefixLength ?? 0;
    message.maxPrefixLength = object.maxPrefixLength ?? 0;
    message.emptyChild = object.emptyChild ?? new Uint8Array();
    message.hash = object.hash ?? 0;
    return message;
  }

};
export interface BatchProof {
  entries: BatchEntry[];
}

function createBaseBatchProof(): BatchProof {
  return {
    entries: []
  };
}

export const BatchProof = {
  encode(message: BatchProof, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      BatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => BatchEntry.fromJSON(e)) : []
    };
  },

  toJSON(message: BatchProof): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BatchEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchProof>, I>>(object: I): BatchProof {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map(e => BatchEntry.fromPartial(e)) || [];
    return message;
  }

};
export interface BatchEntry {
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
}

function createBaseBatchEntry(): BatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}

export const BatchEntry = {
  encode(message: BatchEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchEntry {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },

  toJSON(message: BatchEntry): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchEntry>, I>>(object: I): BatchEntry {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }

};
export interface CompressedBatchProof {
  entries: CompressedBatchEntry[];
  lookupInners: InnerOp[];
}

function createBaseCompressedBatchProof(): CompressedBatchProof {
  return {
    entries: [],
    lookupInners: []
  };
}

export const CompressedBatchProof = {
  encode(message: CompressedBatchProof, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.lookupInners) {
      InnerOp.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompressedBatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CompressedBatchEntry.fromJSON(e)) : [],
      lookupInners: Array.isArray(object?.lookupInners) ? object.lookupInners.map((e: any) => InnerOp.fromJSON(e)) : []
    };
  },

  toJSON(message: CompressedBatchProof): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? CompressedBatchEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    if (message.lookupInners) {
      obj.lookupInners = message.lookupInners.map(e => e ? InnerOp.toJSON(e) : undefined);
    } else {
      obj.lookupInners = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompressedBatchProof>, I>>(object: I): CompressedBatchProof {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map(e => CompressedBatchEntry.fromPartial(e)) || [];
    message.lookupInners = object.lookupInners?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  }

};
export interface CompressedBatchEntry {
  exist?: CompressedExistenceProof;
  nonexist?: CompressedNonExistenceProof;
}

function createBaseCompressedBatchEntry(): CompressedBatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}

export const CompressedBatchEntry = {
  encode(message: CompressedBatchEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompressedBatchEntry {
    return {
      exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined
    };
  },

  toJSON(message: CompressedBatchEntry): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? CompressedExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompressedBatchEntry>, I>>(object: I): CompressedBatchEntry {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
    message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
    return message;
  }

};
export interface CompressedExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp;
  path: number[];
}

function createBaseCompressedExistenceProof(): CompressedExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}

export const CompressedExistenceProof = {
  encode(message: CompressedExistenceProof, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }

    writer.uint32(32).fork();

    for (const v of message.path) {
      writer.int32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedExistenceProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompressedExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : []
    };
  },

  toJSON(message: CompressedExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);

    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompressedExistenceProof>, I>>(object: I): CompressedExistenceProof {
    const message = createBaseCompressedExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map(e => e) || [];
    return message;
  }

};
export interface CompressedNonExistenceProof {
  key: Uint8Array;
  left: CompressedExistenceProof;
  right: CompressedExistenceProof;
}

function createBaseCompressedNonExistenceProof(): CompressedNonExistenceProof {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}

export const CompressedNonExistenceProof = {
  encode(message: CompressedNonExistenceProof, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.left !== undefined) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }

    if (message.right !== undefined) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedNonExistenceProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompressedNonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined
    };
  },

  toJSON(message: CompressedNonExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? CompressedExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? CompressedExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompressedNonExistenceProof>, I>>(object: I): CompressedNonExistenceProof {
    const message = createBaseCompressedNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
    message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
    return message;
  }

};