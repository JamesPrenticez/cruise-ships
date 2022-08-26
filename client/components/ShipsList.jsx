import React, {useEffect, useState} from 'react'
import {getShipsList} from '../api/api'
import {HashLink as Link} from 'react-router-hash-link'

function ShipsList()    {

    // Declare shipsList variable, set and initialize it as an empty array by using useState.
    const [shipsList, setShipsList] = useState([]);
    // Set isOpen initially to false, because button is closed when user initially visits Cruise Lines page.
    const [isOpen, setIsOpen] = useState(false);
    // Set hasFetched initially to false, because no ship data is initially shown when user visits Cruise Lines page.
    const [hasFetched, setHasFetched] = useState(false);

    useEffect (() => {
        getShipsList(this.props.cruise_line)
            .then(res =>  {   
                setShipsList(res),
                setHasFetched(true) // It is not reading true for hasFetched in this useEffect
                // so it is not calling setHasFetched function              
            });
    }, []); // Make sure to also pass an array here, or I will be triggering this effect on every render


    // function handleClick needs to be changed, 
    // so that it follows React Functional Component methods 

    // This code suggested by Rob Cummins from Dev Academy Slack, I am currently using.
    // This toggles isOpen between true and false
    function handleClick()  {
        setIsOpen(isOpen => !isOpen)
    }    

    // Try this suggestion from Holloway on Javascript Slack Channel 
    // function handleClick () {  
    //     setIsOpen(previousIsOpen => !previousIsOpen); // this will invert the boolean value of isOpen.
    // }

    function findShipNames(ship)  {

        return ship.ship_name
    //   This function helps display relevant Cruise Ships Names when user clicks on a Cruise Line Heading.
    //   In my backend I have let the database find the relevant Cruise Ships from their Cruise Line
    //   , so we just return it here.
    }

    return  (
        <>

        <button onClick={handleClick}>
            {this.props.cruise_line}
        </button>

        <ol>

            {isOpen == true &&
                shipsList.map (ship =>  {
                    
                    // Below we are creating constants that will be used in the Link below.
                    // The CruiseLine and ShipName constants are used to replace all spaces in the url with an underscore "_".
                    const encodedCruiseline = ship.cruise_line.replace(/\s/g, '_')
                    const encodedShipName = ship.ship_name.replace(/\s/g, '_')

                    return (
                    <li>
                        <Link className="shipsList" smooth to={`/cruiselines/${encodedCruiseline}#${encodedShipName}`}>
                        {/* <div className = "ship"> May not need this div 
                        as span and img can be styled separately  */}
                            <span>{findShipNames(ship)}</span>
                            <img src ={ship.img} title = {ship.ship_name}/>
                        {/* </div>  May not need this closing div , as the syling can be done 
                        for each of the html elements */}
                        </Link>
                    </li>        
                    )
                } ) 
            }
        </ol>
        </>            
    )                
}

export default ShipsList