//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
const { ObjectId } = require("mongodb");
const checkUser1 = (username) => {
  if (!username) {
    throw new Error("must provide a usern ame");
  }

  if (username.trim() === " ") {
    throw new Error("Username cannot be only spaces");
  }

  if (username.length < 4) {
    throw new Error("username must be atleast 3 chars long");
  }
  if (/\s/.test(username) === true) {
    throw new Error("username mustnot have whitespces");
  }

  return username;
};

const checkPwd = (password) => {
  if (!password) {
    throw new Error(" Must provide a password");
  }
  if (password.trim() === "") {
    throw new Error("password cannot be only spaces");
  }
  if (/[A-Z]/.test(password) === false)
    throw new Error("password  must have atleast one uppercase");
  if (/\d/.test(password) === false)
    throw new Error("password  must have atleast one number");
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialChars.test(password)=== false) {
    throw "Must have atleast one special character";
  }
  if (/\s/.test(password) === true) {
    throw new Error("username mustnot have whitespces");
  }
  if (password.length < 6) {
    throw new Error("password must be atleast 6 chars long");
  }
  return password;
};

module.exports = {
  checkUser1,
  checkPwd,
};
