exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

    console.log("clean")
  return empty('users')()
  .then(empty('cruise_line_companies'))
  .then(empty('ships'))
  .then(empty('reviews'))
}