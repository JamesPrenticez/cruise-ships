exports.up = (knex, Promise) => {
    return knex.schema.createTable('galileo', (table) => {
    table.increments('id').primary()
    table.string('galileo_name')
    table.string('galileo_years')
    table.string('galileo_gt')
    table.string('galileo_passenger_capacity')
    table.string('meridian_name')
    table.string('meridian_years')
    table.integer('meridian_gt')
    table.string('meridian_passenger_capacity')
    table.string('gg_last_name')
    table.string('sunvista_years')
    table.string('sunvista_gt')
    table.integer('sunvista_passenger_capacity')
  })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('galileo')
};
