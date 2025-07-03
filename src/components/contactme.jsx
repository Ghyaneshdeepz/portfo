import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import qr from "../assets/qrc.png"
function SpaceBoiModel({ targetRotateY }) {
  const group = useRef();
  const currentRotateY = useRef(Math.PI * -0.07); 
  const gltf = useGLTF('/models/space_boi.glb');

  useFrame(() => {
    if (group.current) {
      const baseRotationX = 0.2;
      const baseRotationZ = -0.07;

      // Idle slow rotation
      const idleSpeed = 0.006;
      currentRotateY.current += idleSpeed;

      // Smoothly interpolate towards target rotation
      currentRotateY.current += (targetRotateY - currentRotateY.current) * 0.1;

      group.current.rotation.x = baseRotationX;
      group.current.rotation.y = currentRotateY.current;
      group.current.rotation.z = baseRotationZ;
    }
  });

  return (
    <group ref={group} position={[0, 1, 0]} scale={[1.5, 1.5, 1.5]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function ContactMe() {
  const containerRef = useRef();

  // ✅ Use same initial value as in the model
  const INITIAL_ROTATE_Y = Math.PI * -0.07;

  const targetRotateYRef = useRef(INITIAL_ROTATE_Y);
  const [targetRotateY, setTargetRotateY] = useState(INITIAL_ROTATE_Y);
  const [startScrollY, setStartScrollY] = useState(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();

          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const modelHeight = rect.height;
          const visibleRatio = visibleHeight / modelHeight;

          if (visibleRatio >= 0.07) {
            const currentScrollY = window.scrollY;

            // Initialize scroll start point
            if (startScrollY === null) {
              setStartScrollY(currentScrollY);
            }

            const scrollDelta = currentScrollY - (startScrollY || currentScrollY);

            // ✅ Start scroll from same initial Y rotation
            const newTarget = INITIAL_ROTATE_Y + scrollDelta * 0.001;

            if (Math.abs(targetRotateYRef.current - newTarget) > 0.001) {
              targetRotateYRef.current = newTarget;
              setTargetRotateY(newTarget);
            }
          } else {
            // Reset when out of view
            setStartScrollY(null);
            targetRotateYRef.current = INITIAL_ROTATE_Y;
            setTargetRotateY(INITIAL_ROTATE_Y);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startScrollY]);

  return (
    <div className="relative h-screen w-full">
     
      <div className="absolute top-0 left-0 z-10  flex justify-start items-center pl-20 w-full h-screen">
        <div className="w-[28rem] h-auto">
          
          <img src={qr} className='mt-5 h-auto w-35 rounded-2xl'/>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <div ref={containerRef} className="h-screen w-full">
        <Canvas camera={{ position: [5, 3, 19], fov: 50 }}>
          <fog attach="fog" args={['#000000', 10, 25]} />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 9, 5]} intensity={1} />

          <SpaceBoiModel targetRotateY={targetRotateY} />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
