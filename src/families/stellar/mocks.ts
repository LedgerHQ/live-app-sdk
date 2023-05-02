import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import {
  RawStellarTransaction,
  StellarTransaction,
  StellarMemoType,
} from "./types";

export const rawTx: RawStellarTransaction = {
  ...rawTxCommon,
  family: FAMILIES.STELLAR,
};

export const rawTxFull: Required<RawStellarTransaction> = {
  ...rawTx,
  fees: "10",
  memoType: StellarMemoType.MEMO_TEXT,
  memoValue: "[MEMO-VALUE]",
};

export const tx: StellarTransaction = {
  ...txCommon,
  family: FAMILIES.STELLAR,
};

export const txFull: Required<StellarTransaction> = {
  ...tx,
  fees: new BigNumber("10"),
  memoType: StellarMemoType.MEMO_TEXT,
  memoValue: "[MEMO-VALUE]",
};
