import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import { Mesh, SpotLight } from "three";

export function Scene() {
  const cube = useRef<Mesh>(null);
  const sphere = useRef<Mesh>(null);
  const spotLight = useRef<SpotLight>(null);

  // Add spotlight helper
  useHelper(spotLight, THREE.SpotLightHelper, "red");

  useFrame((state, delta) => {
    if (cube.current) {
      cube.current.rotation.x += delta;
      cube.current.rotation.y += delta * 0.5;
    }
    if (sphere.current) {
      sphere.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight
        ref={spotLight}
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Ground */}
      <mesh rotation-x={-Math.PI * 0.5} position-y={-3} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#303030" />
      </mesh>

      {/* Rotating cube */}
      <mesh ref={cube} position={[-2, 0, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>

      {/* Floating sphere */}
      <mesh ref={sphere} position={[2, 0, 0]} castShadow>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#4ecdc4" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Torus */}
      <mesh position={[0, 0, -2]} rotation-x={Math.PI * 0.25} castShadow>
        <torusGeometry args={[0.7, 0.2, 16, 32]} />
        <meshStandardMaterial color="#95e1d3" />
      </mesh>
    </>
  );
}
