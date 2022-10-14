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
        // This below, did not work on this branch with two arguements
        // For some reason it worked on Master branch , but not on this reviews-part branch 
        // res.status(500).send('something went wrong', err)
        // What I am trying to fix this with, is to have this as one arguement, by adding an error message to a string  
        res.status(500).send(`something went wrong: ${ err.message}`)
    })
  }
})