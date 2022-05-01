const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

router.get('/api/ships', (req, res) => {
  switch (req.method){

    case 'GET':
    db.getShips()
      .then(result => res.status(200).json({ships: result}))
      .catch(err => {
          res.status(500).send('something went wrong', err)
    })

  }
})