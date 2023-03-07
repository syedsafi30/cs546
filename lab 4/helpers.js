// //You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
// const mongoCollections = require("../config/mongoCollections");
// const movies = mongoCollections.movies;
const { ObjectId } = require("mongodb");
const checkmovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
) => {
  if (
    !title ||
    !plot ||
    !genres ||
    !rating ||
    !studio ||
    !director ||
    !castMembers ||
    !dateReleased ||
    !runtime
  ) {
    throw new Error("You must provide a input for your movie");
  }
  // / checking type of title, plot, genres... if it is string
  if (
    typeof title !== "string" ||
    typeof plot !== "string" ||
    typeof dateReleased !== "string" ||
    typeof rating !== "string" ||
    typeof studio !== "string" ||
    typeof director !== "string"
  ) {
    throw new Error("Input must be a string");
  }

  // checking if title is cosisting only spaces
  if (title.trim().length === 0) {
    throw new Error(
      "title cannot be an empty string or string with just spaces"
    );
  }
  //  checking if title contains only letters
  if (title.length < 2 && /^[A-Za-z0-9]*$/.test(title) !== true) {
    throw " length of title must be greater than 2 and must contain only letters";
  }
  // checking if studio contains only letters
  if (studio.length < 5 && /^[a-zA-Z]+$/.test(studio) !== true) {
    throw "length of studio must be greater than 2 and must contain only letters";
  }
  //checking if director has firstname and last name with some space in between
  if (!/^[A-Za-z]*(\s)[A-Za-z]*$/.test(director)) {
    throw new Error("Directors name must have only alphabets");
  }
  const name = director.split(" ");
  if (name[0].length < 3 || name[1].length < 3) {
    throw new Error("first and last name char must be greater than 3 letters");
  }

  // checking if genres are strings and if it's empty
  for (i in genres) {
    if (typeof genres[i] !== "string" || genres[i].trim().length === 0) {
      throw new Error(" genre must be of type string and not empty");
    }
    genres[i] = genres[i].trim();
  }
  if (!Array.isArray(genres)) {
    throw new Error(" you must provide array of genre");
  }

  // checkimg if castmembers are not array
  if (!castMembers || !Array.isArray(castMembers)) {
    throw new Error("You must provide an array of castmembers");
  }
  // checking castmembers exists atleast one
  if (castMembers.length === 0) {
    throw new Error("You must supply at least one castmember");
  }
  // checking if castmembers are strings and if it's empty
  for (i in castMembers) {
    if (
      typeof castMembers[i] !== "string" ||
      castMembers[i].trim().length === 0
    ) {
      throw new Error(" castmembers must be of type string and not empty");
    }
    if (!/^[A-Za-z]*(\s)[A-Za-z]*$/.test(castMembers[i])) {
      throw new Error("Directors name must have only alphabets");
    }
    const name = castMembers[i].split(" ");
    if (name[0].length < 3 || name[1].length < 3) {
      throw new Error(
        "first and last name char must be greater than 3 letters"
      );
    }
  }

  // checking the rating
  if (
    rating !== "G" &&
    rating !== "PG" &&
    rating !== "PG-13" &&
    rating !== "R" &&
    rating !== "NC-17"
  ) {
    throw new Error("invalid rating type");
  }

  // checking runtime
  let regex = /([01]?[0-9]|2[0-3])[h][ ][0-5][0-9][min]/;
  if (!regex.test(runtime)) {
    throw new Error(
      "runtime is invalid, runtime format must be of correct type"
    );
  }
};

const renamecheck = async (id, newName) => {
  if (!id) throw new Error("You must provide an id to search for");
  if (typeof id !== "string") throw new Error("Id must be a string");
  if (id.trim().length === 0)
    throw new Error("id cannot be an empty string or just spaces");
  id = id.trim();
  if (!ObjectId.isValid(id)) throw new Error("invalid object ID");
  if (!newName) throw new Error("You must provide a name for your movie");
  if (typeof newName !== "string") throw new Error("Name must be a string");
  if (newName.trim().length === 0)
    throw new Error(
      "Name cannot be an empty string or string with just spaces"
    );
};

const removecheck = async (id) => {
  if (!id) throw new Error("You must provide an id to search for");
  if (typeof id !== "string") throw "Id must be a string";
  if (id.trim().length === 0)
    throw new Error("id cannot be an empty string or just spaces");
  id = id.trim();
  if (!ObjectId.isValid(id)) throw new Error("invalid object ID");

  
};

const idcheck = async (id) => {
  if (!id) throw new Error("You must provide an id to search for");
  if (typeof id !== "string") throw new Error("Id must be a string");
  if (id.trim().length === 0)
    throw new Error("Id cannot be an empty string or just spaces");
  id = id.trim();
  if (!ObjectId.isValid(id)) throw new Error("invalid object ID");
};

module.exports = {
  checkmovie,
  renamecheck,
  removecheck,
  idcheck,
};
