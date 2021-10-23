import { useCallback, useState } from 'react';

import * as storage from './storage';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): readonly [T, (value: T) => void, () => void] {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.get(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Unable to get ${key}`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        storage.set(key, JSON.stringify(value));
      } catch (error) {
        console.warn(`Unable to set ${key}`, error);
      }
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      storage.remove(key);
    } catch (error) {
      console.warn(`Unable to remove ${key}`, error);
    }
  }, [key]);

  return [storedValue, setValue, removeValue] as const;
}
