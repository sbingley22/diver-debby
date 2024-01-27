import { Box, Environment } from "@react-three/drei"

const Level = () => {
  
  return (
    <>
      <Environment 
        files="/UNDERWATER-HDRI.hdr"
        background={true}
      />
      {/* <Environment preset="forest" background/> */}
      <ambientLight intensity={0.1} />

      <Box>
        <meshStandardMaterial attach="material" color="red" />
      </Box>
    </>
  )
}

export default Level