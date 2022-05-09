exports.up = (knex, Promise) => {
  return knex.schema.createTable('ships', (table) => {
  table.increments('id').primary()
  table.integer('cruise_line_company_id')
  table.foreign('cruise_line_company_id').references('cruise_line_companies.id')
  table.string('name')
  })  
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ships')
};