import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Bounds
} from '@react-three/drei';

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  path: string;
}

const Model: React.FC<ModelProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  path,
}) => {
  const { scene } = useGLTF(path);
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

interface BasicSceneProps {
  modelPath: string;
}

const BasicScene: React.FC<BasicSceneProps> = ({ modelPath }) => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ fov: 50 }}
        dpr={[1, 2]}
        className="drei-canvas"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />

          {/* Automatically fit model in view */}
          <Bounds fit clip observe margin={1.2}>
            <Model path={modelPath} />
          </Bounds>

          <Environment preset="city" />

          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.4}
            scale={10}
            blur={1.5}
            far={1}
          />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicScene;
