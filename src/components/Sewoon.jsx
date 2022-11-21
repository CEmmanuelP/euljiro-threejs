import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Sewoon() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/sewoon.glb"
  );

  useEffect(() => {
    if (!gltf) return;
  });

  return (
    <primitive
      object={gltf.scene}
      onClick={() => {
        console.log("sewoon object clicked!");
      }}
    />
  );
}
