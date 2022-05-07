const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getShips,
  getReviews,
}

function getShips(db = database) {
  return db('ships')
}

function getReviews(id, db = database) {
  return db('reviews')
    .join('users', 'users.id', 'reviews.user_id')
    .where('reviews.ship_id', id)
    .select('first_name', 'last_name', 'email', 'content', 'rating') //would be good to send review_id 
    .then((result) => {
        return result
    })   
}