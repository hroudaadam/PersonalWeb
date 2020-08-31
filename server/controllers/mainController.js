const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.post('/login', function(req, res, next) {
    var response = userService.authenticate(req.body);
    if (response) {
      res.json({accessToken: response});
    }
    else {
      res.send();
    }  
  });
  
  
  
  module.exports = router;