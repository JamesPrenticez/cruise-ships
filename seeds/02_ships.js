exports.seed = (knex, Promise) => {
  return knex('ships').insert([
    {
      id: 1,
      name: "Symphony of the Seas",
    },
    {
      id: 2,
      name: "Marella Cruises",
    },
    {
      id: 3,
      name: "Cunard",
    }
  ])
}