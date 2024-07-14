import { useShallow } from 'zustand/react/shallow';

const useShallowSelector = <T, U>(
  store: (selector: (state: T) => U) => U,
  selector: (state: T) => U
) => {
  return store(useShallow(selector));
};

export default useShallowSelector;
