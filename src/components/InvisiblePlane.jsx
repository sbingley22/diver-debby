
const InvisiblePlane = () => {
  
  return (
    <mesh
      receiveShadow // Enable receiving shadows
      rotation={[-Math.PI / 2, 0, 0]} // Rotate the plane to be horizontal
      position={[0, -2.3, 0]} // Adjust the position as needed
    >
      <planeGeometry attach="geometry" args={[10, 10]} />
      <shadowMaterial attach="material" opacity={0.3} transparent />
    </mesh>
  );
};

export default InvisiblePlane