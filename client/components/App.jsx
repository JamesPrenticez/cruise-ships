import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ShipTerms from './ShipTerms'

function App()  {
  return  (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/shipterms' component={ShipTerms} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



// This is James Prentice initial App Component setup below,  that was only used for ship reviews

// import React, {useState, useEffect} from 'react'
// import { getShips } from '../api/ships'
// import { getReviews } from '../api/reviews'

// function App() {
//   const [ships, setShips] = useState([])
//   const [reviews, setReviews] = useState([])

//   useEffect(() => {
//     getShips()
//       .then((res) => {
//         setShips(res)
//       })
//   }, [])

//   const handleClickReviews = (id) => {
//     getReviews(id)
//     .then((res) => {
//       setReviews(res)
//     })
//   }

//   console.log(reviews)

//   return (
//     <div>
//       <h1 className='text-7xl text-sky-500'>
//         Cruise Ships of the World!
//       </h1>

//       {ships.map((ship) => (
//         <div key={ship.id}>
//           <h1>{ship.name}</h1>
//           <button 
//             className='h-12 w-24 bg-green-500'
//             onClick={() => handleClickReviews(ship.id)}
//           >
//             Reviews
//           </button>

//           {reviews.length > 0 && 
//             reviews.map((review) => (
//               <p>{review.content}</p>
//             ))
//           }
//         </div>
//       ))}

      // James Prentice commented this, as it was experimenting
      /* <img className='h-64 w-128'
        src='images/default.webp'
      /> */
//     </div>
//   )
// }

// export default App