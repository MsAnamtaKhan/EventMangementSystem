const router = require('express').Router();
let Events = require('../models/events.model');

router.route('/').get((req, res) => {   //get all the users from the mongodb atlas
    Events.find()   //find all users mongoose mthod it returns a promise
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Erorr: ' + err));
  });
  


module.exports = router;