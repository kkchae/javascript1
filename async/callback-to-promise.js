" use strict";

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "ellie" && password === "dream") {
          resolve(id);
        } else {
          reject(new Error("user not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

/* const userStorage = new UserStorage();
const userId = prompt("Enter your id");
const userPw = prompt("Enter your password"); */

const inputId = document.getElementById("input_id");
const inputPw = document.getElementById("input_pw");
const loginBtn = document.getElementById("login_button");

function updateValue(e) {
  const userId = inputId.value;
  const userPw = inputPw.value;

  console.log(`id: ${userId}, pw: ${userPw}`);

  const userStorage = new UserStorage();
  userStorage
    .loginUser(userId, userPw)
    .then((id) => userStorage.getRoles(id))
    .then((user) => {
      console.log(`getRoles OK. name: ${user.name}, role: ${user.role}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}

loginBtn.addEventListener("click", updateValue);
