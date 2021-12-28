// module
const express = require("express");
const app = express();

// route
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //use >> middleware 등록

module.exports = app;
