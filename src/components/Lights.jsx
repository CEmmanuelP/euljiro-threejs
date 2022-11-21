import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useHelper } from "@react-three/drei";

const Lights = () => {
  const spotLight1Ref = useRef();
  const spotLight2Ref = useRef();
  const spotLight3Ref = useRef();
  // const spotLight2 = createSpotlight(0x00ff7f);
  // const spotLight3 = createSpotlight(0x7f00ff);

  useEffect(() => {
    if (!!spotLight1Ref.current) {
      console.log(spotLight1Ref.current);
      console.log(spotLight1Ref.current.position);
      // gsap.to(spotLight1Ref.current, {
      //   angle: Math.random() * 0.5 + 0.1,
      //   penumbra: Math.random() + 1,
      //   duration: 2,
      //   ease: "linear",
      // });

      gsap.fromTo(
        spotLight1Ref.current.position,
        {
          x: spotLight1Ref.current.position.x,
          y: spotLight1Ref.current.position.y,
          z: spotLight1Ref.current.position.z,
        },
        {
          x: -15,
          y: 15,
          z: -15,
          repeat: -1,
          duration: 5,
          yoyo: true,
          ease: "easeInOut",
        }
      );

      gsap.fromTo(
        spotLight2Ref.current.position,
        {
          x: spotLight2Ref.current.position.x,
          y: spotLight2Ref.current.position.y,
          z: spotLight2Ref.current.position.z,
        },
        {
          x: 10,
          y: 20,
          z: 15,
          repeat: -1,
          duration: 5,
          yoyo: true,
          ease: "easeInOut",
        }
      );
      // const tw = new TWEEN.Tween(spotLight1Ref.current)
      //   .to(
      //     {
      //       angle: Math.random() * 0.5 + 0.1,
      //       penumbra: Math.random() + 1,
      //     },
      //     Math.random() * 3000 + 2000
      //   )
      //   .easing(TWEEN.Easing.Quadratic.Out)
      //   .repeat(Infinity)
      //   .delay(1000);
      // tw.start();
    }
  }, [spotLight1Ref.current]);

  function gsapFunction(light) {
    gsap.fromTo(
      spotLight1Ref.current.position,
      {
        x: spotLight1Ref.current.position.x,
        y: spotLight1Ref.current.position.y,
        z: spotLight1Ref.current.position.z,
      },
      {
        x: Math.random() * 30 - 15,
        y: Math.random() * 10 + 15,
        z: Math.random() * 30 - 15,
        duration: 5,
        ease: "easeInOut",
      }
    );
  }

  return (
    <>
      <ambientLight color={0x111111} position={[0, 40, 0]} />
      <spotLight
        ref={spotLight1Ref}
        intensity={0.2}
        color={0xff7f00}
        position={[15, 40, 45]}
        distance={130}
        angle={0.5}
        penumbra={0.2}
        decay={2}
        castShadow
      />
      <spotLight
        ref={spotLight2Ref}
        color={0x00ff7f}
        position={[0, 40, 35]}
        distance={130}
        angle={0.5}
        penumbra={0.2}
        decay={2}
        castShadow
      />
      <spotLight
        ref={spotLight3Ref}
        color={0x7f00ff}
        position={[-15, 40, 45]}
        distance={130}
        angle={0.5}
        penumbra={0.2}
        decay={2}
        castShadow
      />
    </>
  );
};

export default Lights;
