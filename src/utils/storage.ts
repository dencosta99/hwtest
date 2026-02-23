import { createMMKV } from "react-native-mmkv";

const mmkv = createMMKV();

class Storage {
  static getString(key: string): string | undefined {
    return mmkv.getString(key);
  }

  static set(key: string, value: string | number | boolean): void {
    mmkv.set(key, value);
  }

  static getNumber(key: string): number | undefined {
    return mmkv.getNumber(key);
  }

  static getBoolean(key: string): boolean | undefined {
    return mmkv.getBoolean(key);
  }

  static remove(key: string): void {
    mmkv.remove(key);
  }

  static contains(key: string): boolean {
    return mmkv.contains(key);
  }

  static clearAll(): void {
    mmkv.clearAll();
  }

  static getJSON<T>(key: string): T | null {
    const value = mmkv.getString(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }

  static setJSON<T>(key: string, value: T): void {
    mmkv.set(key, JSON.stringify(value));
  }
}

export { Storage };
