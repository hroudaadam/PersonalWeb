const express = require("express");
const router = express.Router();
const { authorize } = require('../helpers/jwtAuthorizeMiddleware');
const asyncHandler = require('express-async-handler');

const userService = require("../services/userService");
const mainService = require("../services/mainService");

router.post("/login", asyncHandler(async function (req, res, next) {
  var response = await userService.authenticate(req.body);
  res.json(response);
}));

router.get("/test", asyncHandler(async function (req, res, next) {
  var response = await mainService.test();
  res.json(response);
}));

router.get('/test-a', authorize(), asyncHandler(async function (req, res, next) {
  var response = await mainService.test();
  res.json(response);
}));

module.exports = router;