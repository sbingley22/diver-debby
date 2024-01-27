import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

function App() {
  const [menuSelection, setMenuSelection] = useState(1)

  return (
    <>
      { menuSelection == 0 && 
        <MainMenu setMenuSelection={setMenuSelection} />
      }
      { menuSelection == 1 && 
        <Game />
      }
    </>
  )
}

export default App
