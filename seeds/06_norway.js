exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // Delete all existing entries is being taken care of in 00_clean.js seeds file
  return knex('norway').insert([
    {id: 1, cruise_ship_name: '', norway_years: '', norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 2, cruise_ship_name: '', norway_years: '', norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 4, cruise_ship_name: '', norway_years: '', 
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 5, cruise_ship_name: 'Norway', norway_years: '1980 to 2003',
    norway_operator: 'Norwegian Cruise Line', conversion_cost: 'US $150 Million', 
    norway_passengers: '1980 - 1990: 1944 | 1994 - 2003: 2565', norway_crew: '875', 
    norway_gt: '1980 - 1990: 70202.19 | 1990 - 1994: 74200 | 1994 - 2003: 76049', 
    norway_fuel_capacity: '4424 Tonnes', 
    norway_fuel_consume: '250 tons per day (254.012 Tonnes) | or 250 Tonnes per day',
    norway_fresh_water: '2555 Tons (2596 Tonnes) | or 2596000 Litres', 
    norway_speed: 'Service: 17.8 Knots (32.97 km/h) | Maximum: 25 Knots (46.3 km/h)', 
    norway_passenger_decks: '1980: 13 decks | 1990: 15 decks', norway_last_name: 'Blue Lady',
    norway_final_year: '2006', norway_final_gt: '76049'},

    {id: 6, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 7, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 8, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 9, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 10, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 11, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''},

    {id: 12, cruise_ship_name: '', norway_years: '',
    norway_operator: '', conversion_cost: '', 
    norway_passengers: '', norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '',
    norway_fresh_water: '', norway_speed: '', norway_passenger_decks: '', norway_last_name: '',
    norway_final_year: '', norway_final_gt: ''}

  ]);
};
