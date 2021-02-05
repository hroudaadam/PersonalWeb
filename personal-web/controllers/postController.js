const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const postService = require('../services/postService');
const { authorize } = require('../helpers/jwtAuthorizeMiddleware');
const { roles } = require('../helpers/enums');


router.get('/', async function (req, res, next) {
  var response = await postService.getList();
  res.json(response);
});

router.get('/:id', async function (req, res, next) {
  var id = parseInt(req.params.id);
  var response = await postService.get(id);
  res.json(response);
});

router.post('/', authorize(), asyncHandler(async function (req, res, next) {
  var response = await postService.create(req.body, req.user.userId);
  res.json(response);
}));

// router.post('/', authorize(roles.Admin), function (req, res, next) {
//   var response = postService.create(req.body, req.user.userId);
//   res.json(response);
// });

module.exports = router;