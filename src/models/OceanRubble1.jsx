/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/dev/oceanRubble1.glb -s -T 
Files: public/dev/oceanRubble1.glb [845.59KB] > D:\Web_Projects\Games\diver-debby\oceanRubble1-transformed.glb [324.47KB] (62%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/oceanRubble1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.base_material} scale={2.257} />
    </group>
  )
}

useGLTF.preload('/oceanRubble1-transformed.glb')
