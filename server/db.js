const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)


function getShips(db = database) {
  return db('ships')
  .select('id', 'ship_name')
  // , 'cruise_line'
}

function getShipById(id, db = database)  {
  return db('ships')
    .where('ships.id', id)
    .first()
    .select('id', 'ship_name')
}

function getReviews(id, db = database) {
  return db('reviews')
    .join('users', 'users.id', 'reviews.user_id')
    .where('reviews.ship_id', id)
    .select('first_name', 'last_name', 'email', 'review', 'rating')  // would be good to send review_id
    .then((result) => {
        return result
    })   
}

module.exports = {
  getShips,
  getShipById,
  getReviews,
}