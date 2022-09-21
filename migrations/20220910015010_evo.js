exports.up = (knex, Promise) => {
    return knex.shema.createTable('evo', (table) => {
        table.increments('id').primary()

        // Initial Details for a Classic Ship
        table.string('classic_ship_name')
        // Introduction Photo of ship at top of page on Left hand side  
        table.string('img')
        table.string('img_title')
        // Original Name and Original Ship Name I think can be the same variable,
        // so I may have it as original_name Or maybe certain cruise ships can use either 
        table.string('original_name')
        table.string('original_ship_name')
        table.string('early_service_years')
        table.string('service_years')
        // For France Liner only
        table.string('france_service_years')
        // Pacific Princess only
        table.string('pacific_princess_years')
        table.string('pacific_years')
        table.string('loveboat_final_year')
        // Back to Initial Details
        table.string('build_yard')
        table.string('operator')
        table.string('registry_port')
        table.string('cost')
        table.integer('imo')
        table.string('passenger_capacity_full')
        table.string('crew_capacity')
        table.string('gross_tonnage')
        table.string('length')
        table.string('beam')
        table.string('draft')
        table.string('height')
        table.string('height_funnel_top')
        table.string('speed')
        table.string('deadweight')
        table.string('lightship')
        table.string('loaded_displacement')
        table.string('power')
        table.string('power_rpm')
        table.string('fuel_type')
        table.string('fuel_capacity')
        table.string('fuel_consumption')
        table.string('fresh_water')
        table.string('propellors')
        table.string('propellor_size')
        table.string('rudder')
        table.string('rudder_size')
        table.string('decks')
        table.string('accessible_decks')
        table.string('bridge_height')
        table.string('bridge_water')
        table.string('shelter_deck')
        table.string('bow_bridge')
        table.string('bow_height')

        // Foreign Key Link to Norway table for info on this cruise ship 
        table.foreign('norway_id').references('norway.id')  

        // Foreign Key Link to Galileo table for info on this cruise ship
        table.foreign('galileo_id').references('galileo.id') 

        // Foreign Key Link to these classic ships, for their details when they were a cruise ship
        table.foreign('classic_cruise_id').references('classic_cruise.id')

        // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
        table.foreign('lengthened_id').references('lengthened.id')

        // Foreign Key Link for when these classic cruise ships had name changes, while they were cruise ships
        table.foreign('name_changes_id').references('name_changes.id')

        // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
        table.string('ship_horn')

        // Early Div Section for early life of a classic ship (has section id)
        table.string('early_1st_para')
        table.string('early_video')
        table.string('early_2nd_para')
        table.string('img_trials')
        table.string('img_trials_title') 
        table.string('early_3rd_para') 
        table.string('img_early')
        table.string('img_early_title')

        // Cruise Div Section for cruise life of a classic ship (has section id)
        table.string('cruise_1st_para') 
        table.string('img_1stcruise')
        table.string('img_1stcruise_title')
        // Not originally here, but now added name_before_lengthened
        table.string('name_before_lengthened') 
        table.string('lengthened_para') 
        table.string('img_lengthened')
        table.string('img_lengthened_title')
        table.string('name_after_lengthening')
        table.string('afterlengthen_para') 
        // Not originally here, but now added 
        table.string('img_afterlengthen')
        table.string('img_afterlengthen_title')

        // Please note Name Changes are used with Lengthened ships in a separate table 
        table.string('cruise_2nd_para')
        table.string('img_2ndcruise')
        table.string('img_2ndcruise_title') 
        table.string('cruise_3rd_para')
        table.string('img_3rdcruise')
        table.string('img_3rdcruise_title') 
        table.string('cruise_4th_para') 
        table.string('img_4thcruise')
        table.string('img_4thcruise_title')
        table.string('cruise_5th_para') 
        table.string('img_5thcruise')
        table.string('img_5thcruise_title')
        table.string('cruise_6th_para') 
        table.string('img_6thcruise')
        table.string('img_6thcruise_title')
        table.string('cruise_7th_para') 
        table.string('img_7thcruise')
        table.string('img_7thcruise_title')
        table.string('cruise_8th_para') 
        table.string('img_8thcruise')
        table.string('img_8thcruise_title')
        table.string('cruise_9th_para') 
        table.string('img_9thcruise') 
        table.string('img_9thcruise_title')
        table.string('cruise_10th_para') 
        table.string('img_10thcruise')
        table.string('img_10thcruise_title')
        table.string('cruise_video')

        // This is the Memorable Moments Div (id = mem) 
        table.string('mem_1st_para')
        table.string('mem_video')
        table.string('mem_2nd_para')

        // This is the Plans Div (id = plans) 
        // classic_ship_name for the ship, This already exists above 
        table.string('plans_para')
        table.string('ship_plans')
        table.string('ship_plans_cont')

        // This is the Final Div (id = final)
        table.string('final_1st_para')
        table.string('final_2nd_para')
        table.string('img_final')
        table.string('img_final_title')
    })    
};


exports.down = (knex, Promise) => {
    return knex.schema.dropTable('evo')
};