import React from 'react'
import ShipList from './ShipList'

export default function App() {
  return (
    <div className="">
    <header className="flex">
      <h1 className="text-sky-500 text-4xl">
        Cruise Ships of the World! 
      </h1>
      <nav>
        <ul className="flex">
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </nav>
    </header>

    <main className="">
      <ShipList />
    </main>
  </div>
  )
}