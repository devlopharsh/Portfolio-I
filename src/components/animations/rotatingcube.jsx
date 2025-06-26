import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function WireCube({ size = 1, rotationDirection = 1 }) {
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.x += 0.01 * rotationDirection;
        ref.current.rotation.y += 0.01 * rotationDirection;
    });

    return (
        <lineSegments ref={ref}>
            <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
            <lineBasicMaterial color="#ff4d6d" />
        </lineSegments>
    );
}

export default function DoubleWireframeCube() {
    return (
        <div className="w-full h-screen relative top-0 left-0">
            <Canvas  shadows={false} camera={{ position: [3, 3, 3], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />

                <WireCube size={1} rotationDirection={1} />
                <WireCube size={3} rotationDirection={-1} />

                <EffectComposer>
                    <Bloom
                        intensity={1.2}
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            </Canvas>
            <img src="./projector.png" alt="" height={100} width={50} className="h-[57%] w-1/4 relative bottom-[48%] left-[38%] z-0" />
        </div>
    );
}
