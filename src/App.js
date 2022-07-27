import { useEffect } from "react";
import "./styles.css";
import TestScrolll from "./TestScroll";

export default function App() {
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div className="App">
      <span>hello world</span>
      <TestScrolll />
    </div>
  );
}
