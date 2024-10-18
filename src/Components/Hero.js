import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Models3D/HackerRoom.js";
import CanvasLoader from "../Models3D/CanvasLoader.js";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../Models3D/Target.js";
import ReactLogo from "../Models3D/ReactLogo.js";
import Cube from "../Models3D/Cube.js";
import Ring from "../Models3D/Ring.js";
import HeroCamera from "../Models3D/HeroCamera.js";
import Button from "../Models3D/Button.js";

export const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 400 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const size = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Akshay <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient text-wrap">
          A Developer and an Innovator
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 2, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={size.deskScale}
                position={size.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={size.targetPosition} />
              <ReactLogo position={size.reactLogoPosition} scale={1} />
              <Cube position={size.cubePosition} />
              <Ring position={size.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
                <Button name="Let's Work Together" isBeam containerClass = "sm:w-fit w-full sm:min-w-96" />
            </a>
        </div>

    </section>
  );
};
