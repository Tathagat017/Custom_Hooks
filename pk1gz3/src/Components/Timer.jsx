import { useTimer } from "./useTimer";

export default function Timer() {
  const show = useTimer(3000);

  return <div>{show && <h1>Timer1</h1>}</div>;
}
