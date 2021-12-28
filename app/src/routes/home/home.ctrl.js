"use strict";

const User = require("../../models/User");

const users = {
    id: ["lee", "kim", "park"],
    psword: ["1", "12", "123"],
};

const output = {
    home: function (req, res) {
        res.render("home/index");
    },
    login: function (req, res) {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
