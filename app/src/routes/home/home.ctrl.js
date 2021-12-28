"use strict";

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
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패",
        });
    },
};

module.exports = {
    output,
    process,
};
