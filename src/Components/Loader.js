import React from "react";
//import { useProgress, Html } from "@react-three/drei";
import { useProgress, HTML } from "drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "#FFFFFF" }}>{progress} % loaded</span>
    </Html>
  );
}
export default Loader;
