const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
const { ObjectId } = require("mongodb");
//  const { reviews } = require(".");
 const { checkmovie, renamecheck, removecheck, idcheck } = require("../helpers");
// // const { reviews } = require(".");

const createMovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime,
  reviews,
  overallRating
) => {
  await checkmovie (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
)
 

  const MoviesCollection = await movies();
  // const ReviewCall= await reviews.getReview(reviewId);
  

  let newmovie = {
    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    director: director,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime,
    reviews: [],
    overallRating: 0,
  };

 
  const insertInfo = await MoviesCollection.insertOne(newmovie);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw new Error("Could not add movie");

  const newId = insertInfo.insertedId.toString();
  console.log("1")

  const movie = await getMovieById(newId);
  return movie;
};

// await createMovie

const getAllMovies = async () => {

  const MoviesCollection = await movies();
  console.log("2")
  const movieList = await MoviesCollection.find({}).toArray();
  let arr = [];
  for (let property of movieList) {
    const obj = { _id: property._id, title: property.title };
    arr.push(obj);
  }

  if (!movieList) throw new Error("Could not get all movies");
  return arr;
};

const getMovieById = async (movieId) => {
   await idcheck(movieId);
  console.log(movieId)
  const MoviesCollection = await movies();
  
  const movie = await MoviesCollection.findOne({ _id: ObjectId(movieId) });
  return movie;
};

const removeMovie = async (movieId) => {
   await removecheck(movieId);
  // await removecheck(movieId);

  const MoviesCollection = await movies();
  try {
    const movie = await getMovieById(movieId);
  } catch (e) {
    return;
  }
  const deletionInfo = await MoviesCollection.deleteOne({
    _id: ObjectId(movieId),
  });
  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete post with id of ${movieId}`;
  }
  return true;
};

const updateMovie = async (
  movieId,
  title,
  plot,
  genres,
  rating,
  studio,
  castMembers,
  dateReleased,
  runtime
) => {const checkmovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
)
  const MoviesCollection = await movies();
  // let obj = getMovieById(movieId)
  console.log(movieId);
  let updatedmovieData = {
    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime,
  };

  const updated = await MoviesCollection.updateOne(
    { _id: ObjectId(movieId) },
    { $set: updatedmovieData }
  );

  return await getMovieById(movieId);
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  removeMovie,
};
