

// I have decided to put these into seperate files in server/db folder

// James Prentice Code from master Branch for Reviews Part 

// const environment = process.env.NODE_ENV || 'development'
// const config = require('../knexfile')[environment]
// const database = require('knex')(config)

// module.exports = {
//   getShips,
//   getReviews,
// }

// function getShips(db = database) {
//   return db('ships')
// }

// function getReviews(id, db = database) {
//   return db('reviews')
//     .join('users', 'users.id', 'reviews.user_id')
//     .join('ships', 'ships.id', 'reviews.ship_id')
//     .where('reviews.ship_id', id)
//     .select('content', 'rating')
//     .then((result) => {
        //console.log(result)
//         return result
//     })   
// }