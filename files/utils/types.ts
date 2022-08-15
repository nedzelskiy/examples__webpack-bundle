export class Types {
  map<T>(value: unknown): T {
    return value as T;
  }
}

export const types = new Types();