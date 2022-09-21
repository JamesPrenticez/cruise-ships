exports.up = (knex, Promise) => {

    return knex.schema.createTable('name_changes',(table) =>{
        table.increments('id').primary()
        table.string('first_name_change')
        table.string('second_name_change')
        table.string('third_name_change')
        table.string('fourth_name_change')
        table.string('fifth_name_change')
        table.string('sixth_name_change')
        table.string('seventh_name_change')
        table.string('eighth_name_change')
        table.string('ninth_name_change')
    })
};


exports.down = (knex, Promise) => {
  return knex.schema.dropTable('name_changes')
};
