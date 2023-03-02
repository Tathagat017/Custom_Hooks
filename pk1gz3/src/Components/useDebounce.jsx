import { useRef } from "react";

export const useDebounce = (fn, delay) => {
  let { current: id } = useRef;
  return () => {
    id && clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay);
  };
};
