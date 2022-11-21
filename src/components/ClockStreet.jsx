import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function ClockStreet() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/clock_street.glb"
  );

  useEffect(() => {
    if (!gltf) return;
  }, []);

  const handleClick = () => {
    console.log("click clockstreet");
  };

  return <primitive object={gltf.scene} onClick={handleClick} />;
}
