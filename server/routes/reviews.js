const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

router.get('/api/reviews/:id', (req, res) => {
  const id = req.params.id

  switch (req.method){
    case 'GET':
    db.getReviews(id)
      .then(result => 
        //console.log(result)
        res.status(200).json({result})
      )
      .catch(err => {
        res.status(500).send('something went wrong', err)
    })
  }
})