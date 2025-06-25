// components/animations/TechBackground.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

const Grid = () => {
  const mesh = useRef()

  useFrame(({ clock }) => {
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        attach="material"
        args={[{
          uniforms: {
            uTime: { value: 0 },
          },
          vertexShader: `
            uniform float uTime;
            varying float vWave;

            void main() {
              vec3 pos = position;
              float freq = 0.3;
              float amp = 0.4;
              pos.z = sin(pos.x * freq + uTime) * amp;
              pos.z += cos(pos.y * freq + uTime) * amp;

              vWave = pos.z;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            varying float vWave;

            void main() {
              float intensity = 1.0 - abs(vWave);
              vec3 color = mix(vec3(0.0, 1.0, 1.0), vec3(0.0, 0.0, 0.5), intensity);
              gl_FragColor = vec4(color, 0.6);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
        }]}
      />
    </mesh>
  )
}

const TechBackground = () => {
  return (
    <div className="relative top-0 left-0 w-full h-full z-[-1]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 5, 15]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <Grid />
      </Canvas>
    </div>
  )
}

export default TechBackground
