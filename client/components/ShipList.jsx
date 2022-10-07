import React, {useState, useEffect} from 'react'
import { getShips } from '../api/ships'
import Layout from './Layout'
import ShipItem from './ShipItem'

export default function ShipList() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    getShips()
      .then((res) => {
        setShips(res)
    })
  }, [])

  return (
  <Layout>
    <div className='grid grid-cols-3 gap-3'>
      {ships.map((ship) => (
        <div key={ship.id}>
          <ShipItem ship={ship}/>
        </div>
      ))}
    </div>
  </Layout>
  )
}