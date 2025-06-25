// components/animations/HexGridBackground.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const HexCell = ({ position }) => {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    meshRef.current.material.opacity =
      0.3 + Math.sin(clock.elapsedTime + position[0] + position[1]) * 0.2
  })

  return (
    <mesh position={position} ref={meshRef}>
      <circleGeometry args={[0.85, 6]} />
      <meshBasicMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

const HexGrid = () => {
  const cells = []
  const radius = 1.5
  const rows = 20
  const cols = 20

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * radius * 1.75
      const y = row * radius * Math.sqrt(3)
      const offset = (row % 2) * radius * 0.87
      cells.push([x - 15 + offset, y - 15, -10])
    }
  }

  return (
    <>
      {cells.map((pos, i) => (
        <HexCell key={i} position={pos} />
      ))}
    </>
  )
}

const HexGridBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <HexGrid />
      </Canvas>
    </div>
  )
}

export default HexGridBackground
