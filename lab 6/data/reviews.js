const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
const { ObjectId } = require("mongodb");
// const { movies } = require("../data");
const { getMovieById, createMovie } = require("./movies");
const { postreviewcheck, checkreview } = require("../helpers");
// const { reviews } = require(".");

const createReview = async (
  movieId,
  reviewTitle,
  reviewerName,
  review,
  rating
) => {
  // await postreviewcheck(reviewTitle, reviewerName, review, rating)
  // ObjectId = require("mongodb").ObjectId;
  const MoviesCollection = await movies();
  // const ReviewsCollection = await reviews()
  // const movieReview = await movies.getMovieById(movieId);

  let newReview = {
    _id: new ObjectId(),
    reviewTitle: reviewTitle,
    reviewerName: reviewerName,
    reviewDate: new Date(),
    review: review,
    rating: rating,
  };

  let sum = 0;
  for (let i = 0; i < MovieReview.reviews.length; i++) {
    sum = sum + movieId.reviews[i].rating;
  }
  if (i < MovieReview.reviews.length === 0) MovieReview.overallRating = 0;
  else MovieReview.overallRating = sum / MovieReview.reviews.length;

  const updated = await MoviesCollection.updateOne(
    { _id: ObjectId(movieId) },
    { $push: { reviews: newReview } }
  );

  const MovieReview = await getMovieById(movieId);
  return MovieReview;
};

const getAllReviews = async (movieId) => {
  
  const ReviewsCollection = await movies();
  const movieList = await ReviewsCollection.find({}).toArray();
  let arr = [];

  for (let property of movieList) {
    const obj = { reviews: property.reviews };
    arr.push(obj);
  }
  return arr;
};

const getReview = async (reviewId) => {
  const MoviesCollection = await movies();

  const a = await MoviesCollection.findOne({
    "reviews._id": ObjectId(reviewId),
  });
  let b = a.reviews;

  for (let i of b) {
    
    if (i._id.toString() === reviewId) console.log(i);
    return i;
  }
};

const removeReview = async (reviewId) => {
  const MoviesCollection = await movies();

  const MovieId = await MoviesCollection.findOne({
    "reviews._id": ObjectId(reviewId),
  });

  const movie = MovieId._id.toString();

  const newreviews = await MoviesCollection.updateOne(
    { _id: ObjectId(movie) },
    { $pull: { reviews: { _id: ObjectId(reviewId) } } }
  );
  return await getMovieById(movie);
};

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  removeReview,
};
