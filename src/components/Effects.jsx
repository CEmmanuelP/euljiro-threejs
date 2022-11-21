import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  ChromaticAberration,
  BrightnessContrast,
  Bloom,
  HueSaturation,
  DepthOfField,
  GodRays,
} from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { useEffect, useState } from "react";

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.79} luminanceSmoothing={0.7} height={100} />
    </EffectComposer>
  );
};

export default Effects;
