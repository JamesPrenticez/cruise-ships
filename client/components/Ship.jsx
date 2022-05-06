import React, {useState, useEffect} from 'react'
import { getReviews } from '../api/reviews'
import Reviews from './Reviews'

export default function Ship({ship}) {
  const [loading, setLoading] = useState(null)
  const [showReviews, setShowReviews] = useState(false)
  const [reviewsData, setReviewsData] = useState([])

  useEffect(() => {
    if(reviewsData .length > 0) return
    if(showReviews){
      setLoading(true)
      getReviews(ship.id)
        .then((res) => {
          setReviewsData(res)
      })
      setLoading(false)
    }
    }, [showReviews])

  return (
    <div>
      <div className='bg-gray-100 rounded-lg p-4 space-y-4'>
        <h1 className='text-xl font-bold'>{ship.name}</h1>

        <div className='flex items-center w-full h-[250px] object-cover overflow-hidden'>
          <img className="w-full transition hover:scale-125 ease-in-out cursor-pointer" src="images/default.webp" alt="user profile picture" />
        </div>


        <button 
          className='bg-green-500 text-white rounded-md w-24 h-12'
          onClick={() => setShowReviews(!showReviews)}
        >
          Reviews
        </button>

        {showReviews && <Reviews reviewsData={reviewsData} loading={loading}/>}

      </div>
    
    </div>
  )
}
