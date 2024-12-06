import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ mouse }) => {
  const sphereRef = useRef<THREE.Mesh>(null);

  // Set the rotation and distort based on the mouse position
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Adjust rotation based on mouse position
      sphereRef.current.rotation.x =
        clock.getElapsedTime() * 0.2 + mouse.y * 0.1;
      sphereRef.current.rotation.y =
        clock.getElapsedTime() * 0.3 + mouse.x * 0.1;

      // Adjust distortion based on mouse position
      const dist = (mouse.x + mouse.y) / 2; // average of x and y position
      sphereRef.current.material.distort = 0.3 + dist * 0.5; // distortion effect
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
};

const AnimatedBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Update mouse position on mousemove
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1, // Normalized x
        y: -(event.clientY / window.innerHeight) * 2 + 1, // Normalized y
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <AnimatedSphere mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
