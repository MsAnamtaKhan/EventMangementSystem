const router = require('express').Router();
let Payment = require('../models/payment.model');

router.route('/').get((req, res) => {   //get all the users from the mongodb atlas
    Payment.find()   //find all users mongoose mthod it returns a promise
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Erorr: ' + err));
  });
  


module.exports = router;