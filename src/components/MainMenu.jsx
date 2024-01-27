

const MainMenu = ( { setMenuSelection={setMenuSelection} }) => {
  const startClicked = () => {
    setMenuSelection(1)
  }

  return (
    <div className="main-menu">
      <button onClick={startClicked}>Start</button>
    </div>
  )
}

export default MainMenu