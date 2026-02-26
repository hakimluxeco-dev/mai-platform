import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3DModel(props: any) {
    const group = useRef<THREE.Group>(null!);

    const gltf = useGLTF("/models/hero_model.gltf") as any;
    const scene = gltf?.scene;
    const animations = gltf?.animations || [];

    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        if (names && names.length > 0) {
            names.forEach((name) => {
                actions[name]?.play();
            });
        }
    }, [actions, names]);

    return (
        <group ref={group} {...props} dispose={null}>
            {scene && <primitive object={scene} />}
        </group>
    );
}

useGLTF.preload("/models/hero_model.gltf");
