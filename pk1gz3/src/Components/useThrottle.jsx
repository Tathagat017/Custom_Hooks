import { useRef } from "react";

export default function useThrottle(fn, delay) {
  let { currrent: wait } = useRef(false);

  return () => {
    if (wait) return;

    fn();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}
