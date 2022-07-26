import React from 'react'
// import ShipShots from './ShipShots'
import CruiseListHeader from './CruiseListHeader'

function CruiseLines()  {
    return  (
        <>
        <div>
            <h1>Cruise lines</h1>
        </div>

        <div>
            {/* <ShipShots/> Comment this component, because I want to get CruiseListHeader working first  */}
            <CruiseListHeader/>
        </div>
        </>
    )
}

export default CruiseLines