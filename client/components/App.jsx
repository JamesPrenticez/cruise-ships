import React, {useState, useEffect} from 'react'
import { getShips } from '../api/ships'

function App() {
  console.log("here")
  return (
    <div>
      <h1 className='text-7xl text-sky-500'>
        Cruise Ships of the World!
      </h1>
      <img className='h-64 w-128'
        src='images/default.webp'
      />
    </div>
  )
}

export default App