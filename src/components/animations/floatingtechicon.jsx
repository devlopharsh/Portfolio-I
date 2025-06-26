import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const icons = [
  { src: '/textures/icons/html.svg', position: [-2, 1, 0] },
  { src: '/textures/icons/css.svg', position: [2, 1, 0] },
  { src: '/textures/icons/js.svg', position: [-2, -1, 0] },
  { src: '/textures/icons/react.svg', position: [2, -1, 0] },
  { src: '/textures/icons/next.svg', position: [0, 2, 0] },
  { src: '/textures/icons/tailwind.svg', position: [0, -2, 0] },
];

function FloatingIcon({ texture, position }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function FloatingTechIcons() {
  return (
    <div className="w-full h-screen ">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {icons.map((icon, idx) => {
          const texture = useLoader(TextureLoader, icon.src);
          return (
            <FloatingIcon key={idx} texture={texture} position={icon.position} />
          );
        })}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
