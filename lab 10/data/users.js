const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const brypt = require("bcrypt");
const SaltRounds = 16;
const { ObjectId } = require("mongodb");
// const { checkUserandPw } = require("../helpers");


const createUser = async (username, password) => {
    const UsersCollection = await users();
  let NewUser = {
    username: username,
    password: password,
  };

  const user1 = await UsersCollection.findOne({
    checkUsername: username,
  });

  if (user1 !== null) {
    throw  "User already exists";
  } 
  const checkUsername = NewUser.username.toString().toLowerCase();
  const checkPassword = NewUser.password.toString().toLowerCase();
  const hash = await brypt.hash(checkPassword, SaltRounds);
  const insertedUser = await UsersCollection.insertOne({ checkUsername, hash });
  console.log(insertedUser);

  
  if (!insertedUser.acknowledged || !insertedUser.insertedId)
    throw new Error("Could not add user");

  console.log(hash);
  console.log("testt");
  //  const User = checkUser(checkUsername, checkPassword);
  console.log("test one part 1 ");
  return { insertedUser: true };
};

const checkUser = async (username, password) => {
  // await checkUserandPw(username,password)
  const UsersCollection = await users();
  let authenticatedUser = {
    username: username,
    password: password,
  };
  const user = await UsersCollection.findOne({
    checkUsername: username,
  });

  // if (user !== null) {
  //   throw "User already exists";
  // }
  
  console.log("user", user);
  let compare = false;
  compare = await brypt.compare(authenticatedUser.password, user.hash);
  return { authenticatedUser: compare };
};

module.exports = {
  createUser,
  checkUser,
};
