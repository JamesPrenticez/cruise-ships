// Here is the new Evolution Functional Component for picking up 
// either Evolution Part 1 or Evolution Part 2 pages.

// Now I have to work out how to get get the data from either evo1 or evo2 tables for it to be able to
// display the data on separate Evolution Part 1 or Evolution Part 2 pages using just an Evolution Parent component
// and children components off it.

// For these Evolution Part 1 or Part 2 pages the real part that is different from the 2 pages,
// is that the evo Intro Paragrahs for the 2 Evolution pages has different content, but the same Layout.

// The ship details on either Evolution Part 1 or Part 2, are taken from either evo1 or evo2 tables,
// so there needs to be a way to work out how to separate these. 
// Now I do not know if this can be done in this Evolution component or if I need to have a separate evointro component. 



// Here is my new Evolution Functional Component
// import React, {useState, useEffect} from 'react'
// import {getClassics} from '../api/classics'
// import Classicships from './ClassicShips'

// function Evolution ()   {

    // initialize classicShip as false to allow for no data.
    // const [classicShips, setClassicShips] = useState(false) 
    // const [loadingDiv, setLoadingDiv] = useState(null)

    // Getting data from tables
    // useEffect(() => {
    //     getClassics()
    //         .then(res => {
                // Reading data from both evo1 and then evo2 tables in this order
                // further down the we will pick up a classic ships for correct page. 
    //             setClassicShips: (res.evo1, evo2)
    //         })
    // })

    // Loading Div
    // useEffect(() => {
    //     setLoadingDiv(true)
    // })

    // return  (
    //     <>
    //     {
    //         loadingDiv || null ?
    //         <>
    //         <div>
    //             Loading...
    //         </div>
    //         </>
    //         :
    //         <>
    //         <div className = "header">
            {/* Use a tailwind Class for the h1 header  */}
            {/* <h1 className = "">Evolution of Cruise Ships</h1>
                <h1>Evolution of Cruise Ships</h1> 
            </div>

            <div className = "evoContainer">
                Map classicships to find a ship

                {classicShips.map (ship =>  { */}

                    // Console for testing if a ship (classic one) is being mapped for the correct one
                    // console.log(ship)

                    // Encoding, so that we can get rid of %20 in url 
                    // cont encodedClassicShipName= ship.classic_ship_name.replace(/\s/g, '_')
                            
                    // Returning a div for each classic ship based on id and in id order
                //         <div key = {ship.id} className = "evoShips">  

                //             <ClassicShips {...ship} />
                //         </div>
                // })}

                    {/* May need to have evoIntro in a separate component as the content is different for 
                    Evolution Part 1 and Evolution Part 2 pages.
                    The layout is the same though for both pages.  */}

                    {/* Introduction for Evolution Part 1 */}
                    {/* <div className = "evoIntro">
                        <h3>Early Beginnings</h3>
                        <p>The start of this <b>evolution (Part 1)</b> takes you from the beginning of when passenger liners as they called them back then began.
                           <br/>The Titanic stands out as a main passenger liner for long distance travel, when people in large numbers on a ship began.

                           <br/><br/>The ships, Oriana and Canberra began there careers as passenger liners, and then got converted to cruise ships for shorter travel in holiday places.
                           <br/>They were owned by P & O (Peninsular and Oriental Steam navigation Company), which is one of the most well known cruise companies of all time. 
                           Throughout their career the Oriana and Canberra's appearance and colour had not changed and you can call this type of ship a classic original.
                           <br/><br/>Next we have the largest ship so far (France) which was originally owned by the French Line.
                           France suffered from a problem in the 70's when ship travel was more expensive than air travel and was consequently laid up during the mid 70's. 
                           <br/>She made a comeback though, had a complete change in appearance and colour and operated as Norway under Norwegian Cruise Lines.
                           Norway continued as a great success through her career and will be remembered as a classic liner in a different way (lasting a long time).
                           <br/><br/>We can't start this adventure, if we don't have an Italian ship and Gallileo Galiliei is the first of our classic Italian Liners.
                           Galileo Galilei is the first ship here, that operated as a cruise ship throughout her entire career.
                           Unfortunately like Titanic she had a sad ending and sank. <br/>
                           Still she will be remembered though as a classic Italian cruise ship with good open deck space to enjoy holiday travel.  
                           <br/><br/>We will end the beginnings with a beautiful cruise ship, Pacific Princess (or as it was called "Love Boat") that made the cruise ship industry what it is today.
                           <br/>It made you believe that cruising on a ship it's size, will give you a great opportunity to meet the love of your life.   
                        </p>
                    </div> */}

                    {/* Introduction for Evolution Part 2 */}
                    {/* <div className = "evoIntro">
                        <h3>Last of the Classics</h3>
                        <p>The start of this <b>evolution (Part 2)</b> treats you to a real classic Fairstar, that was originally 
                        operated as a troopship and got converted completely to a cruise ship. <br/>I am fortunate enough to have been on this ship during the 90's, when I was a young lad.
                        <br/><br/>The Michelangelo was an Italian classic liner, which earns it classic because of it's capped laticed funnels. 
                        <br/><br/>QE2 or as it is more formally known Queen Elizabeth 2, named after the queen is one of the most well known cruise ships of all time.
                        Operated under Cunard it's entire career, she is now still around, but as a floating hotel in Dubai.
                        <br/><br/>Song of Norway goes down as the first of the classic liners ever to be lengthend to allow more passengers.
                        Song of Norway has had lots of differents name during it's career, is scrapped now, but will be rememembered as a great cruise ship. 
                        <br/><br/>Royal Viking Sky is another classic cruise ship that got lengthened, but it is still in operation today and can be seen on my Cruise Lines page for Fred Olsen cruises.
                        <br/><br/>Sovereign of the Seas is a 1980's cruise ship that was the largest afloat at the time it was built. It was originally owned by Royal Caribbean and had a major influence on the mega class cruise ships of today, due to its increase in size from previous ships and its styling. Sadly though it has stopped cruising in 2020 and was scrapped, due to being caught up in the covid situation. It will be remembered as a cruise ship that is responsible for Royal Caribbean Cruise Line success and the development of the modern cruise industry.
                        <br/><br/>Lastly Allure of the Seas is a different type of cruise ship from the other classic ones I have in the evolution pages.
                        Being the box shape it is, it is designed to carry more passengers and is a lot larger than the other ships.
                        It is also available for cruises on my Cruise Lines page for Royal Caribbean cruises. 
                        </p>    
                    </div>

            </div>
            </>
        }
        </>
    )
}

export default Evolution */}
// End of ClassicShips Functional Component




