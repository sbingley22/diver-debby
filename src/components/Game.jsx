import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { KeyboardControls, Stats } from '@react-three/drei'
import Level from './Level'


const Game = () => {
  
  return (
    <div className='game'>
    <KeyboardControls
        map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "typeMode", keys: ["Space"] },
        { name: "interact", keys: ["f", "F"] },
        { name: "inventory", keys: ["`"] },
        ]}
      >
        <Canvas
          shadows
          camera={{ fov: 50, position: [0, 0, -5] }}
        >
          <Suspense>
            <Level />

            <Stats />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default Game