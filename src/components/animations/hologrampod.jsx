// components/HologramProjects.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, Stars, Environment, useTexture } from '@react-three/drei'

const HologramPod = ({ textureUrl, title, position = [0, 0, 0] }) => {
  const podRef = useRef()
  const texture = useTexture(textureUrl)

  useFrame(() => {
    podRef.current.rotation.y += 0.003
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={podRef} position={position}>
        {/* Glowing Base */}
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
          <meshStandardMaterial color="#0ff" emissive="#0ff" emissiveIntensity={1.5} />
        </mesh>

        {/* Hologram Display */}
        <mesh position={[0, 1.5, 0]}>
          <planeGeometry args={[2, 1.2]} />
          <meshBasicMaterial map={texture} transparent opacity={0.9} />
        </mesh>

        {/* Light Beam */}
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.1, 0.8, 1.5, 32, 1, true]} />
          <meshBasicMaterial color="#00ffff" opacity={0.25} transparent wireframe />
        </mesh>

        {/* Title Text */}
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.2}
          color="#0ff"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </group>
    </Float>
  )
}

const HologramProjects = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />

        {/* Background Stars */}
        <Stars radius={100} depth={50} count={4000} factor={4} fade />
        <Environment preset="sunset" />

        {/* Pods */}
        <HologramPod
          textureUrl="/project1.png"
          title="React Demo"
          position={[-3.5, 0, 0]}
        />
        <HologramPod
          textureUrl="/project2.png"
          title="Educase"
          position={[0, 0, 0]}
        />
        <HologramPod
          textureUrl="/project3.png"
          title="Tenant Portal"
          position={[3.5, 0, 0]}
        />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default HologramProjects
