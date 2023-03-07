const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
const { ObjectId } = require("mongodb");
const { checkmovie, renamecheck, removecheck, idcheck } = require("../helpers");

const createMovie = async (
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
  await checkmovie(
    title,
    plot,
    genres,
    rating,
    studio,
    director,
    castMembers,
    dateReleased,
    runtime
  );

  const MoviesCollection = await movies();

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
  };

  const insertInfo = await MoviesCollection.insertOne(newmovie);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw new Error ("Could not add movie");

  const newId = insertInfo.insertedId.toString();

  const movie = await getMovieById(newId);
  return movie;
};

const getAllMovies = async () => {
  const MoviesCollection = await movies();
  const movieList = await MoviesCollection.find({}).toArray();
  if (!movieList) throw new Error ("Could not get all movies");
  return movieList;
};

const getMovieById = async (id) => {
  await idcheck(id);
  const MoviesCollection = await movies();
  const movie = await MoviesCollection.findOne({ _id: ObjectId(id) });
  if (movie === null) throw new Error("No movie with that id");

  return movie;
};

const removeMovie = async (id) => {
  await removecheck(id);

  const MoviesCollection = await movies();
  const deletionInfo = await MoviesCollection.deleteOne({ _id: ObjectId(id) });

  if (deletionInfo.deletedCount === 0) {
    throw new Error(`Could not delete movie with id of ${id}`);
  }
  return { deleted: true };
};

const renameMovie = async (id, newName) => {
  await renamecheck(id, newName);

  const MoviesCollection = await movies();
  const updatedname = {
    title: newName,
  };

  const updatedInfo = await MoviesCollection.updateOne(
    { _id: ObjectId(id) },
    { $set: updatedname }
  );
  if (updatedInfo.modifiedCount === 0) {
    throw new Error("could not update movie successfully");
  }

  return await getMovieById(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  removeMovie,
  renameMovie,
  createMovie,
};
