import React, { useEffect, useState} from 'react'
import {getCruiseLines } from '../api/api'
import ShipsList from './ShipsList'

function CruiseListHeader() {

    // Declare cruiseHeaders variable and set it's array using useState 
    const [cruiseHeaders, setCruiseHeaders] = useState([]);    
    
    // Note: This was the original ComponentDidMount that took Binding this.setUpCruiseLines()
    // Now it is coming from CruiseListHeader.jsx useEffect to the DOM    

    useEffect (() => {
        getCruiseLines()
          .then(res => {
            // Comment this below as this may not be the correct way with hooks
            // setCruiseHeaders({
            //   cruiseHeaders: res
            // })
            // Use this below as I believe this is the correct way to do it with Hooks
            setCruiseHeaders(res)
          });
    }, []); // Make sure to also pass an array here, or you'll be triggering this effect on every render

    return  (
        <>

        {/* <div className = "cruiseContainer"> I don't think I need this because I am using Tailwind CSS*/}
        {/* When I use Sass in my next final repo I may not need a div either */}
            {cruiseHeaders.map (ship => {
                // return  ( Do not need return here, I think
                    <div key = {ship.cruise_line}>
                        {/* ListofShips component needs cruise_line, because when user clicks on 
                        Cruise Line Heading button, we need to fetch ships that belongs to that particular 
                        cruiseline. */}
                        {/* We need to render multiple ShipsList components, with one for each cruiseline */}
                        <ShipsList cruise_line={ship.cruise_line}/>

                        {/* </ShipsList>  I think I don't I need this closing tag*/}
                    </div>
                // ) I think, I do not need return closing bracket here
            })}
        {/* </div> I think, I do not need closing div from cruiseContainer here*/}

        </>
    )
}

export default CruiseListHeader