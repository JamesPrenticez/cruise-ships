// Here is the MakeClassic Functional Component for displaying a Classic Ship Page
// import React from 'react'

// function MakeClassic  {


//     return (
        //   <>
        //   const {
        //     shipTitle h2, HoverContents and classicShip Div all have same props for both Evolution Part 1 and 2

        //     Initial Details Div (Original Ship data Specs)
        //     Evolution Part 1 
        //     classic_ship_name, service_years, france_service_years, early_service_years, original_name, 
        //     early_years, pacific_princess_years, pacific_years, loveboat_final_year, build_yard, operator,
        //     registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage, length, beam, 
        //     draft, height, funnel_height, speed, deadweight, lightship, loaded_displacement, power, power_rpm,
        //     fuel_capacity, fuel_consumption,fresh_water, propellors, propellor_size, rudder, rudder_size, 
        //     decks, accessible_decks, bridge_height, bridge_water, shelter_deck, bow_bridge, bow_height


        //     Initial Details Div 
        //     Evolution Part 2
        //     The following extras were only included in Part 2 
        //     original_ship_name, original_operator, fuel_type

        //     A Div for France as Norway cruise ship is only done for Evolution Part 1.
        //     I wonder if this needs to be separate or if it can be done with cruiseDetails Div
        //     cruise_ship_name, norway_years, norway_operator, conversion_cost, norway_passengers, norway_crew, 
        //     norway_gt, norway_fuel_capacity, norway_fuel_consume, norway_fresh_water, norway_speed, 
        //     norway_passenger_decks, norway_last_name, norway_final_year, norway_final_gt 

        //     A Div for Galileo Galilei as a cruise ship is only done for Evolution Part 1.
        //     I wonder if this needs to be separate or if it can be done with cruiseDetails Div
        //     galileo_name, galileo_name, galileo_years, galileo_gt, galileo_passenger_capacity, meridian_name, 
        //     meridian_years, meridian_gt, meridian_passenger_capacity, gg_last_name, sunvista_years, sunvista_gt, 
        //     sunvista_passenger_capacity

        //     CruiseDetails Div
        //     This has been done so far for Evolution Part 2 only
        //     it may need to be done for Part 1 as well for Norway and Galileo Galilei    
        //     cruise_ship_name, cruise_operator, cruise_reg_port, conversion_cost, cruise_passengers_max, cruise_crew_max, 
        //     cruise_gt, cruise_funnel_hgt, cruise_speed, cruise_deadweight, cruise_lightship, cruise_displacement, 
        //     cruise_power, cruise_power_rpm, cruise_fuel_capacity, cruise_fuel_consumption, cruise_fresh_water,
        //     cruise_propellors, cruise_propellor_size, cruise_rudder, cruise_rudder_size, cruise_decks,
        //     cruise_passenger_decks, cruise_bridge_height, cruise_bridge_water, cruise_shelter_dec, cruise_bow_bridge, 
        //     cruise_bow_height  


        //     LengthenedDetails Div
        //     This Lengthend section only applies to Evolution Part 2,
        //     because it only has some lengthened classic ships
        //     name_after_lengthening, first_name_change, second_name_change, third_name_change, fourth_name_change, 
        //     fifth_name_change, sixth_name_change, seventh_name_change, eighth_name_change, ninth_name_change,
        //     lengthened_service_yrs, lengthened_operator, lengthened_reg_port, lengthened_cost, lengthened_passengers,
        //     lengthened_crew, lengthened_gt, lengthened_length, lengthened_beam, lengthened_draft, lengthened_deadweight,
        //     lengthened_lightship, lengthened_displacement, lengthened_funnel_hgt, lengthened_speed, lengthened_deadweight,
        //     lengthened_lightship, lengthened_displacement, lengthened_power, lengthened_power_rpm, lengthened_fuel_capacity,
        //     lengthened_fuel_consumption, lengthened_propellors, lengthened_propellor_size, lengthened_rudder_size,
        //     lengthened_decks, lengthened_passenger_decks, lengthened_bridge_height, lengthened_bridge_water,
        //     lengthened_shelter_deck, lengthened_bow_bridge, lengthened_bow_height,                  


        //     Early Div Section for early life of a classic ship (has section id)
        //     Evolution Part 1 has this
        //     early_1st_para, early_video, img_trials, img_trials_title, early_2nd_para, img_early, img_early_title
        //     Evolution Part 2 has this extra 3rd paragraph after trials image|
        //     early_3rd_para


        //     Cruise Div Section for cruise life of a classic ship (has section id)
        //     Props for both Evolution Part 1 and 2
        //     cruise_1st_para, img_1stcruise, img_1stcruise_title, 
            
        //     Props for only Evolution Part 2
        //     lengthened_para, img_lengthened, img_lengthened_title, name_after_lengthening, afterlengthen_para, 
        //     first_name_change
            
        //     Back to a Prop for both Evolution Part 1 and 2

        //     cruise_2nd_para

        //     Extra Props for Evolution Part 2 
        //     Evolution Part 2 tcovers the different name changes for a ship.
        //     In Evolution Part 2 Royal Viking Sky is the ship with 9, the most name changes.
        //     Below is the extra coverage for this.
        //     img_2ndcruise, img_2ndcruise_title, 
        //     second_name_change, cruise_3rd_para, img_3rdcruise, img_3rdcruise_title, 
        //     third_name_change, cruise_4th_para, img_4thcruise, img_4thcruise_title,
        //     fourth_name_change, cruise_5th_para, img_5thcruise, img_5thcruise_title, 
        //     fifth_name_change, cruise_6th_para, img_6thcruise, img_6thcruise_title
        //     sixth_name_change, cruise_7th_para, img_7thcruise, img_7thcruise_title
        //     seventh_name_change, cruise_8th_para, img_8thcruise, img_8thcruise_title
        //     eighth_name_change, cruise_9th_para, img_9thcruise, img_9thcruise_title
        //     ninth_name_change, cruise_10th_para, img_10thcruise, img_10thcruise_title                
        //     Cruise Video at the end of "As a Cruise Ship Section"
        //     , cruise_video    

        //     This is the Memorable Moments Div (id = mem) layout  
        //     It is the same for both Evolution Part 1 and Part 2
        //     mem_1st_para, mem_video, mem_2nd_para

        
        //     This is the Plans Div (id = plans) layout
        //     It is the same for both Evolution Part 1 and Part 2
        //     classic_ship_name, plans_para, ship_plans, ship_plans_cont

 
        //     This is the Final Div (id = final) layout
        //     This is the layout for Evolution Part 1
        //     final_1st_para, final_2nd_para
        //     and these image props are only included in Evolution Part 2
        //     img_final, img_final_title}

        //   } = this.props
        //   </>
      //   :
