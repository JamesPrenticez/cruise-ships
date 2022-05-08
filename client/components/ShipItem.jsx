import React from 'react'
import { Link } from 'react-router-dom'
export default function ShipItem({ship}) {

  return (
    <div>
      <div className='bg-gray-100 rounded-lg p-4 space-y-4'>
        <h1 className='text-xl font-bold'>{ship.name}</h1>

        <div className='flex items-center w-full h-[250px] object-cover overflow-hidden bg-blue-900'>
          <img className="w-full transition hover:scale-125 ease-in-out duration-1000 cursor-pointer" src="images/default.webp" alt="user profile picture" />
        </div>

        <p className='text-sm text-red-500'>
          <Link to={`/ship/${ship.id}`}>See more</Link>
        </p>

      </div>
    </div>
  )
}
