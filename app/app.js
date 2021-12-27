// module
const express = require("express");
const app = express();

const home = require("./src/routes/home");
// route

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //use >> middleware 등록

module.exports = app;
