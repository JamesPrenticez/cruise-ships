import React from 'react'
import { Link } from "react-router-dom";

function Layout({children}) {
  return (
  <div className='flex justify-center'>
    <div className='w-full max-w-7xl'>
    <header>
      <nav className='border-b-2'>
        {/* Left */}
        <h1 className="text-sky-500 hover:text-sky-600 text-4xl font-bold w-full text-center">
          <Link to="/">
            Cruise Shipping 
          </Link>
        </h1>

        {/* Right */}
        <div className='font-bold text-xl flex justify-center items-center space-x-8 w-full bg-sky-600 text-white p-2'>
          <p className='border-b-4 border-transparent hover:border-yellow-400'>
            <Link to="/">Home</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-yellow-400'>
            <Link to="/shipsList">Evolution Part 1</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-yellow-400'>
            <Link to="/shipsList">Evolution Part 2</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-yellow-400'>
            <Link to="/shipsList">Cruise Lines</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-yellow-400'>
            <Link to="/glossary">Ship Terms</Link>
          </p>
        </div>
      </nav>

    </header>

    <main className='pt-4'>
      {children}
    </main>
    
    <footer></footer>

    </div>
  </div>
  )
}

export default Layout