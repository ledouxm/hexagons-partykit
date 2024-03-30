import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Character } from "./Character";
import { Floor } from "./map/Floor";

export const AppCanvas = () => {
    return (
        <Canvas style={{ width: "100%", height: "100%" }}>
            <pointLight position={[5, 5, 5]} />
            <directionalLight position={[5, 5, 5]} />
            <ambientLight intensity={1} />
            <OrbitControls />
            <axesHelper />
            <Suspense>
                <Physics debug>
                    <Floor spacing={0.05} />
                    <Character />
                </Physics>
            </Suspense>
        </Canvas>
    );
};
