import './App.css'
import CharCard from './components/CharCard'
import Stats from './components/Stats'
import Gfs from './components/Gfs'

function App() {
  
  return (
    <div className='app'>
      <CharCard />

      <Stats />

      <div className='gfs-container'>
        <Gfs />
      </div>

    </div>
  )
}

export default App