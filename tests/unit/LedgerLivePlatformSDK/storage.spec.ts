import { expect } from "chai";
import storeFactory from "../../../src/LedgerLivePlatformSDK/storage";

describe("DefaultStorageSDK", () => {
  class Wrapper {
    keyStored = "";

    valueStored = "";

    saveToStorage(key: string, value: string): Promise<boolean> {
      this.keyStored = key;
      this.valueStored = value;
      return Promise.resolve(true);
    }

    getFromStorage(key: string): Promise<string> {
      this.keyStored = key;
      return Promise.resolve(this.valueStored);
    }
  }

  describe("save", () => {
    it("call the wrapper method saveToStorage", async () => {
      // Given
      const wrapper = new Wrapper();
      const defaultStorage = storeFactory(wrapper);

      // When
      await defaultStorage.save("Key to store", "Value to store");

      // Then
      expect(wrapper.keyStored).to.equals("Key to store");
      expect(wrapper.valueStored).to.equals("Value to store");
    });
  });

  describe("get", () => {
    it("call the wrapper method getFromStorage", async () => {
      // Given
      const wrapper = new Wrapper();
      wrapper.valueStored = "Value already stored";
      const defaultStorage = storeFactory(wrapper);

      // When
      const value = await defaultStorage.get("Key to retrieve value");

      // Then
      expect(wrapper.keyStored).to.equals("Key to retrieve value");
      expect(value).to.equals("Value already stored");
    });
  });
});
