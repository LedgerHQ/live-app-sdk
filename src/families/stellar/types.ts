import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export enum StellarMemoType {
  MEMO_TEXT = "MEMO_TEXT",
  MEMO_ID = "MEMO_ID",
  MEMO_HASH = "MEMO_HASH",
  MEMO_RETURN = "MEMO_RETURN",
}

export interface StellarTransaction extends TransactionCommon {
  readonly family: FAMILIES.STELLAR;
  fees?: BigNumber;
  memoType?: StellarMemoType;
  memoValue?: string;
}

export interface RawStellarTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.STELLAR;
  fees?: string;
  memoType?: StellarMemoType;
  memoValue?: string;
}
