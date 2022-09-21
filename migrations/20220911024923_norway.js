exports.up = (knex, Promise) => {
    return knex.shema.createTable('norway', (table) => {
    table.increments('id').primary()
    table.string('cruise_ship_name')
    table.string('norway_years')
    table.string('norway_operator')
    table.string('conversion_cost')
    table.string('norway_passengers')
    table.string('norway_crew')
    table.string('norway_gt')
    table.string('norway_fuel_capacity')
    table.string('norway_fuel_consume')
    table.string('norway_fresh_water')
    table.string('norway_speed')
    table.string('norway_passenger_decks')
    table.string('norway_last_name')
    table.string('norway_final_year')
    table.string('norway_final_gt') 
    }) 
};


exports.down = (knex, Promise) => {
    return knex.schema.dropTable('norway')  
};
