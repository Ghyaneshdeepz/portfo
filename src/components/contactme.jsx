import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function SpaceBoiModel({ targetRotateY }) {
  const group = useRef();
  const currentRotateY = useRef(Math.PI * 0.1);
  const gltf = useGLTF('/models/space_boi.glb');

  useFrame(() => {
    if (group.current) {
      const baseRotationX = 0.2;
      const baseRotationZ = -0.05;

      // Idle slow rotation
      const idleSpeed = 0.005;
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
  const targetRotateYRef = useRef(Math.PI * 0.1);
  const [targetRotateY, setTargetRotateY] = useState(Math.PI * 0.1);
  const [startScrollY, setStartScrollY] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();

          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const modelHeight = rect.height;
          const visibleRatio = visibleHeight / modelHeight;

          if (visibleRatio >= 0.05) {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;
            const scrollingUp = currentScrollY < lastScrollY;

            if (scrollingDown) {
              if (startScrollY === null) {
                setStartScrollY(currentScrollY);
              }
            } else if (scrollingUp) {
              // Reset startScrollY on upward scroll to smoothly reset rotation
              setStartScrollY(currentScrollY);
            }

            const scrollDelta = currentScrollY - (startScrollY || currentScrollY);
            const newTarget = Math.PI * 0.1 + scrollDelta * 0.001;

            // Update only if change is meaningful to reduce renders
            if (Math.abs(targetRotateYRef.current - newTarget) > 0.001) {
              targetRotateYRef.current = newTarget;
              setTargetRotateY(newTarget);
            }

            lastScrollY = currentScrollY;
          } else {
            setStartScrollY(null);
            targetRotateYRef.current = Math.PI * 0.1;
            setTargetRotateY(Math.PI * 0.1);
            lastScrollY = window.scrollY;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startScrollY]);

  return (
    <div ref={containerRef} className="h-screen w-full">
      <Canvas camera={{ position: [5, 3, 19], fov: 50 }}>
        <fog attach="fog" args={['#000000', 10, 25]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 9, 5]} intensity={1} />

        <SpaceBoiModel targetRotateY={targetRotateY} />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
