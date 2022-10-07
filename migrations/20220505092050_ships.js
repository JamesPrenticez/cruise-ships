exports.up = (knex, Promise) => {
  return knex.schema.createTable('ships', (table) => {
  table.increments('id').primary()
  table.string('cruise_line')
  table.string('ship_name')
  table.string('img')  
  table.integer('Year')
  table.integer('Gross_Tonnage')
  table.integer('Passenger_Full_Capacity')
  table.integer('Double_Occupancy_Passenger_Capacity')
  table.string('Length')
  table.string('Beam')
  table.string('Draft')
  table.string('Height')
  table.string('Loaded_Displacement')
  table.string('Deadweight')
  table.string('Booking')
  })  
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ships')
};
