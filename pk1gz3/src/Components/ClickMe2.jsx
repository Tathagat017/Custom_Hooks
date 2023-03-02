import { useDebounce } from "./useDebounce";

export default function ClickMe2() {
  const handleClick = () => {
    console.log("request made usedebounce");
  };
  const debounce = useDebounce(handleClick, 2000);
  return <button onClick={debounce}>Click ME useDe</button>;
}
