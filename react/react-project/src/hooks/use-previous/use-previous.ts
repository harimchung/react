// hooks/usePrevious.ts
import React from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value; // 이전 값 저장
  }, [value]);

  return ref.current;
}
