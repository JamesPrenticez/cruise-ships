import React, { useEffect, useState} from 'react'
import {getCruiseLines } from '../api/api'
import ShipsList from './ShipsList'

function CruiseListHeader() {

    // Declare cruiseHeaders State variable 
    const [cruiseHeaders] = useState({
        
    })

    useEffect (() =>    {

    // Note: This was the original ComponentDidMount that took Binding this.setUpCruiseLines()
    // Now it is coming from the CruiseListHeader.js useEffect to the DOM    
    }
    )
    

    return  (
        <>
        <div>    
            <div key={ship.cruise_line}>
                <ShipsList cruise_line={ShipsList.cruise_line}></ShipsList>            
            </div>
        </div>    
        </>
    )
}

export default CruiseListHeader