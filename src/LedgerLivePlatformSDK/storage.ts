/**
 * Storage interface to access Wallet Server store.
 */
export interface StorageSDK {
  /**
   * Store the value with the associated key.
   * @param key - Key to find later the value
   * @param value - Value to save
   * @throws Will throw an error if the value has not been saved.
   */
  save(key: string, value: string): Promise<void>;
  /**
   * Retrieve the value associated to the key.
   * @param key - Key linked to the value searched
   * @returns The value associated to the `key`
   */
  get(key: string): Promise<string>;
}

type StoreWrapper = {
  saveToStorage: (key: string, value: string) => Promise<void>;
  getFromStorage: (key: string) => Promise<string>;
};

class DefaultStorageSDK implements StorageSDK {
  private wrapper: StoreWrapper;

  constructor(wrapper: StoreWrapper) {
    this.wrapper = wrapper;
  }

  async save(key: string, value: string): Promise<void> {
    await this.wrapper.saveToStorage(key, value);
  }

  async get(key: string): Promise<string> {
    return this.wrapper.getFromStorage(key);
  }
}

/**
 * Create a Storage object
 * @param wrapper - Wrapper providing access method to a storage implementation
 * @returns An object to interact with underlying storage system.
 */
export default function storeFactory(wrapper: StoreWrapper): StorageSDK {
  return new DefaultStorageSDK(wrapper);
}
