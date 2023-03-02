import React, { useRef } from "react";
export default function ClickMe3() {
  let { current: wait } = useRef(false);
  const Throttling = (fn, delay) => {
    if (wait) return;

    fn();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };

  const handleClick = () => {
    console.log("request made");
  };
  return (
    <button onClick={() => Throttling(handleClick, 2500)}>
      Click ME Normal Throttle
    </button>
  );
}
