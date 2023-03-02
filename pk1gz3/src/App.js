import ClickMe from "./Components/ClickMe";
import Timer from "./Components/Timer";
import "./styles.css";
import ClickMe2 from "./Components/ClickMe2";
import ClickMe3 from "./Components/Throtting";
import ClickThrottle from "./Components/ClickThrottle";
export default function App() {
  return (
    <div className="App">
      <ClickMe />
      <ClickMe2 />
      <ClickMe3 />
      <Timer />
      <ClickThrottle />
    </div>
  );
}
