// Using Express Router for getting Routes
const express = require('express')
const db = require('../db/dbships')
const router = express.Router()
router.use(express.json())

router.get('/:cruise_line', (req, res) => {
  db.getShipsList(req.params.cruise_line)
    .then(shipslist =>
        res.json(shipslist))
})

module.exports = router

// James Prentice Code from master Branch for Reviews Part 

// const express = require('express')
// const db = require('../db')
// const router = express.Router()

// module.exports = router

// router.get('/api/ships', (req, res) => {
//   switch (req.method){
//     case 'GET':
//     db.getShips()
//       .then(result => res.status(200).json({ships: result}))
//       .catch(err => {
//           res.status(500).send('something went wrong', err)
//     })
//   }
// })