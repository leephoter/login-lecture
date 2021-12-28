"use strict";

class UserStorage {
    static #users = {
        id: ["lee", "kim", "park"],
        psword: ["1", "12", "123"],
        name: ["l", "k", "p"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
