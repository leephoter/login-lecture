// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html; charset-utf-9" });
//     if (req.url === "/") {
//         res.end("it's root");
//     } else if (req.url === "/login") {
//         res.end("it's login page");
//     }
// });

// app.listen(3001, function () {
//     console.log("http서버");
// });

// module
const express = require("express");
const app = express();

const home = require("./routes/home");
// route

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use >> middleware 등록

module.exports = app;
