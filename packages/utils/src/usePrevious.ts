import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current as T;
}
