export function isNotNullOrUndefined<T>(x: T | undefined | null): x is T {
  return x !== undefined && x !== null;
}

export type Maybe<T> = T | null | undefined;
