//require express and express router as shown in lecture code
const express = require("express");
const { movies } = require("../data");
const router = express.Router();
const data = require("../data");
const moviesData = data.movies;

router
  .route("/")
  .get(async (req, res) => {
    //code here for GET

    try {
      const movielist = await moviesData.getAllMovies();
      console.log(movielist)
      res.json(movielist);
    } catch (e) {
      res.status(500).send(e);
    }
  })
  .post(async (req, res) => {
    const data = req.body;

    const {
      title,
      plot,
      genres,
      rating,
      studio,
      director,
      castMembers,
      dateReleased,
      runtime,
    } = data;
    const newmovie = await moviesData.createMovie(
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
    res.json(newmovie);

    // res.send('POST request to http://localhost:3000/movies');
  });

router
  .route("/:movieId")
  //code here for PUT
  .get(async (req, res) => {
    try {
      // req.params.movieId = validation.checkId(req.params.movieId);
      
      const movieId = await moviesData.getMovieById(req.params.movieId);
      res.json(movieId);
    } catch (e) {
      res.status(404).json(e);
    }
  })
  .put(async (req, res) => {
    const updatedData = req.body;
    console.log(updatedData);
    const {
      title,
      plot,
      genres,
      rating,
      studio,
      director,
      castMembers,
      dateReleased,
      runtime,
    } = updatedData;

    try {
      const updatedmovie = await moviesData
      .updateMovie(
        req.params.movieId,
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
      res.json(updatedmovie);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  })
  .delete(async (req, res) => {
    try {
      await moviesData.getMovieById(req.params.movieId);
    } catch (e) {
      return res.status(404).json({ error: "Post not found" });
    }
    try {
      await moviesData.removeMovie(req.params.movieId);
      res.status(200).json({ deleted: true });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

module.exports = router;
