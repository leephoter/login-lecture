"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) {
        return alert("아이디 입력 필수");
    }
    if (psword.value !== confirmPsword.value) {
        return alert("비밀번호 불일치");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.log("Error !!! :>> ", "Error !!!");
        });
}
