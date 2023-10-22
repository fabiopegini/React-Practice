import { useState } from 'react'
import './App.css'
import CharCard from './components/CharCard'
import Stats from './components/Stats'
import Gfs from './components/Gfs'

function App() {
  const [buttonClicked, setButtonClicked] = useState({name: 'firstRender', active: false})
  
  return (
    <div className='app'>
      <CharCard />

      <Stats buttonClicked={buttonClicked} />

      <div className='gfs-container'>
        <Gfs appCallback={(button) => setButtonClicked(button)} />
      </div>

    </div>
  )
}

export default App