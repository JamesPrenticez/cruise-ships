const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getShips,
}

function getShips(db = database) {
  return db('ships')
}