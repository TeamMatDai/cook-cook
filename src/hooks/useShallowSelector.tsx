import { useShallow } from 'zustand/react/shallow';

const useShallowSelector = (store, selector) => {
  return store(useShallow(selector));
};

export default useShallowSelector;
