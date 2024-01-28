import { Box, Environment } from "@react-three/drei"
import InvisiblePlane from './InvisiblePlane'
import * as Fish from "../models/Fish"
import * as Rubble1 from "../models/OceanRubble1"
import * as Rubble2 from "../models/OceanRubble2"
import * as SeaMine from "../models/SeaMine"
import * as Shark from "../models/Shark"
import { useRef, useState } from "react"
import { Debby } from "../models/DiverDebby"

const Level = () => {
  const rotFish = useRef(0)
  const rotateFish = () => {
    rotFish.current += 0.1
    console.log(rotFish.current)
  }
  
  return (
    <>
      <Environment 
        files="/UNDERWATER-HDRI.hdr"
        background={true}
      />
      <ambientLight intensity={0.1} />
      <spotLight position={[5, 12, -5]} angle={0.3} penumbra={1} castShadow />
      <InvisiblePlane />

      <Debby />

      <Fish.Model position={[2,0,0]} rotation={[0, 0, 0]} />
      <Fish.Model position={[2.5,-1,0]} rotation={[0, Math.PI * 0.03, 0]} />
      <Fish.Model position={[1.5,-0.25,0]} rotation={[0, Math.PI * 0.01, 0]} />

      <Rubble1.Model position={[-1,-2,-1]} />
      <Rubble1.Model position={[-1.9,-2,2]} scale={1.5} rotation={[0,Math.PI * 0.25, 0]} />
      <Rubble1.Model position={[1,-2,4]} scale={1.25} rotation={[0,Math.PI * 1, 0]} />
      <Rubble2.Model position={[1,-2,0]} />
      <Rubble2.Model position={[5,-2,9]} scale={2.15} rotation={[0,Math.PI * 0.45, 0]} />

      <SeaMine.Model position={[-2, -1, 0]} />
      <SeaMine.Model position={[-2.5, -0.5, 1]} />
      <SeaMine.Model position={[-2.25, -0.125, -1]} />

      <Shark.Model position={[-4, 1.5, 6]} scale={5} rotation={[0,Math.PI * 0.35, 0]} />
    </>
  )
}

export default Level