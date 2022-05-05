exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {
      id: 1,
      first_name: "Robert",
      last_name: "Wilkinson",
      email: "Rob@gmail.com"
    },
    {
      id: 2,
      first_name: "James",
      last_name: "Prentice",
      email: "James@gmail.com"
    },
  ])
}