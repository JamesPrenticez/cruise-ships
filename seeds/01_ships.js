exports.seed = (knex, Promise) => {
  return knex('ships').insert([
    {
      id: 1,
      name: "Symphony of the Seas",
    }
  ])
}