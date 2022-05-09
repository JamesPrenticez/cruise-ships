exports.seed = (knex, Promise) => {
  return knex('cruise_line_companies').insert([
    {
      id: 1,
      name: "Royal Caribbean",
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