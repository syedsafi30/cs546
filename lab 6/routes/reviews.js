//require express and express router as shown in lecture code
const express = require("express");
const router = express.Router();
const data = require("../data");
const reviewsData = data.reviews;
const moviesData = data.movies;
const { movies } = require("../data");

router
  // .route("/:movieId")
  .get("/:movieId", async (req, res) => {
    //code here for GET
    try {
      const reviewlist = await reviewsData.getAllReviews();
      res.json(reviewlist);
    } catch (e) {
      res.status(500).send(e);
    }
  })

  .post("/:movieId", async (req, res) => {
    const data = req.body;
    try {
      await moviesData.getMovieById(req.params.movieId);
    } catch (e) {
      return res.status(404).json({ error: "Post not found" });
    }
    console.log("work")
    try {
      const {
        reviewTitle,
        reviewerName,
       
        review,
        rating
      } = data

      let newreview = await reviewsData.createReview(
        req.params.movieId, 
        reviewTitle,
        reviewerName,
        
        review,
        rating
      );
      console.log("Hello World");
      res.json(newreview);
    } catch (e) {
      res.sendStatus(500);
      console.log(e)
    }
  });

router.get("/review/:reviewId", async (req, res) => {
  try {
    // req.params.movieId = validation.checkId(req.params.movieId);
    const reviewId = await reviewsData.getReview(req.params.reviewId);
    res.json(reviewId);
  } catch (e) {
    res.status(404).json(e);
  }
});
router
.delete("/review/:reviewId",async (req, res) => {
  try {
    // req.params.movieId = validation.checkId(req.params.movieId);
    const reviewId = await reviewsData.removeReview(req.params.reviewId);
    console.log("1")
    res.json(reviewId);
  } catch (e) {
    res.status(404).json(e);
  }
});
module.exports = router;
