import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Color,
  Mesh,
  MeshBasicMaterial,
  PointLightHelper,
  SpotLightHelper,
  Vector3,
} from "three";
import { Environment, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Euljiro } from "./Euljiro";
import { useFrame } from "@react-three/fiber";
import { SceneParticles } from "./SceneParticles";
import { Words } from "./Words";
import Ground from "./Ground";
import Effects from "./Effects";
import Bulb from "./Bulb";
import Lights from "./Lights";

export default function SceneContainer() {
  // const pointLight = useRef();
  // const spotLight1 = useRef();

  // useHelper(pointLight, PointLightHelper, 0.5, "black");
  // useHelper(spotLight1, SpotLightHelper, 0.5, "0xb7ffba");

  return (
    <Suspense fallback={null}>
      {/* <Environment
        background={"only"}
        files={process.env.PUBLIC_URL + "/textures/bg.hdr"}
      /> */}

      <Lights />
      <Ground />
      <Euljiro />

      {/* <SceneParticles /> */}
      <Words />
      <Effects />
    </Suspense>
  );
}
