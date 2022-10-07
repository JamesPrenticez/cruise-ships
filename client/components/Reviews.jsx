import React from 'react'
import Spinner from './common/Spinner'

export default function Reviews({loadingReviews, reviewsData}) {
  return (
  <>
  { loadingReviews ? 
    <Spinner/> 
    :
    <ul className='space-y-3 divide-y'>
      {reviewsData.map((review, index) => (
        <li 
        key={index} //review.id needs to be review_id
        className="bg-white rounded-sm p-4">
          <div className='flex items-center space-x-4 pb-4'>
            <img className="h-8 w-8 rounded-full" src="/images/default.webp" alt="user profile picture" /> {/* review.img */}
            <p className="text-xl font-bold">{review.first_name} {review.last_name}</p>
          </div>
          <p>{review.review}</p>
          <p>{review.review}</p>
        </li>
      ))}
    </ul>
  }
  </>
  )
}