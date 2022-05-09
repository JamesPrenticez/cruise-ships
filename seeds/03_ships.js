exports.seed = (knex, Promise) => {
  return knex('ships').insert([
    {
      id: 1,
      cruise_line_company_id: 1, //Royal Caribbean
      name: "Symphony of the Seas",
    },
    {
      id: 2,
      cruise_line_company_id: 2, //Royal Caribbean
      name: "Marella Celebration",
    },
    {
      id: 3,
      cruise_line_company_id: 3, //Cunard
      name: "Queen Mary 2",
    }
  ])
}