import { Canvas, extend } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import CameraButtons from "./components/CameraButtons";
import CameraControls from "./components/CameraControls";
import Description from "./components/Description";
import Orbit from "./components/Orbit";
import SceneContainer from "./components/SceneContainer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Lights from "./components/Lights";
extend({ OrbitControls });

function App() {
  const [url, setUrl] = useState();

  return (
    <div className="container">
      <CameraButtons setUrl={setUrl} />
      <Canvas
        shadows={{ type: "PCFSoftShadowMap" }}
        className="canvas"
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        camera={{
          position: [10, 20, 5],
          fov: 75,
          near: 0.1,
          far: 500,
        }}
        style={{ background: "black" }}
      >
        {/* <ambientLight intensity={0.1} /> */}
        <CameraControls />
        <SceneContainer />
        <Orbit />
      </Canvas>
      <Description url={url} />
    </div>
  );
}

export default App;
