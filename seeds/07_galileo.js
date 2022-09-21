exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // Delete all existing entries is being taken care of in 00_clean.js seeds file
  return knex('galileo').insert([
    {id: 1, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 2, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 3, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 4, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},

    {id: 5, galileo_name: 'Galileo', 
    galileo_years: '1984 to 1990', galileo_gt: '27888 (same as built)',
    galileo_passenger_capacity: '1263', meridian_name: 'Meridian', meridian_years: '1990 to 1997', 
    meridian_gt: '30440', meridian_passenger_capacity: '1428', gg_last_name: 'Sun Vista', 
    sunvista_years: '1997 to 1999', sunvista_gt: '30440 (unchanged from Meridian)', 
    sunvista_passenger_capacity: '1428 (unchanged from Meridian)'},

    {id: 6, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},

    {id: 7, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 8, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 9, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 10, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 11, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''},
    {id: 12, galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '', 
    meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '', gg_last_name: '', 
    sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: ''}    

  ]);
};
