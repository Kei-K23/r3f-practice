import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export default function Experience() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
      />
      <Scene />
    </Canvas>
  );
}
