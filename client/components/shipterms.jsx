import React, {useState} from 'react'
import {glossary} from '../../data/glossary'

function ShipTerms()    {

const [ counter, setCounter ] = useState

return  (
    <>    
    <div>
        {/* className="header" needs to be changed to tailwind css equivalent for blue color */}
        <div className = "header">
            <h1>Ship Terms</h1>
        </div>

        {glossary.map((item) => (
        {/* className="ShipTerms" needs to be changed to tailwind css equivalent */}
        // Ship Terms has display flex, flex-direction: column, 10px padding, burlywood border, max-width:1300px
        <div className = "ShipTerms">

            {/* {glossary.map((item) => ( Had this here originally */}
            {/* className="tonnage" needs to be changed to tailwind css equivalent */}    
            {/* tonnage has border: 3px, max-width 1300px, position: relative */}
            <div className = "tonnage">

                {/* h2 tonnage headings has color: forestgreen, max-width 200px */}
                <h2>Tonnage Explained</h2>
            
                {/* All h4 headings have color: blue, font-size 1.25em and p tags are color:black and font-size: 1em */}
                {/* Gross Tonnnage: */}
                <h4>{item.title}</h4> <p>{item.desc}</p>    
                {/* Deadweight:  */}   
                <h4>{item.title} </h4> <p>{item.desc}</p>
                {/* Lightship:  */}
                <h4>{item.title} </h4><p>{item.desc}</p>
                {/* Loaded Displacement:  */}
                <h4>{item.title} </h4><p>{item.desc}</p>
                {/* This is how I want to have Item Description for Loaded Displacement displayed with Line Breaks for separate lines. 
                Can </br> tag be used with desc in glossary.js file.  */}
                {/* This is the total weight of the ship in the water. 
                The empty weight of a ship + it's deadweight is equal to it's Loaded Displacement,
                so, if you have that as an equation, then Loaded Displaement = Empty Ship Mass + Deadweight 
                If you are familiar with Archimedes Principle, then you will know that a ship in water displaces or pushes aside an equal mass of water to it's own ship mass in order to float. */}

                <hr/>
                {/* color for tonnage horizontal rule is aqua */}

            </div>

            {/* className="measurements" needs to be changed to tailwind css equivalent */}    
            {/* measurements has border: 3px, max-width 1300px, position: relative */}
            <div className = "measurements">

                {/* h2 measurements headings have color: olive and no max-width 200px */}
                <h2>Understanding Measurements</h2>

                {/* All h4 headings have color: maroon, font-size: 1.25em and p tags are color: mediumblue and font-size: 1em */}
                {/* Length: */}
                <h4>{item.title}</h4> <p>{item.desc}</p>
                {/* Beam:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>    
                {/* Draft:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Height:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Bridge Height:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Bridge Height above water:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Bow to Bridge Length:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Bow Height:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>

                <hr/>
                {/* color for measurements horizontal rule is cadetblue */}

            </div>

            {/* className="capacities" needs to be changed to tailwind css equivalent */}    
            {/* capacities has border: 3px, max-width 1300px, position: relative */}
            <div className = "capacities">

                {/* h2 capacities headings have color: teal and no max-width 200px */}
                <h2>What does Capacity mean with a Ship</h2>

                {/* All h4 headings have color: darkslateblue, font-size: 1.25em and p tags are color: brown and font-size: 1em */}
                {/* Passenger Capacity (Full):  */}
                <h4>{item.title}</h4><p>{item.desc}</p>  
                {/* Maximum Passengers: */}
                <h4>{item.title}</h4><p>{item.desc}</p>  
                {/* Passenger Capacity (Double Occupancy):  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* First Class and Tourist Class:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Fuel Capacity:  */}
                <h4>{item.title}</h4> <p>{item.desc}</p>
                {/* Fuel Consumption:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
            
                <hr/>
                {/* color for capacities horizontal rule is dodgerblue */}

            </div> 

            {/* className="capacities" needs to be changed to tailwind css equivalent */}    
            {/* capacities has border: 3px, max-width 1300px, position: relative */}
            <div className = "other-terms">

                {/* h2 other terms headings have color: darkgreen and no max-width 200px */}
                <h2>Other Common Ship Terms</h2>

                {/* All h4 headings have color: crimson, font-size: 1.25em and p tags are color: midnigthblue and font-size: 1em */}
                {/* Year or Year in Service: */}
                <h4><b>{item.title}</b></h4> <p>{item.desc}</p> 
                {/* Builder:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Operator:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Port of Registry:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Cost:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Conversion Cost:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* IMO Number:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Speed:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Power: */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Propellor:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Propellor RPM:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Propellor Type:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Propellor Size:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Rudder:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Keel: */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Type of Fuel:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Fresh Water Capacity:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Passenger Decks:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Aft:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Stern:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Bow:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Port:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>
                {/* Starboard:  */}
                <h4>{item.title}</h4><p>{item.desc}</p>

                <hr/>
                {/* color for other terms horizontal rule is green */}

            </div> 

        </div>
        ))}

    </div>
    </>
    )
}

export default ShipTerms