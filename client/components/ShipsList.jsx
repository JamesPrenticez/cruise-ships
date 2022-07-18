import React from 'react'
import {getShipsList} from '../api/api'
import {HashLink as Link} from 'react-router-hash-link'

function ShipsList()    {
    return  (
        <button>
            {this.props.cruise_line}
        </button>

        // <ol>
        //     <Link smooth to={`/cruiselines/${encodedCruiseline}#${encodedShipName}`}>

        //     </Link>
        // </ol>
    )
}

export default ShipsList