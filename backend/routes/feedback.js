const router = require('express').Router();
let Feedback = require('../models/feedback.model');

router.route('/').get((req, res) => {   //get all the users from the mongodb atlas
    Feedback.find()   //find all users mongoose mthod it returns a promise
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Erorr: ' + err));
  });
  



module.exports = router;