"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인 실패";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
