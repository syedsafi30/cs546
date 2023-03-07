//require express, express router and bcrypt as shown in lecture code
const express = require("express");
const router = express.Router();
const data = require("../data");
const usersdata = data.users;
const bcrypt = require("bcrypt");
const { users } = require("../data");
const { checkUser1, checkPwd } = require("../helpers");

router.route("/").get(async (req, res) => {
  //code here for GET
  // user is authenticated
  if (req.session.user) {
    console.log(
      "[" +
        new Date().toUTCString() +
        "]:" +
        req.method +
        "" +
        req.originalUrl +
        "(Authenticated User)"
    );
    res.redirect("/protected");
  } else {
    console.log(
      "[" +
        new Date().toUTCString() +
        "]:" +
        req.method +
        "" +
        req.originalUrl +
        "(Authenticated User)"
    );
    return res.render("userLogin");
  }
});

router
  .route("/register")
  .get(async (req, res) => {
    //code here for GET

    if (req.session.user) {
      console.log(
        "[" +
          new Date().toUTCString() +
          "]:" +
          req.method +
          "" +
          req.originalUrl +
          "(Authenticated User)"
      );
      return res.redirect("/protected");
    } else {
      console.log(
        "[" +
          new Date().toUTCString() +
          "]:" +
          req.method +
          "" +
          req.originalUrl +
          "(Authenticated User)"
      );
      res.render("userRegister");
    }
  })
  .post(async (req, res) => {
    //code here for POST

    try {
      checkUser1(req.body.usernameInput);
      checkPwd(req.body.passwordInput);
    } catch (e) {
      return res.status(400).render("userRegister", { error: e });
    }

    try {
      const newuser = await usersdata.createUser(
        req.body.usernameInput,
        req.body.passwordInput
      );
      if (newuser.insertedUser) return res.redirect("/");
    } catch (e) {
      return res.render("userRegister", { error: e });
    }
  });

router.route("/login").post(async (req, res) => {
  //code here for POST
  //input checking
  try {
    checkUser1(req.body.usernameInput);
    checkPwd(req.body.passwordInput);
  } catch (e) {
    return res.render("userRegister", { error: e });
  }

  // try {
  //    await usersdata.checkUser(req.body.usernameInput);

  // } catch (e) {
  //   return res.render("userRegister", { error: e });
  // }

  const newuser = await usersdata.checkUser(
    req.body.usernameInput,
    req.body.passwordInput
  );

  console.log(">>>>>> Am i authenticated", newuser.authenticatedUser);
  if (newuser) {
    req.session.user = req.body.usernameInput;

    return res.redirect("/protected");
  } else {
    console.log(
      "[" +
        new Date().toUTCString() +
        "]: " +
        req.method +
        " " +
        req.originalUrl +
        " (Non-Authenticated User)"
    );
    error = "Please log in with valid credentials.";
    return res.render("userLogin", { error });
  }
});

router.route("/protected").get(async (req, res) => {
  //code here for GET

  console.log("WE are in protected !!!!===>>>>>>");
  console.log(req.session.user);
  if (req.session.user) {
    console.log(
      "[" +
        new Date().toUTCString() +
        "]: " +
        req.method +
        " " +
        req.originalUrl +
        " (Authenticated User)"
    );
     const date = '[' + new Date().toUTCString() + ']: '
    return res.render("private", { date,username: req.session.user });
  } else {
    console.log(
      "[" +
        new Date().toUTCString() +
        "]: " +
        req.method +
        " " +
        req.originalUrl +
        " (Authenticated User)"
    );
    error = "Please log in with valid credentials.";
    res.status(401).render("userLogin", { error });
  }
});

router.route("/logout").get(async (req, res) => {
  //code here for GET
  req.session.destroy();
  console.log(
    "[" +
      new Date().toUTCString() +
      "]: " +
      req.method +
      " " +
      req.originalUrl +
      " (Authenticated User)"
  );
  res.render("logout", {});
});

module.exports = router;
