import {types} from "./types";
import {isArray} from "./checkers";

export class Arrays {
  deduplicate = <T>(arr: T[]): T[] => {
    const s = types.map<Set<T>>(new Set());
    arr.forEach(item => {
      if (isArray(item)) {
        const res = this.deduplicate<T>(types.map(item));
        s.add(types.map(res));
      } else {
        s.add(item);
      }
    });
    return Array.from(s);
  };

  getAppendArray = (value: unknown | unknown[], currentValues: unknown[]): unknown[] => {
    if (Array.isArray(value)) {
      return this.deduplicate([
        ...currentValues,
        ...value,
      ]);
    }

    return this.deduplicate([
      ...currentValues,
      value,
    ]);
  };
}

export const arrays = new Arrays();