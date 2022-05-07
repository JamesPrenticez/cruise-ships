import React, {useState} from 'react'

import { glossary } from '../../data/glossary'

export default function Counter() {
  const [counter, setCounter] = useState(5000)

  console.log(glossary)

  return (
    <>
      {/* <button
        className='bg-green-500 p-4 rounded-md text-fuchsia-500 text-bold'
        onClick={() => setCounter(counter + 100)}
        >
        {counter}
      </button> */}
    
    <div className=''>
      {glossary.map((item) => (
        <div className='w-full bg-red-500'>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      ))}


      </div>
    </>
  )
}