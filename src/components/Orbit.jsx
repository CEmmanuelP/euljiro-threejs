import { useThree } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls
      attach="orbitControls"
      args={[camera, gl.domElement]}
      maxPolarAngle={Math.PI / 2.2}
      minPolarAngle={Math.PI / 6}
      minDistance={2}
      maxDistance={35}
    />
  );
};

export default Orbit;
