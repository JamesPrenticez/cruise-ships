exports.up = function(knex, Promise) {
  return knex.schema.createTable('Ships', table =>  {
      table.increments('id').primary()
      table.string('cruise_line')
      table.string('ship_name')
      table.string('img')
      table.integer('Year')
      table.integer('Gross_Tonnage')
      table.integer('Passenger_Full_Capacity')
      table.integer('Double_Occupancy_Passenger_Capacity')
      table.decimal('Length')
      table.decimal('Beam')
      table.decimal('Draft')
      table.decimal('Height')
      table.integer('Loaded_Displacement')
      table.integer('Deadweight')
      table.string('Booking')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Ships')
};


// Comment James Prentice code for Ships Table because it does not include all ship details
// exports.up = (knex, Promise) => {
//   return knex.schema.createTable('ships', (table) => {
//   table.increments('id').primary()
//   table.string('name')
//   })  
// };

// exports.down = (knex, Promise) => {
//   return knex.schema.dropTable('ships')
// };
