/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/fish.glb -s -T 
Files: public/fish.glb [505.94KB] > D:\Web_Projects\Games\diver-debby\fish-transformed.glb [119.08KB] (76%)
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/fish-transformed.glb')

  const meshRef = useRef();
  const [isHovered, setHover] = useState(false);
  const rotateDir = useRef(1)

  useFrame(() => {
    // Rotate the model back and forth when hovered
    if (isHovered) {
      meshRef.current.rotation.y += 0.005 * rotateDir.current;

      if (meshRef.current.rotation.y > 0.2) rotateDir.current = -1
      else if (meshRef.current.rotation.y < -0.2) rotateDir.current = 1
    }
  });

  return (
    <group {...props} dispose={null}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.base_material} rotation={[Math.PI / 2, 0, 0]} scale={1.738} />
    </group>
  )
}

useGLTF.preload('/fish-transformed.glb')
