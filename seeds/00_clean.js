
exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('ships')()
}


// James Prentice code for cleaning Seeds for a Fresh Run
// exports.seed = function (knex, Promise) {
//   const empty = table =>
//     () => knex(table).del()

//   return empty('users')()
//   .then(empty('ships'))
//   .then(empty('reviews'))
// }