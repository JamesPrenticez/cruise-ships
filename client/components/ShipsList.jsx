import React, {useEffect, useState} from 'react'
import {getShipsList} from '../api/api'
import {HashLink as Link} from 'react-router-hash-link'

function ShipsList()    {

    // Declare cruiseHeaders variable and set it using useState 
    const [shipsList, setShipsList] = useState([]);
    // const [isOpen, handleClick] = useState((false));
    // const [isOpen, shipsList] = useState((false));
    // I think I only need to set isOpen to false for initial useState
    // Set isOpen to false, because button is closed when user initially visits page
    const [isOpen, setIsOpen] = useState(false);
    // const [hasFetched, setShipsList] = useState((false));
    // Set hasFetched initially to false, because no ship data is initially shown when user visits page.
    const [hasFetched, setHasFetched] = useState(false);

    useEffect (() => {
        getShipsList(this.props.cruise_line)
            .then(res =>  {
                // Comment this below as this may not be the correct way with hooks
                // setShipsList({
                //     shipsList: res,
                //     hasFetched: true
                // }) this brackets for one without hooks
                // Use this below as I believe this is the correct way to do it with Hooks    
                setShipsList(res),
                setHasFetched(true)              
            });
    }, []); // Make sure to also pass an array here, or you'll be triggering this effect on every render


    // function handleClick needs to bechanged, 
    // so that it follows React Functional Component methods 


    function handleClick () {
        // My first attempt based on empty array for shipsList
        // if(useState([]))    {
        // Should be based on no shipsList initially has not been Fetched yet, I think   
        if(setHasFetched(false)) {
            setShipsList()  }
            useState(
                setShipsList(previousshipsList => !previousshipsList),
                setIsOpen(previousIsOpen => !previousIsOpen),
                setHasFetched(previousHasFetched => !previousHasFetched)
            )
    }


    // Comment all of this old handleClick Function, as it was used previously with my Class Component
    // function handleClick () {
    //This handleClick sorts out the changing of state between Shipslist being open or not, when a Cruise Line Heading is clicked.
      //This if statement finds out if the shipsList has been visited and if it has, it uses hasFetched to find Ships for List.
    //   if(!this.state.hasFetched)  {
    //     this.setShipsList()
    //   }
      //This block of code below sorts out the toggling of the State for the Cruise Line Headings. 
    //   this.setState(prevState =>  ({
        //Code below will find previous state of Ships List when it is either open or closed.
        // shipsList: prevState.shipsList,
        //Code below will reverse the Previous State of isOpen for Ships List when it is open or closed.
        // isOpen: !prevState.isOpen,
        //Code below will find Previous State of hasFetched for Ships List when it is closed.
    //     hasFetched: prevState.hasFetched
    //   }))    
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