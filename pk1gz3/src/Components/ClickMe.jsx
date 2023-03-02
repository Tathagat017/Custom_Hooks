import React, { useRef } from "react";
export default function ClickMe2() {
  let { cuurrent: id } = useRef();
  const debounce = (fn, delay) => {
    let id;
    id && clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay);
  };

  const handleClick = () => {
    console.log("request made normal debounce");
  };
  return (
    <button onClick={debounce(handleClick, 3000)}>
      Click ME normal debounce{" "}
    </button>
  );
}
