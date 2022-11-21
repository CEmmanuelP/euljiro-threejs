import { Float, Text3D } from "@react-three/drei";

export function Words() {
  return (
    <>
      <Float
        position={[10, 1.8, -11.5]}
        rotation={[-0.5, -6.8, -0.05]}
        rotationIntensity={0.35}
        floatIntensity={0.5}
      >
        <Text3D
          font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
          size={0.525}
          height={0.065}
          curveSegments={12}
        >
          meta
          <meshStandardMaterial
            color={[0.3, 0.8, 0.7]}
            emissive={[0.8, 0.1, 0.5]}
          />
        </Text3D>
      </Float>

      <Float
        position={[10.5, 1, -10.5]}
        rotation={[-0.5, -6.8, -0.05]}
        // rotationIntensity={0.35}
        floatIntensity={0.5}
      >
        <Text3D
          font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
          size={0.795}
          height={0.065}
          curveSegments={12}
        >
          EULJIRO
          <meshStandardMaterial
            color={[0.3, 0.8, 0.7]}
            emissive={[1, 0.2, 0.2]}
          />
        </Text3D>
      </Float>
    </>
  );
}
