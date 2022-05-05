import React, {useState, useEffect} from 'react'
import { getShips } from '../api/ships'

function App() {
const [ships, setShips] = useState([])

useEffect(() => {
  getShips()
    .then((res) => {
      setShips(res)
    })
}, [])

  return (
    <div>
      <h1 className='text-7xl text-sky-500'>
        Cruise Ships of the World!
      </h1>

      {ships.map((ship) => (
        <div key={ship.id}>
          <h1>{ship.name}</h1>
        </div>
      ))}

      {/* <img className='h-64 w-128'
        src='images/default.webp'
      /> */}
    </div>
  )
}

export default App