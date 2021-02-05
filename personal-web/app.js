const express = require("express");
const errorHandler = require("./helpers/errorHandler");
const userService = require("./services/userService");
require("dotenv").config();
var cors = require("cors")

var mainController = require("./controllers/mainController");
var postController = require("./controllers/postController");

var app = express();

app.use(cors());
app.use(express.json({limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api", mainController);
app.use("/api/posts", postController);

// global error handler
app.use(errorHandler);

userService.init();

module.exports = app;
