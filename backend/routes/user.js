const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require("bcryptjs");
var validator = require("email-validator");
 


router.route('/').get((req, res) => {   //get all the users from the mongodb atlas
    User.find()   //find all users mongoose mthod it returns a promise
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Erorr: ' + err));
  });
  

  router.post("/addUser", async (req, res) => {   //POST Request and body has all the components async bcz data is saved to mongo
    try {
      const name = req.body.name;
      const email = req.body.email;
      const contact = req.body.contact;
      const address = req.body.address;
      const status = req.body.status;
      const type = req.body.type;
      const username = req.body.username;
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
  
      //validation
      if (!name || !email || !contact || !address || !password || !confirmPassword ||!username) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
      }
  
      if (username.length < 5) {
        return res.status(400).json({ msg: "The username needs to be at least 5 characters long." });
    }
  
    if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Enter the same password twice for verification." });
    }
  
      if (name.length < 3) {
        return res.status(400).json({ msg: "The name needs to be at least 3 characters long." });
      }

      if(!validator.validate(email)){
        return res.status(400).json({ msg: "Email is not valid." });
      }
      
      const existingUserEmail = await User.findOne({ email: email });  //check whether user with the same email existed or not as email should be unique
      if (existingUserEmail)
        return res.status(400).json({ msg: "An account with this email already exists." });

      const existingUsername = await User.findOne({ username: username });  //check whether user with the same email existed or not as email should be unique
      if (existingUsername)
        return res.status(400).json({ msg: "User with this username already exists" });

      //Generate hash for passwordk2
      const saltP = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, saltP);

  
      const newUser = new User({
        name,
        email,
        contact,
        address,
        status,
        type,
        username,
        password: hashPassword
      })
      newUser.save()  //save new user to database
        .then(() => res.json('user added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;