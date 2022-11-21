const Ground = () => {
  return (
    <mesh receiveShadow>
      <boxBufferGeometry args={[200, 0.1, 200]} />
      <meshPhongMaterial
      // emissive={"#000000"}
      // emissiveIntensity={0.1}
      // roughness={0.4}
      // metalness={0.8}
      />
    </mesh>
  );
};

export default Ground;
