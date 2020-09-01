const express = require('express');
const router = express.Router();

const postService = require('../services/postService');
const { authorize } = require('../helpers/jwtAuthorizeMiddleware');
const roles = require('../helpers/roles');


router.get('/', function(req, res, next) {  
    var response = postService.getAll();
    res.json(response);
  });
  
  router.get('/:id', function(req, res, next) {  
    var id = parseInt(req.params.id);
    var response = postService.get(id);
    res.json(response);
  });

  router.post('/', authorize(roles.Admin), function(req, res, next) {
    var response = postService.create(req.body, req.user.userId);
    res.json(response);
  });
  
  
  module.exports = router;