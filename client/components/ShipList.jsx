import React, {useState, useEffect} from 'react'
import Ship from './Ship'
import { getShips } from '../api/ships'

export default function ShipList() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    getShips()
      .then((res) => {
        setShips(res)
    })
  }, [])

  return (
    <div  className='grid grid-cols-3 gap-3'>
      {ships.map((ship) => (
        <div key={ship.id}>
          <Ship ship={ship}/>
        </div>
      ))}
    </div>
  )
}
