const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.post('/login', function(req, res, next) {
    var response = userService.authenticate(req.body);
    res.json(response);
  }); 
  
module.exports = router;