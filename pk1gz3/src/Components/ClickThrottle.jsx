import useThrottle from "./useThrottle";

export default function ClickThrottle() {
  const handleClick = () => {
    console.log("request made use Throttle");
  };

  let th = useThrottle(handleClick, 2000);

  return <button onClick={th}>Click useThrottle</button>;
}
