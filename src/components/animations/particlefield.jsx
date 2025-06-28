import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

const Particles = () => {
    const meshRef = useRef();

    const count = 1500;
    const radius = 5;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            pos[i] = (Math.random() - 0.5) * radius * 10;
        }
        return pos;
    }, []);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0005;
            meshRef.current.rotation.x += 0.0002;
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ff4d6d"
                size={0.1}
                sizeAttenuation
                transparent
                opacity={0.5}
                depthWrite={false}
                blending={THREE.AdditiveBlending} // 🔥 Additive blending for glow
            />
        </points>
    );
};

export default function ParticleField() {
    return (
        <Canvas
            className="absolute top-10 left-0 w-full h-full z-0"
            camera={{ position: [0, 0, 10], fov: 75 }}
        >
            <ambientLight />
            <Particles />
        </Canvas>
    );
}

