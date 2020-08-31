var express = require('express');
var router = express.Router();
import userService from '../services/userService';

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var autheticated = userService.authenticate(req.body);
  if (autheticated) {
    res.send('ok');
  }
  res.send('not ok');
});

module.exports = router;
