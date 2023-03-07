const axios = require("axios");

//Axios call to get all data
const getAllPeople = async () => {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
  );
  return data;
};

//Function to list of up to 20 people matching the searchPersonName (sorted by id)
const searchPeopleByName = async (searchPersonName) => {
  const data = await getAllPeople();

  let array = [];
  for (let i of data) {
    if (
      i.firstName.includes(searchPersonName) ||
      i.lastName.includes(searchPersonName)
    ) {
      array.push(i);
    }
  }
  const first20 = array.slice(0, 20);

  return first20;
};

//Function to list person matching the id
const searchPeopleByID = async (id) => {
  const data = await getAllPeople();
  for (let i of data) {
    if (id == i.id) {
      return i;
    }
  }
};

module.exports = { getAllPeople, searchPeopleByName, searchPeopleByID };
