import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import { getShipById } from '../api/ships'
import { getReviews } from '../api/reviews'

import Layout from './Layout';
import Reviews from './Reviews'
import Spinner from './common/Spinner';

export default function Ship() {
  const params = useParams()
  const [loadingShip, setLoadingShip] = useState(null)
  const [shipData, setShipData] = useState(null)
  const [loadingReviews, setLoadingReviews] = useState(null)
  const [toggleReviews, setToggleReviews] = useState(false)
  const [reviewsData, setReviewsData] = useState([])

  const id = params.id
  // console.log(id)
  // console.log(shipData)

  //Get Ship
  useEffect(() => {
    setLoadingShip(true)
    getShipById(id)
      .then((res) => {
        setShipData(res)
    })
    setTimeout(() => { //intentional delay so we can see the spinner
      setLoadingShip(false)
    }, 1000);
  }, [])

  //Get Reviews
  useEffect(() => {
    if(reviewsData .length > 0) return //blocking 
    if(toggleReviews){
      setLoadingReviews(true)
      getReviews(id)
        .then((res) => {
          setReviewsData(res)
      })
      setTimeout(() => { //intentional delay so we can see the spinner
        setLoadingReviews(false)
      }, 1000);
    }
  }, [toggleReviews])

  return (
    <>
    {
      loadingShip || null ? 
      <>
        <div className='h-screen flex items-center justify-center'>
          <Spinner/>
        </div>
      </>
      :
      <>
        <Layout>
          <h1 className='font-bold text-3xl'>{shipData?.name}</h1>
          <div className='flex items-center w-full h-[250px] object-cover overflow-hidden bg-blue-900'>
            <img className="w-full transition hover:scale-125 ease-in-out duration-1000 cursor-pointer" src="/images/default.webp" alt="user profile picture" />
          </div>

          <button 
           className='bg-green-500 text-white rounded-md w-24 h-12 mt-4'
           onClick={() => setToggleReviews(!toggleReviews)}
          >
            Show Reviews
          </button>

         {toggleReviews && <Reviews reviewsData={reviewsData} loadingReviews={loadingReviews}/>}

        </Layout>
      </>
    }
    </>
  )
}