import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Bulb = (props) => {
  const ref = useRef();
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  }, []);
  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 10, 10]} />
      <meshPhongMaterial emissive={"purple"} />
    </mesh>
  );
};

export default Bulb;
