exports.up = (knex, Promise) => {
  return knex.schema.createTable('cruise_line_companies', (table) => {
  table.increments('id').primary()
  table.string('name')
  })  
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cruise_line_companies')
};