import { useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./styles.css";

export default function TestScrolll() {
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <Controller>
        <Scene duration={600} pin>
          <div>
            <span> Sticky Example </span>
            <span> Sticky Example </span>
            <span> Sticky Example </span>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}
