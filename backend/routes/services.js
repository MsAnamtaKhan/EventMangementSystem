const router = require('express').Router();
let Services = require('../models/services.model');

router.route('/').get((req, res) => {   //get all the users from the mongodb atlas
    Services.find()   //find all users mongoose mthod it returns a promise
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Erorr: ' + err));
  });

  router.post("/addService", async (req, res) => {   //POST Request and body has all the components async bcz data is saved to mongo
    try {
      const service_name = req.body.service_name;
      const service_price = req.body.service_price;
  
      //validation
      if (!service_name || !service_price ) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
      }

      const newService = new Services({
        service_name,
        service_price,
      })
      newService.save()  //save new user to database
        .then(() => res.json('Service added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

  
module.exports = router;