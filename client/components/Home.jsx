// Here is James original Functional Component setup
import React from 'react'

import Layout from './Layout'

export default function Home() {
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  )
}

// Here is my new Home Functional Component for the home page
// import React, {useState} from 'react'
// import Layout from './Layout'
// import slider from 'react-slick'
// import ReactPlayer from 'react-player'

// function home() {

//   const [images, setImages] = useState (
//     [ {images: "/images/temp/555-large-15de21c670ae7c3f6f3f1f37029303c9.jpg"},
//     {images: "/images/temp/2017-05-14-Ullapool-Cruise-Ship-Boudicca-8373_2000x.jpg"}, 
//     {images: "/images/temp/2668001.jpg"}, {images: "/images/article-2294399-18B4F28B000005DC-307_964x621.jpg"},
//     {images: "/images/temp/carnival-blimp-02.gif"}, {images: "/images/Ecstacy-Liner.jpg"},
//     {images: "/images/temp/GetImage.jpeg"}, {images: "/images/massadam.jpg"}, 
//     {images: "/images/temp/radiance--e1411774013140.jpg"}, {images: "/images/ship-in-Koper-Slovenia-_picmonkeyed.jpg"}])


//   const sliderSettings = {
//     dots: true, infinite: true, speed: 500, slidestoShow: 1, slidesToScroll: 1, autoplay: true,
//     autoplaySpeed: 3500, centerMode: true, adaptiveHeight: true, pauseOnHover: true
//   }
      

//   return  (
//     <>

//     <Layout/>

//     <Slider className = "home-slider" {...sliderSettings}>
//       {images.map((image, index) => (
//         <div className="slide" key={index}>
//           <img key = {image} src = {image}/>
//         </div>
//       ))}          
//     </Slider>

//     <div className = "siteIntro">
//       <h3 className = "Intro">Site Introduction</h3>
//       <p>I have a keen interest in ships and enjoy going cruising when I can.<br/><br/>
//       I have visited lots of cruise ship websites over my time, but haven't really found one, where everything is all together as one.<br/>
//       This site is different and has been put together with the intention of giving a brief history for those interested, as well as reviews for current cruise ships.
//       <br/><br/> 
//       If you want to learn about the evolution of cruise ships, of how they started off and have become the global force today in terms
//       of holiday travel, then you have come to the right place.
//       <br/> 
//       Mostly though this is a review site for a range of cruise lines and this can be very hard to find on a lot of other websites.<br/><br/>
//       You are welcome to review our class of luxury cruise ships we have on offer, from the cruiselines.<br/>  
//       If you are interested in going on holiday on a particular ship, this site directs you to a website where you can book.
//       <br/><br/>
//       Please note post covid that all our ships have very strict measures to make sure that all our passengers are safe and enjoy their journey.
//       <br/>
//       If you book a trip your health condition will be of utmost importance and you will be asked some question on your health state.
//       <br/> 
//       Everyone gets checked with a medical statement before they go on the ship as a swab will be taken from your local doctor before you travel.
//       <br/><br/> 
//       Information about what to do, will be listed when you book the cruise and there will be a contact if you have any questions.<br/>
//       Everyone has to be patient in this time and don't stress about the process, just think that it will be better in the long run.
//       <br/><br/>
//       Enjoy the journey, relive the memories and happy cruising.
//       </p>                                       
//     </div>

//     <div className = "player-wrapper"> 
//       <ReactPlayer 
//         url ="https://www.youtube.com/watch?v=O0ulkoTuE3Is" 
//         className="react-player"
//         height = "400px"
//         width = "440px"
//         playing="false"
//         controls="true"
//         muted="false"
//         />           
//     </div>      
//   </>
// )
// }

// export default home



// This was my original class component code below  
// import React from 'react'
// import Slider from "react-slick"
// import ReactPlayer from 'react-player'


// class Home extends React.Component  {
//     constructor(props)  {
//         super(props)    
//         this.state = {
//             images: [
//             "/images/555-large-15de21c670ae7c3f6f3f1f37029303c9.jpg",
//             "/images/2017-05-14-Ullapool-Cruise-Ship-Boudicca-8373_2000x.jpg",
//             "/images/2668001.jpg",
//             "/images/article-2294399-18B4F28B000005DC-307_964x621.jpg",
//             "/images/Carnival/carnival-blimp-02.gif",
//             "/images/Ecstacy-Liner.jpg",
//             "/images/GetImage.jpeg",
//             "/images/massadam.jpg",
//             "/images/radiance--e1411774013140.jpg",
//             "/images/ship-in-Koper-Slovenia-_picmonkeyed.jpg",      
//         ],
//         }                
//     }      

//     render()    {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidestoShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 3500,
//             centerMode: true,
//             adaptiveHeight: true,
//             pauseOnHover: true
//         }
    
//         return (
//             // <div>
//             <React.Fragment>    

//                 <Slider className = "home-slider" {...settings}>
//                     {
//                         this.state.images.map((image, index) => (
//                             <div className="slide" key={index}>
//                                 <img key = {image} src = {image}/>
//                             </div>
//                         ))
//                     }
                
//                 </Slider>
                
//                 <div className = "siteIntro">
//                     <h3 className = "Intro">Site Introduction</h3>
//                         <p>I have a keen interest in ships and enjoy going cruising when I can.<br/><br/>
//                            I have visited lots of cruise ship websites over my time, but haven't really found one, where everything is all together as one.<br/>
//                            This site is different and has been put together with the intention of giving a brief history for those interested, as well as reviews for current cruise ships.
//                            <br/><br/> 
//                            If you want to learn about the evolution of cruise ships, of how they started off and have become the global force today in terms
//                            of holiday travel, then you have come to the right place.
//                            <br/> 
//                            Mostly though this is a review site for a range of cruise lines and this can be very hard to find on a lot of other websites.<br/><br/>
//                            You are welcome to review our class of luxury cruise ships we have on offer, from the cruiselines.<br/>  
//                            If you are interested in going on holiday on a particular ship, this site directs you to a website where you can book.
//                             <br/><br/>
//                            Please note post covid that all our ships have very strict measures to make sure that all our passengers are safe and enjoy their journey.
//                            <br/>
//                            If you book a trip your health condition will be of utmost importance and you will be asked some question on your health state.
//                            <br/> 
//                            Everyone gets checked with a medical statement before they go on the ship as a swab will be taken from your local doctor before you travel.
//                            <br/><br/> 
//                            Information about what to do, will be listed when you book the cruise and there will be a contact if you have any questions.<br/>
//                            Everyone has to be patient in this time and don't stress about the process, just think that it will be better in the long run.
//                            <br/><br/>
//                            Enjoy the journey, relive the memories and happy cruising.

//                         </p>
//                 </div>

//                 <div className = "player-wrapper"> 
//                     <ReactPlayer 
//                         url ="https://www.youtube.com/watch?v=O0ulkoTuE3Is" 
//                         className="react-player"
//                         height = "400px"
//                         width = "440px"
//                         playing="false"
//                         controls="true"
//                         muted="false"
//                         />
//                 </div>

                
//             </React.Fragment>              
//         )
//     }
// }

// export default Home