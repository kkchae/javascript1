" use strict";

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id == "ellie" && password == "dream") {
        onSuccess(id);
      } else {
        onError(new Error("user not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const inputId = document.getElementById("input_id");
const inputPw = document.getElementById("input_pw");
const loginBtn = document.getElementById("login_button");

function updateValue(e) {
  let userId = inputId.value;
  let userPw = inputPw.value;

  console.log(`id: ${userId}, pw: ${userPw}`);

  if (userId != "" && userPw != "") {
    const userStorage = new UserStorage();
    userStorage.loginUser(
      userId,
      userPw,
      (id) => {
        console.log(`loginUser OK. id: ${id}`);
        userStorage.getRoles(
          userId,
          (userWithRole) => {
            console.log(`getRoles OK. name: ${userWithRole.name}, role: ${userWithRole.role}`);
          },
          (errorMsg) => {
            console.log(errorMsg);
          }
        );
      },
      (errorMsg) => {
        console.log(errorMsg);
      }
    );
  } else {
    console.log(new Error("fill all input items"));
  }
}

loginBtn.addEventListener("click", updateValue);
