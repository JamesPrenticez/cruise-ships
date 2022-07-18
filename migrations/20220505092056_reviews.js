




// Comment James Prentice code for now, as I am not using this just yet
// exports.up = (knex, Promise) => {
//   return knex.schema.createTable('reviews', (table) => {
//   table.increments('id').primary()
//   table.integer('user_id')
//   table.foreign('user_id').references('users.id')
//   table.integer('ship_id')
//   table.foreign('ship_id').references('ships.id')
//   table.string('content')
//   table.decimal('rating')
//   })  
// };

// exports.down = (knex, Promise) => {
//   return knex.schema.dropTable('reviews')
// };
