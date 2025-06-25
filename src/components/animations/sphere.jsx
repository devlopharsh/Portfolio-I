import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingSphere() {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.x += 0.001;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2, 16 , 16 ]} />
            <meshBasicMaterial wireframe color="#ff4d6d" />
        </mesh>
    );
}

const D3Sphere = () => {
    return (
        <Canvas
            className="absolute top-0 left-0 z-0"
            camera={{ position: [0, 0, 10], fov: 50 }}
        >
            <ambientLight intensity={0.} />
            <RotatingSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        </Canvas>
    )
}

export default D3Sphere
