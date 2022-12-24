/* eslint-disable */
import { Attribute, AttributeAmino, AttributeAminoType, AttributeSDKType } from "../../base/v1beta1/attribute";
import { MsgSignProviderAttributes, MsgSignProviderAttributesAmino, MsgSignProviderAttributesAminoType, MsgSignProviderAttributesSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesAmino, MsgDeleteProviderAttributesAminoType, MsgDeleteProviderAttributesSDKType } from "./audit";
export const AminoConverter = {
  "/akash.audit.v1beta1.MsgSignProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgSignProviderAttributes",
    toAmino: MsgSignProviderAttributes.toAmino,
    fromAmino: MsgSignProviderAttributes.fromAmino
  },
  "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
    aminoType: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
    toAmino: MsgDeleteProviderAttributes.toAmino,
    fromAmino: MsgDeleteProviderAttributes.fromAmino
  }
};