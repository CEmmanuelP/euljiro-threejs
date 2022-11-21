import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { BufferAttribute } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

function CameraControl() {
  useFrame((state, delta) => {
    state.camera.lookAt(0, -10, -10);
  });
}

export function PrintStreet() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/print_street.glb"
  );

  useEffect(() => {
    if (!gltf) return;

    let scene = gltf.scene;
  });

  // useFrame(() => {
  //   // gltf.scene.children[0].rotation.y += 0.001;
  // });

  return (
    <primitive
      object={gltf.scene}
      onClick={() => {
        console.log("clock object clicked!");
      }}
    />
  );
}
