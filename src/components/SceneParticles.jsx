import { Sparkles } from "@react-three/drei";

export function SceneParticles() {
  return (
    <>
      <object3D position={[4, -1, 4]}>
        <Sparkles
          count={50}
          scale={[5, 3.5, 2.5]}
          color={"#7743DB"}
          size={6}
          speed={0.2}
          noise={0.1}
        />
      </object3D>

      <object3D position={[0, -3, 0]}>
        <Sparkles
          count={50}
          scale={[12, 2, 12]}
          color={"#7743DB"}
          size={10}
          speed={0.2}
          noise={0.2}
        />
      </object3D>

      <object3D position={[-15, -3, -5]}>
        <Sparkles
          count={50}
          scale={[4, 4, 4]}
          color={"#7743DB"}
          size={6}
          speed={0.2}
          noise={0.2}
        />
      </object3D>

      <object3D position={[5.5, -3, -8]}>
        <Sparkles
          count={50}
          scale={[5, 5, 5]}
          color={"#7743DB"}
          size={6}
          speed={0.2}
          noise={0.2}
        />
      </object3D>
    </>
  );
}
