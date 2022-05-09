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
            Cruise Ships of the World! 
          </Link>
        </h1>

        {/* Right */}
        <div className='font-bold text-xl flex justify-center items-center space-x-8 w-full bg-sky-600 text-white p-2'>
          <p className='border-b-4 border-transparent hover:border-white'>
            <Link to="/">Home</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-white'>
            <Link to="/shipsList">Ships List</Link>
          </p>
          <p className='border-b-4 border-transparent hover:border-white'>
            <Link to="/glossary">Glossary</Link>
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