import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { BufferAttribute } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ClockStreet } from "./ClockStreet";
import { IronStreet } from "./IronStreet";
import { PrintStreet } from "./PrintStreet";
import { Sewoon } from "./Sewoon";

export function Euljiro() {
  return (
    <>
      <ClockStreet />
      <IronStreet />
      <PrintStreet />
      <Sewoon />
    </>
  );
}
