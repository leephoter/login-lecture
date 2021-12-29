"use strict";

const UserStorage = require("./UserStorage");
const { response } = require("express");

class User {
    constructor(body) {
        this.body = body;
    }
    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id);
        // await >> promise를 반환하는 변수에만 사용 가능, ascync안에서만 사용 가능

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호 오류" };
        }
        return { success: false, msg: "아이디 오류" };
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