//        <>
//         <h2 className = "shipTitle">{classic_ship_name}</h2>
           
        //  <HoverContents classicName={classic_ship_name}/>

//         <div className = "classicContainer">

//             <div className = "classicShip">

//                 <div className = "shipImage">
//                     <img src = {img}
//                     title = {img_title}/>
//                 </div>
//             </div>

//             <div className = "classicDetails">
  
                    // Initial Ship Specifications 
                    // <div className = "initialDetails">
                    // Start with an Evolution Part 1 Spec
                    //     <h2>{classic_ship_name} Ship Specifications</h2>

                    // Extra added below for Evolution Part 2 
                    // Cruise Ship Original below only appears if there is information in the seeds.
                    // Also this only needs to appears if the ship has been lengthend or it go converted completely to a cruise ship eg Fairstar.
                    // {classic_ship_name !== '' && <h4>{classic_ship_name} Original</h4>}

                    // Back To Evolution Part 1 Specs
                    //     {service_years !== '' && <h4>Years in Service: {service_years}</h4>}
                    //     {france_service_years !== '' && <h4>Service Years as France: {france_service_years}</h4>}
                    //     {early_service_years !== '' && <h4>Service Years as Galileo Galilei: {early_service_years}</h4>}
                    //     {original_name !== '' && <h4>Pacific Princess Original Name: {original_name}</h4>}
                    
                    // Evolution Part 2 changes to original_ship_name
                    // This is Original Name for specs that are needed when the ship started differently or got lengthened 
                    // eg Fairstar, Song of Norway and Royal Viking Sky
                    // {original_ship_name !== '' && <h3>Original Ship Name: {original_ship_name}</h3>}   
                    // Thi is the same as early_service_years, but Evolution Part 2 has this 
                    // displayed this slightly differently  
                    // {early_service_years !== '' && <h4>Years in Service: {early_service_years}</h4>}

                    // Back To Evolution Part 1 Specs
                    //     {early_years !== '' && <h4>Years as Sea Venture: {early_years}</h4>}
                    //     {pacific_princess_years !== '' && <h4>Years as Pacific Princess: {pacific_princess_years}</h4>}
                    //     {pacific_years !== '' && <h4>Years as Pacific: {pacific_years}</h4>}
                    //     {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>}
                    //     {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
                    //     {operator !== '' && <h4>Operator: {operator}</h4>}
                    // Evolution Part 2 has 
                    // {original_operator !== '' && <h4>Operator: {original_operator}</h4>}
                    
                    // Back To Evolution Part 1 Specs
                    //     {registry_port !== '' && <h4>Port of Registry: {registry_port}</h4>}
                    //     {cost !== '' && <h4>Cost: {cost}</h4>}
                    //     {imo !== '' && <h4>IMO Number: {imo}</h4>}
                    //     {passenger_capacity_full !== '' && <h4>Maximum Passenger: {passenger_capacity_full}</h4>}
                    //     {crew_capacity !== '' && <h4>Maximum Crew: {crew_capacity}</h4>}
                    //     {gross_tonnage !== '' && <h4>Gross Tonnage: {gross_tonnage}</h4>}
                    //     {length !== '' && <h4>Length: {length}</h4>}
                    //     {beam !== '' && <h4>Beam: {beam}</h4>}
                    //     {draft !== '' && <h4>Draft: {draft}</h4>}
                    //     {height !== '' && <h4>Ship Height: {height}</h4>}
                    //     {funnel_height !== '' && <h4>Ship Height to Funnel Top: {funnel_height}</h4>}
                    //     {speed !== '' && <h4>Speed: {speed}</h4>}
                    //     {deadweight !== '' && <h4>Deadweight: {deadweight}</h4>}
                    //     {lightship !== '' && <h4>Lightship: {lightship}</h4>}
                    //     {loaded_displacement !== '' && <h4>Loaded Displacement: {loaded_displacement}</h4>}
                    //     {power !== '' && <h4>Power: {power}</h4>}
                    //     {power_rpm !== '' && <h4>Propellor RPM: {power_rpm}</h4>}

                    //     {fuel_type !== '' && <h4>Type of Fuel: {fuel_type}</h4>}
                            // Please note: fuel_type was not included in Evolution Part 2

                    //     {fuel_capacity !== '' && <h4>Fuel Capacity: {fuel_capacity}</h4>}
                    //     {fuel_consumption !== '' && <h4>Fuel Consumption: {fuel_consumption}</h4>}
                    //     {fresh_water !== '' && <h4>Fresh Water Capacity: {fresh_water}</h4>}
                    //     {propellors !== '' && <h4>Propellor Type: {propellors}</h4>}
                    //     {propellor_size !== '' && <h4>Propellor Size: {propellor_size}</h4>}
                    //     {rudder !== '' && <h4>Rudder Type: {rudder}</h4>}
                    //     {rudder_size !== '' && <h4>Rudder Size: {rudder_size}</h4>}
                    //     {decks !== '' && <h4>Decks: {decks}</h4>}
                    //     {accessible_decks !== '' && <h4>Passenger Decks: {accessible_decks}</h4>}
                    //     {bridge_height !== '' && <h4>Bridge Height: {bridge_height}</h4>}
                    //     {bridge_water !== '' && <h4>Bridge Height above Water: {bridge_water}</h4>}
                    //     {shelter_deck !== '' && <h4>Shelter Deck: {shelter_deck}</h4>}
                    //     {bow_bridge !== '' && <h4>Bow to Bridge Length: {bow_bridge}</h4>}
                    //     {bow_height !== '' && <h4>Bow Height: {bow_height}</h4>}
                    // </div>

                    // This is only done for Evolution Part 1.
                    // A Div for France as Norway cruise ship.
                    // I wonder if this needs to be separate or if it can be done with cruiseDetails Div
                    // <div className = "norwayDetails">

                    //     {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}
                    //     {cruise_ship_name !== '' && <h4>France Liner New Name: {cruise_ship_name}</h4>}
                    //     {norway_years !== '' && <h4>Years as Norway: {norway_years}</h4>}
                    //     {norway_operator !== '' && <h4>Operator: {norway_operator}</h4>}
                    //     {conversion_cost !== '' && <h4>France to Norway Conversion Cost:{conversion_cost}</h4>}
                    //     {norway_passengers !== '' && <h4>Norway Maximum Passenger: {norway_passengers}</h4>}
                    //     {norway_crew !== '' && <h4>Norway Maximum Crew: {norway_crew}</h4>}
                    //     {norway_gt !== '' && <h4>Norway Gross Tonnage: {norway_gt}</h4>}
                    //     {norway_fuel_capacity !== '' && <h4>Norway Fuel Capacity: {norway_fuel_capacity}</h4>}
                    //     {norway_fuel_consume !== '' && <h4>Norway Fuel Consumption: {norway_fuel_consume}</h4>}
                    //     {norway_fresh_water !== '' && <h4>Norway Fresh Water Capacity: {norway_fresh_water}</h4>}
                    //     {norway_speed !== '' && <h4>Norway Speed: {norway_speed}</h4>}
                    //     {norway_passenger_decks !== '' && <h4>Norway Passenger Decks: {norway_passenger_decks}</h4>}
                    //     {norway_last_name !== '' && <h4>France's Last Name: {norway_last_name}</h4>}
                    //     {norway_final_year !== '' && <h4>France's Final Year: {norway_final_year}</h4>}
                    //     {norway_final_gt !== '' && <h4>France's Final Gross Tonnage:{norway_final_gt}</h4>}
                    // </div>

                    // This is only done for Evolution Part 1.
                    // A Div for Galileo Galilei as a cruise ship.
                    // I wonder if this needs to be separate or if it can be done with cruiseDetails Div 
                    // <div className = "galileoDetails"> 

                    //     {galileo_name !== '' && <h2>{galileo_name} as a Cruise Ship</h2>}
                    //     {galileo_name !== '' && <h4>Galileo Galilei's 1st New Name: {galileo_name}</h4>}
                    //     {galileo_years !== '' && <h4>Years as Galileo: {galileo_years}</h4>}
                    //     {galileo_gt !== '' && <h4>Galileo Gross Tonnage: {galileo_gt}</h4>}
                    //     {galileo_passenger_capacity !== '' && <h4>Galileo Maximum Passengers: {galileo_passenger_capacity}</h4>}
                    //     {meridian_name !== '' && <h4>Galileo Galilei's 2nd New Name: {meridian_name}</h4>}
                    //     {meridian_years !== '' && <h4>Years as Meridian: {meridian_years}</h4>}
                    //     {meridian_gt !== '' && <h4>Meridian Gross Tonnage: {meridian_gt}</h4>}
                    //     {meridian_passenger_capacity !== '' && <h4>Meridian Maximum Passengers: {meridian_passenger_capacity}</h4>}
                    //     {gg_last_name !== '' && <h4>Galileo Galilei's Last Name: {gg_last_name}</h4>} 
                    //     {sunvista_years !== '' &&<h4>Years as Sun Vista: {sunvista_years}</h4>}
                    //     {sunvista_gt !== '' && <h4>Sun Vista Gross Tonnage: {sunvista_gt}</h4>}
                    //     {sunvista_passenger_capacity !== '' && <h4>Sun Vista Maximum Passengers: {sunvista_passenger_capacity}</h4>}
                    // </div>

                    // This Cruise Details has originally only been done for Evolution Part 2 
                    // for when it was operating as a cruise ship.
                    // <div className = "cruiseDetails">    
            
                    //     {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}   
                    //     {cruise_years !== '' && <h4>Years as a CruiseShip: {cruise_years}</h4>}
                    //     {cruise_operator !== '' && <h4>Cruise Operator: {cruise_operator}</h4>}
                    //     {cruise_reg_port !== '' && <h4>Port of Registry: {cruise_reg_port}</h4>}
                    //     {conversion_cost !== '' && <h4>Conversion Cost: {conversion_cost}</h4>}
                    //     {cruise_passengers_max !== '' && <h4>Maximum Cruise Passengers: {cruise_passengers_max}</h4>}
                    //     {cruise_crew_max !== '' && <h4>Maximum Cruise Crew: {cruise_crew_max}</h4>}
                    //     {cruise_gt !== '' && <h4>Gross Tonnage: {cruise_gt}</h4>}
                    //     {cruise_funnel_hgt !== '' && <h4>Funnel Height: {cruise_funnel_hgt}</h4>}
                    //     {cruise_speed !== '' && <h4>Speed: {cruise_speed}</h4>}
                    //     {cruise_deadweight !== '' && <h4>Deadweight:{cruise_deadweight}</h4>}
                    //     {cruise_lightship !== '' && <h4>lightship{cruise_lightship}</h4>}
                    //     {cruise_displacement !== '' && <h4>Displacement (Maximum):{cruise_displacement}</h4>}
                    //     {cruise_power !== '' && <h4>Power:{cruise_power}</h4>}
                    //     {cruise_power_rpm !== '' && <h4>Propellor RPM:{cruise_power_rpm}</h4>}
                    //     {cruise_fuel_capacity !== '' && <h4>Fuel Capacity:{cruise_fuel_capacity}</h4>}
                    //     {cruise_fuel_consumption !== '' && <h4>Fuel Consumption:{cruise_fuel_consumption}</h4>}
                    //     {cruise_fresh_water !== '' && <h4>Fresh Water Capacity:{cruise_fresh_water}</h4>}
                    //     {cruise_propellors !== '' && <h4>Propellor Type:{cruise_propellors}</h4>}
                    //     {cruise_propellor_size !== '' && <h4>Propellor Size:{cruise_propellor_size}</h4>}
                    //     {cruise_rudder !== '' && <h4>Rudder Type:{cruise_rudder}</h4>}
                    //     {cruise_rudder_size !== '' && <h4>Rudder Size:{cruise_rudder_size}</h4>}
                    //     {cruise_decks !== '' && <h4>Total Number of Decks:{cruise_decks}</h4>}
                    //     {cruise_passenger_decks !== '' && <h4>Passenger Decks:{cruise_passenger_decks}</h4>}
                    //     {cruise_bridge_height !== '' && <h4>Bridge Height:{cruise_bridge_height}</h4>}
                    //     {cruise_bridge_water !== '' && <h4>Bridge Height Above Water:{cruise_bridge_water}</h4>}
                    //     {cruise_shelter_deck !== '' && <h4>Shelter Deck:{cruise_shelter_deck}</h4>}
                    //     {cruise_bow_bridge !== '' && <h4>Bow to Bridge Length:{cruise_bow_bridge}</h4>}
                    //     {cruise_bow_height !== '' && <h4>Bow Height:{cruise_bow_height}</h4>}
    
                    // </div>

                    // This Lengthend section only applies to Evolution Part 2,
                    // because it only has some lengthened classic ships in Part 2.
                    // <div className = "lengthenedDetails">
                
                    //     <h2>{cruise_ship_name} after Lengthening</h2>
                
                    //     {name_after_lengthening !== '' && <h4 className = "NameChange">Ship Name Changes: {name_after_lengthening} </h4>}
                    //     {first_name_change !== '' && <h4 className = "NameChange">{first_name_change} </h4>}    
                    //     {second_name_change !== '' && <h4 className = "NameChange">{second_name_change} </h4>}
                    //     {third_name_change !== '' && <h4 className = "NameChange">{third_name_change} </h4>}
                    //     {fourth_name_change !== '' && <h4 className = "NameChange">{fourth_name_change} </h4>}
                    //     {fifth_name_change !== '' && <h4 className = "NameChange">{fifth_name_change} </h4>}
                    //     sixth_name_change !== '' && <h4 className = "NameChange">{sixth_name_change} </h4>}
                    //     {seventh_name_change !== '' && <h4 className = "NameChange">{seventh_name_change} </h4>}
                    //     {eighth_name_change !== '' && <h4 className = "NameChange">{eighth_name_change} </h4>}
                    //     {ninth_name_change !== '' && <h4 className = "NameChange">{ninth_name_change} </h4>}

                    //     {lengthened_service_yrs !== '' && <h4>Years in Service:{lengthened_service_yrs} </h4>}             
                    //     {lengthened_operator !== '' && <h4>Cruise Operators: {lengthened_operator}</h4>}
                    //     {lengthened_reg_port !== '' && <h4>Port of Registry: {lengthened_reg_port}</h4>}
                    //     {lengthened_cost !== '' && <h4>Cost to Lengthen: {lengthened_cost}</h4>}
                    //     {lengthened_passengers !== '' && <h4>Passengers (Maximum):{lengthened_passengers} </h4>}
                    //     {lengthened_crew !== '' && <h4>Crew (Maximum): {lengthened_crew}</h4>}
                    //     {lengthened_gt !== '' && <h4>Gross Tonnage: {lengthened_gt}</h4>}
                    //     {lengthened_length !== '' && <h4>Length: {lengthened_length}</h4>}
                    //     {lengthened_beam !== '' && <h4>Beam: {lengthened_beam}</h4>}
                    //     {lengthened_draft !== '' && <h4>Draft (Maximum): {lengthened_draft}</h4>}
                    //     {lengthened_deadweight !== '' && <h4>Deadweight (Maximum): {lengthened_deadweight}</h4>}
                    //     {lengthened_lightship !== '' && <h4>Lightship Displacement: {lengthened_lightship}</h4>}
                    //     {lengthened_displacement !== '' && <h4>Loaded Displacement (Maximum):{lengthened_displacement}</h4>}
                    //     {lengthened_funnel_hgt !== '' && <h4>Funnel Height: {lengthened_funnel_hgt}</h4>}
                    //     {lengthened_speed !== '' && <h4>Speed: {lengthened_speed}</h4>}
                    //     {lengthened_deadweight !== '' && <h4>Deadweight:{lengthened_deadweight}</h4>}
                    //     {lengthened_lightship !== '' && <h4>Lightship: {lengthened_lightship}</h4>}
                    //     {lengthened_displacement !== '' && <h4>Displacement (Maximum):{lengthened_displacement}</h4>}
                    //     {lengthened_power !== '' && <h4>Power:{lengthened_power}</h4>}
                    //     {lengthened_power_rpm !== '' && <h4>Propellor RPM:{lengthened_power_rpm}</h4>}
                    //     {lengthened_fuel_capacity !== '' && <h4>Fuel Capacity:{lengthened_fuel_capacity}</h4>}
                    //     {lengthened_fuel_consumption !== '' && <h4>Fuel Consumption:{lengthened_fuel_consumption}</h4>}
                    //     {lengthened_propellors !== '' && <h4>Propellor Type:{lengthened_propellors}</h4>}
                    //     {lengthened_propellor_size !== '' && <h4>Propellor Size:{lengthened_propellor_size}</h4>}
                    //     {lengthened_rudder !== '' && <h4>Rudder Type:{lengthened_rudder}</h4>}
                    //     {lengthened_rudder_size !== '' && <h4>Rudder Size:{lengthened_rudder_size}</h4>}
                    //     {lengthened_decks !== '' && <h4>Total Number of Decks:{lengthened_decks}</h4>}
                    //     {lengthened_passenger_decks !== '' && <h4>Passenger Decks:{lengthened_passenger_decks}</h4>}
                    //     {lengthened_bridge_height !== '' && <h4>Bridge Height:{lengthened_bridge_height}</h4>}
                    //     {lengthened_bridge_water !== '' && <h4>Bridge Height Above Water:{lengthened_bridge_water}</h4>}
                    //     {lengthened_shelter_deck !== '' && <h4>Shelter Deck:{lengthened_shelter_deck}</h4>}
                    //     {lengthened_bow_bridge !== '' && <h4>Bow to Bridge Length:{lengthened_bow_bridge}</h4>}
                    //     {lengthened_bow_height !== '' && <h4>Bow Height:{lengthened_bow_height}</h4>}

                    // </div> closing div for lengthenedDetails
                // </div> closing div for Overall classicDetails 

                    // This is early section Layout for Evolution Part 1.
                    // <div id = "early">     
                    //     <h3>Early Life</h3>    
                    //     <br/><br/>
                    //     <p>{early_1st_para}</p>

                    //     <video controls width = "500">
                    //         <source
                    //             src = {early_video}
                    //             type = "video/mp4"/>    
                    //     </video>

                    //     <img src = {img_trials}
                    //         title = {img_trials_title}/>

                    //     <p>{early_2nd_para}</p>    

                    //     <img src = {img_early}
                    //         title = {img_early_title}/>

                    // Evolution part 2 includes this below as well 
                    // This I think can be included in Evolution Part 1 as well 
                    // <p>{early_3rd_para}</p> 
                    // and it has this below at the end, which already exists
                    // <img src = {img_early} title = {img_early_title}
                        
                    // The difference Evolution Part 2 has, is that 
                    // img_early is moved below early_3rd _para at the end, 
                    // which was originally after early_2nd_para for Part 1
                    //     <br/>
                    //     <br/>
                    //     <p>Contents:    Previous       Next        Top</p>        

                    // </div>


                    // This is the Layout for only Evolution part 1
                    // <div id = "cruise">
                    //     <h3>As a Cruise Ship</h3>    
                    //     <br/><br/>
                    //     <p>{cruise_1st_para}</p>
                    //     <img src = {img_1stcruise} title = {img_1stcruise_title}/>
                    //     <p>{cruise_2nd_para}</p>
                    // Video Control is the same for both Evolution Part 1 and 2
                    //     <video controls width = "500">
                    //         <source src = {cruise_video} type = "video/mp4"/>    
                    //     </video>
                    // </div>
                     
                    // Evolution Part 2 has the same layout as Part 1 for this 
                    //     <div id = "cruise">
                    //     <h3>As a Cruise Ship</h3>    
                    //     <br/><br/>
                    //     <p>{cruise_1st_para}</p>

                //     This is Layout for Evolution Part 2 cruise section
                //     between
                //     <img src = {img_1stcruise} title = {img_1stcruise_title}/>
                //     and  <p>{cruise_2nd_para}</p>
                //     in Evolution Part 2 there is paragraphs and images on lengthening
                //     I think theses extra details only need to be displayed for Evolution Part 2
                //     because only some of those ships had been lengthened 

                //     {name_before_lengthening !== '' && <h4>{name_before_lengthening} Cruise Ship Lengthening</h4>}     
                //     {lengthened_para !== '' && <p>{lengthened_para}</p>}
                //     <img src = {img_lengthened} title = {img_lengthened_title}/>
                //     {name_after_lengthening !== '' && <h4>{name_after_lengthening} After Ship Lengthening</h4>}
                //     {afterlengthen_para !== '' && <p>{afterlengthen_para}</p>}
                //     <img src = {img_afterlengthen} title = {img_afterlengthen_title}/><br/><br/>
                //     {first_name_change !== '' && <h4>{first_name_change}</h4>}

                //     between
                //     <p>{cruise_2nd_para}</p>
                //     and <video controls width = "500">
                //     in Evolution Part 2 this covers the different name changes for the ship.
                //     In Evolution Part 2 Royal Viking Sky is the ship with 9, the most name changes.
                //     Below is the extra coverage for this.

                //     <img src = {img_2ndcruise} title = {img_2ndcruise_title}/><br/><br/>

                //     {second_name_change !== '' && <h4>{second_name_change}</h4>}

                //     <p>{cruise_3rd_para}</p>
                //     <img src = {img_3rdcruise} title = {img_3rdcruise_title}/><br/><br/>
                //     {third_name_change !== '' && <h4>{third_name_change}</h4>}

                //     <p>{cruise_4th_para}</p>
                //     <img src = {img_4thcruise} title = {img_4thcruise_title}/><br/><br/>

                // {fourth_name_change !== '' && <h4>{fourth_name_change}</h4>}

                // <p>{cruise_5th_para}</p>

                // <img src = {img_5thcruise} title = {img_5thcruise_title}/>
                // <br/><br/>

                // {fifth_name_change !== '' && <h4>{fifth_name_change}</h4>}

                // <p>{cruise_6th_para}</p>

                // <img src = {img_6thcruise} title = {img_6thcruise_title}/>
                // <br/><br/>

                // {sixth_name_change !== '' && <h4>{sixth_name_change}</h4>}

                // <p>{cruise_7th_para}</p>

                // <img src = {img_7thcruise} title = {img_7thcruise_title}/>
                // <br/><br/>

                // {seventh_name_change !== '' && <h4>{seventh_name_change}</h4>}

                // <p>{cruise_8th_para}</p>

                // <img src = {img_8thcruise} title = {img_8thcruise_title}/>
                // <br/><br/>

                // {eighth_name_change !== '' && <h4>{eighth_name_change}</h4>}

                // <p>{cruise_9th_para}</p>

                // <img src = {img_9thcruise} title = {img_9thcruise_title}/>
                // <br/><br/>

                // {ninth_name_change !== '' && <h4>{ninth_name_change}</h4>}

                // <p>{cruise_10th_para}</p>

                // <img src = {img_10thcruise} title = {img_10thcruise_title}/>
                // <br/><br/>

//                 This is the Memorable Moments layout for both Evolution Part 1 and Part 2
//                 <div id = "mem">     
//                     <h3>Memorable Moments</h3>

//                     <p>{mem_1st_para}</p>

//                     <video controls width = "500">
//                         <source
//                             src = {mem_video}
//                             type = "video/mp4"/>    
//                     </video>

//                     <p>{mem_2nd_para}</p>

//                 </div>


//                 This is the same plans layout for both Evolution Part 1 and Part 2
//                 <div id = "plans">    
//                     <h3>{classic_ship_name} Ship Plans</h3>  
//                     <br/><br/>

//                     <p>{plans_para}</p>
//                     <img src = {ship_plans} />
//                     <img src = {ship_plans_cont} />           
//                 </div>

//                 This is the layout for Evolution Part 1 
//                 <div id = "final">    
//                     <h3>Final Years</h3> 
//                     <p>{final_1st_para}</p>
//                     <p>{final_2nd_para}</p>
//                     and this image is only included in Evolution Part 2
//                     <img src = {img_final} title = {img_final_title} />

//                 </div>
//             </div>    
//         <div/>
//         </>    
//     )
// }

// export default MakeClassic
// End of MakeClassic Functional component



// Convert this FindClassic below to Functional Component above