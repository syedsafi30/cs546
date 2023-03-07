//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/code/routes

const express = require("express");
const router = express.Router();
const data = require("../data");
const helpers = require("../helpers");
const pokemondata = data.pokemon;

router
  .route("/pokemon")
  .get(async (req, res) => {
    try {
      const postlist = await pokemondata.pokemon();
      res.json(postlist);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  })
  .post(async (req, res) => {
    res.send("POST request to http://localhost:3000/pokemon");
  });

//Request Method

router
  .route("/pokemon/:id")
  .get(async (req, res) => {
    try {
      req.params.id = helpers.checkId(req.params.id)
      const post = await pokemondata.pokemonById(req.params.id);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  })
  .post(async (req, res) => {
    res.send(`POST request to http://localhost:3000/pokemon/${req.params.id}`);
  });

//Request Method

module.exports = router;
