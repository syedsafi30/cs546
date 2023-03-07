/*

1. Create a Movie of your choice.
2. Log the newly created Movie. (Just that movie, not all movies)
3. Create another movie of your choice.
4. Query all movies, and log them all
5. Create the 3rd movie of your choice.
6. Log the newly created 3rd movie. (Just that movie, not all movies)
7. Rename the first movie
8. Log the first movie with the updated name. 
9. Remove the second movie you created.
10. Query all movies, and log them all
11. Try to create a movie with bad input parameters to make sure it throws errors.
12. Try to remove a movie that does not exist to make sure it throws errors.
13. Try to rename a movie that does not exist to make sure it throws errors.
14. Try to rename a movie passing in invalid data for the newName parameter to make sure it throws errors.
15. Try getting a movie by ID that does not exist to make sure it throws errors.

*/

const movies = require("./data/movies");
const connection = require("./config/mongoConnection");
//  const { movies } = require('./config/mongoCollections');

const main = async () => {
  const db = await connection.dbConnection();
  await db.dropDatabase();
  let movie1 = undefined;
  let movie2 = undefined;
  let movie3 = undefined;
  let movie4 = undefined;

  console.log("Adding movies");

  // const hackers = await movies.createMovie("Hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
  // console.log(hackers);
  // console.log("4")

  console.log("creating 1st movie");
  try {
    movie1 = await movies.createMovie(
      "movie1",
      "Hackers are blamed for making a virus that will capsize five oil tankers.",
      ["Crime", "Drama", "Romance"],
      "PG-13",
      "United Artists",
      "Iain Softley",
      ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
      "09/15/1995",
      "1h 45min"
    );
    console.log("logging the movie");
    console.log(movie1);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Creating another movie");

  try {
    movie2 = await movies.createMovie(
      "movie2",
      "Hackers are blamed for making a virus that will capsize five oil tankers.",
      ["Crime", "Drama", "Romance"],
      "PG-13",
      "United Artists",
      "Iain Softley",
      ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
      "09/15/1995",
      "1h 45min"
    );
  } catch (e) {
    console.log(e);
  }
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("logging all movies");
  try {
    allmovies = await movies.getAllMovies();
    console.log(allmovies);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("creating and logging third movie");

  try {
    movie3 = await movies.createMovie(
      "movie3",
      "Hackers are blamed for making a virus that will capsize five oil tankers.",
      ["Crime", "Drama", "Romance"],
      "PG-13",
      "United Artists",
      "Iain Softley",
      ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
      "09/15/1995",
      "1h 45min"
    );
    console.log("logging the movie");
    console.log(movie3);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("renaming the first movie");

  try {
    namechange = await movies.renameMovie(movie1._id.toString(), "rename");
    console.log(namechange);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("logging all movies");
  try {
    allmovies = await movies.getAllMovies();
    console.log(allmovies);
  } catch (e) {
    console.log(e);
  }

  try {
    remove = await movies.removeMovie(movie2._id.toString());
    console.log(remove);
    console.log("removing 2nd movie");
  } catch (e) {
    console.log(e);
  }
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("logging all movies");
  try {
    allmovies = await movies.getAllMovies();
    console.log(allmovies);
  } catch (e) {
    console.log(e);
  }
  // creating movie with bad input parameters and checking it's output
  console.log("creating movie with bad input parameters");
  try {
    movie4 = await movies.createMovie(
      "3131",
      "2e232",
      ["Crime", "Drama", "Romance"],
      "PG-13",
      "United Artists",
      "al Softley",
      ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"],
      "2133113111",
      "1h 45min"
    );
    console.log("logging the movie");
    console.log(movie4);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  // Try to remove a movie that does not exist to make sure it throws errors.
  console.log("removing a movie that does not exist ");
  try {
    movie4 = await movies.removeMovie();
    console.log("logging the movie");
    console.log(movie4);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  // Try to rename a movie that does not exist to make sure it throws errors.

  console.log("renaming a movie that does not exist ");
  try {
    movie4 = await movies.renameMovie();
    console.log(movie4);
  } catch (e) {
    console.log(e);
  }

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("renaming a movie with bad input for newName ");
  try {
    movie4 = await movies.renameMovie(movie1._id.toString(), 13132);
    console.log(movie4);
  } catch (e) {
    console.log(e);
  }
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log(" getting a movie by id which does not exist ");
  try {
    movie4 = await movies.getMovieById("cncinwenniw2o4i2o4inrdi2oindo");
    console.log(movie4);
  } catch (e) {
    console.log(e);
  }
};

main();