// Convert this EvoPart1 below to Functional Component above
// import React from 'react'
// import {getClassics} from '../api/api'
// import ClassicShips from './ClassicShips'


// class EvolutionPart1 extends React.Component    {
    
//     constructor(props)  {
//         super(props)

//         this.state = {      
            //initialize classicShip as false to allow for no data.
    //         classicShips: false        
    //     }

    //     this.setUpClassics = this.setUpClassics.bind(this)
    // }    

    // componentDidMount() {
    //     console.log('cdm')
    //     this.setUpClassics()
    // }

    // setUpClassics() {
    //     console.log('getClassics')
        //Line below gets the getClassics function from the api.
        // getClassics()
        //.then get a response from finding ships from database.
    //     .then(res =>    {

    //         this.setState({
    //             // Returns response from api
    //             classicShips: res.evo1
    //         })
    //     })
    // }
    
    // render()    { 
        //console for testing if data is coming through.
        // console.log(this.state.classicShips)
        // Line below allows for classicships being false and no data is appearing, so it says Loading...
        // if(!this.state.classicShips) return <div>Loading...</div>
        //Else display the following elements below on the page.
        // return  (

        //     <React.Fragment>

        //         <div className = "header">
        //             <h1>Evolution of Cruise Ships</h1> 
        //         </div>

        //         <div className = "evoContainer">
                    /* Map classicships in state to find a ship */
                    
                    /*{this.state.classicShips.map (ship =>  {    mapping Code */

                        // Console for testing if a ship (classic one) is being mapped for the correct one
                        // console.log(ship)   This is console code

                        // cont encodedClassicShipName= ship.classic_ship_name.replace(/\s/g, '_')  I don't think this worked

                        // return  ( this is return code
                            
                            // Returning a div for each classic ship based on id and in id order
                    //         Code Below
                    //         <div key = {ship.id} className = "evoShips">  

   
                    //             <ClassicShips {...ship} />
                    //         </div>
                    //     )
                    // }
                    // )}
                                    
                    /* <div className = "evoIntro"> This is code */
                        /* <h3 className = "Beginnings">History (Early Beginnings)</h3> */

                        /* Code Below
                        <h3>Early Beginnings</h3>
                        <p>The start of this <b>evolution (Part 1)</b> takes you from the beginning of when passenger liners as they called them back then began.
                           <br/>The Titanic stands out as a main passenger liner for long distance travel, when people in large numbers on a ship began.

                           <br/><br/>The ships, Oriana and Canberra began there careers as passenger liners, and then got converted to cruise ships for shorter travel in holiday places.
                           <br/>They were owned by P & O (Peninsular and Oriental Steam navigation Company), which is one of the most well known cruise companies of all time. 
                           Throughout their career the Oriana and Canberra's appearance and colour had not changed and you can call this type of ship a classic original.
                           <br/><br/>Next we have the largest ship so far (France) which was originally owned by the French Line.
                           France suffered from a problem in the 70's when ship travel was more expensive than air travel and was consequently laid up during the mid 70's. 
                           <br/>She made a comeback though, had a complete change in appearance and colour and operated as Norway under Norwegian Cruise Lines.
                           Norway continued as a great success through her career and will be remembered as a classic liner in a different way (lasting a long time).
                           <br/><br/>We can't start this adventure, if we don't have an Italian ship and Gallileo Galiliei is the first of our classic Italian Liners.
                           Galileo Galilei is the first ship here, that operated as a cruise ship throughout her entire career.
                           Unfortunately like Titanic she had a sad ending and sank. <br/>
                           Still she will be remembered though as a classic Italian cruise ship with good open deck space to enjoy holiday travel.  
                           <br/><br/>We will end the beginnings with a beautiful cruise ship, Pacific Princess (or as it was called "Love Boat") that made the cruise ship industry what it is today.
                           <br/>It made you believe that cruising on a ship it's size, will give you a great opportunity to meet the love of your life.   
                        </p>
                    </div>
                </div>
            </React.Fragment>     
        )
    }
}


export default EvolutionPart1 */