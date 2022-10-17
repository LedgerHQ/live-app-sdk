/* istanbul ignore file */
import data from "./mocks.json";
import generateRandomTxID from "./generateRandomTxID";
import type { Account, Currency } from "../types";
import { deserializeAccount } from "../serializers";
import LedgerLivePlatformSDK from "../LedgerLivePlatformSDK";
import { RawSignedTransaction } from "../rawTypes";
import { StorageSDK } from "../LedgerLivePlatformSDK/storage";

const { rawAccounts, rawCurrencies } = data;

const accounts: Account[] = rawAccounts.map(deserializeAccount);
const currencies: Currency[] = rawCurrencies as Currency[];

/**
 * @see https://www.michaelbromley.co.uk/blog/mocking-classes-with-typescript/
 */
type MockOf<Class, Omit extends keyof Class = never> = {
  [Member in Exclude<keyof Class, Omit>]: Class[Member];
};

export default class LedgerLiveSDKMock
  implements
    MockOf<
      LedgerLivePlatformSDK,
      | "bridgeApp"
      | "bridgeDashboard"
      | "completeExchange"
      | "startExchange"
      | "listApps"
      | "synchronizeAccount"
      | "getLastConnectedDeviceInfo"
      | "_saveToStorage"
      | "_getFromStorage"
    >
{
  connected = false;

  connect(): void {
    this.connected = true;
  }

  disconnect(): void {
    this.connected = false;
  }

  readonly storage: StorageSDK = {
    save: async (_key: string, _value: string): Promise<void> => {
      await Promise.resolve("");
    },
    get: async (_key: string): Promise<string> => {
      return Promise.resolve("");
    },
  };

  /** Legder Live Methods */

  async requestAccount(): Promise<Account> {
    return Promise.resolve(accounts[0]);
  }

  async listCurrencies(): Promise<Currency[]> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }

    return Promise.resolve(currencies);
  }

  async listAccounts(): Promise<Account[]> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve(accounts);
  }

  async getAccount(accountId: string): Promise<Account> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    const selectedAccount = accounts.find(
      ({ id }: Account) => id === accountId
    );

    if (!selectedAccount) {
      throw new Error("Account not found");
    }
    return Promise.resolve(selectedAccount);
  }

  async receive(accountId: string): Promise<string> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }

    const selectedAccount = accounts.find(
      ({ id }: Account) => id === accountId
    );

    if (!selectedAccount) {
      throw new Error("Account not found");
    }
    return Promise.resolve(selectedAccount.address);
  }

  async signTransaction(
    _accountId: string,
    _transaction: unknown
  ): Promise<RawSignedTransaction> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve({
      operation: {},
      signature: generateRandomTxID(109),
      expirationDate: null,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async signMessage(_accountId: string, _message: Buffer): Promise<string> {
    return Promise.resolve("message signed!");
  }

  async broadcastSignedTransaction(
    _accountId: string,
    _signedTransaction: RawSignedTransaction
  ): Promise<string> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve(generateRandomTxID(64));
  }
}
