import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, ContactShadows, Html } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface StageModelProps {
  stage: string;
  color: string;
  description: string;
  isActive: boolean;
}

const StageModel: React.FC<StageModelProps> = ({ stage, color, description, isActive }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Add a subtle float animation if active
      if (isActive) {
        meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
      }
    }
  });

  // Different shape based on the stage
  let geometry;
  switch (stage) {
    case 'Production':
      geometry = <boxGeometry args={[1.2, 1.2, 1.2]} />;
      break;
    case 'Usage':
      geometry = <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />;
      break;
    case 'Degradation':
      geometry = <octahedronGeometry args={[1, 0]} />;
      break;
    case 'Decomposition':
      geometry = <sphereGeometry args={[1, 32, 32]} />;
      break;
    default:
      geometry = <sphereGeometry args={[1, 32, 32]} />;
  }

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {geometry}
        <meshStandardMaterial 
          color={color} 
          metalness={0.1} 
          roughness={0.4}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      {isActive && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md w-48 text-center">
            <h4 className="font-bold text-sm text-gray-900">{stage}</h4>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

interface LifecycleStageProps {
  stage: {
    name: string;
    color: string;
    description: string;
  };
  isActive: boolean;
}

const LifecycleStage: React.FC<LifecycleStageProps> = ({ stage, isActive }) => {
  return (
    <div className={`canvas-container transition-all duration-300 ${isActive ? 'scale-105 shadow-xl' : 'opacity-80'}`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        className="drei-canvas"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <StageModel 
            stage={stage.name} 
            color={stage.color} 
            description={stage.description} 
            isActive={isActive} 
          />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={5} 
            blur={1.5} 
            far={1} 
          />
          <OrbitControls 
            enablePan={false} 
            enableZoom={true}
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LifecycleStage;