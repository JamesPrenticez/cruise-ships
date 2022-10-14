import React from 'react'
import { Link } from 'react-router-dom'

export default function ShipItem({ship}) {

  return (
    <div>
      <div className='bg-gray-100 rounded-lg p-4 space-y-4'>
        <h1 className='text-xl font-bold'>{ship.ship_name}</h1>

        <div className='flex items-center w-full h-[250px] object-cover overflow-hidden bg-blue-900'>

          {/* Image Source I will change from default.webp to each ship image as a prop {img}
          The alt="user profile picture" needs to be different 
          <img className="w-full transition hover:scale-125 ease-in-out duration-1000 cursor-pointer" src="images/default.webp" 
          alt="user profile picture" />
          The change for now, I will use src = {img} and alt = {ship_name} */}
          <img className="w-full transition hover:scale-125 ease-in-out duration-1000 cursor-pointer" src={img} alt={ship_name} />

        </div>

        <p className='text-sm text-red-500'>
          <Link to={`/ship/${ship.id}`}>See more</Link>
        </p>

      </div>
    </div>
  )
}