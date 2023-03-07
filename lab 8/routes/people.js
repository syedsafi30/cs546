const express = require("express");
const router = express.Router();
const data = require("../data");
const peopleData = data.people;
const path = require("path");

router.route("/").get(async (req, res) => {
  //code here for GET

  res.sendFile(path.resolve("static/homepage.html"));
});

router.route("/searchpeople").post(async (req, res) => {
  //code here for POST
  try {
    let peoplesbody = req.body.searchPersonName;
    if (typeof peoplesbody !== "string") {
      return res.status(400).render("error", { error: "invalid type" });
    } 
      empty = peoplesbody.trim();
      if (!empty) {
        return res
          .status(400)
          .render("error", { error: "invalid entry it is empty" });
      }
    
    if(/^-?\d+$/.test(peoplesbody) == true)
    {
      return res
          .status(400)
          .render("error", { error: "invalid entry cannot be integer" });
    }
    if(peoplesbody == null)
    {
      return res
          .status(400)
          .render("error", { error: " entry cannot be null" });
    }
    if(peoplesbody === NaN){
      return res
          .status(400)
          .render("error", { error: "invalid entry" });
    }
    if(/[a-zA-Z]/.test(peoplesbody)===false){
      return res
          .status(400)
          .render("error", { error: " entry must not contain letters" });
    }
    peoplesbody = peoplesbody.trim();
    const searchname = await peopleData.searchPeopleByName(peoplesbody);
    if (searchname.length === 0) {
      res
        .status(400)
        .render("person not found", { error: "invalid entry" });
      return;
    }
    
    res.render("peopleFound", {
      title: "people found",
      people:searchname,
      seearchname : searchname
    });
  } catch (e) {
    // console.log("e",e)
    res.status(404).json(e);
  }
});

router.route("/persondetails/:id").get(async (req, res) => {
  //code here for GET
  try {
    if (req.params.id === NaN) {
      return res.status(400).render("error", { error: "invalid ID" });
    }
    if (typeof req.params.id === String) {
      return res.status(400).render("error", { error: "invalid ID" });
    }
    if (req.params.id === null) {
      return res.status(400).render("error", { error: "invalid ID" });
    }
    if(req.params.id <0){
      return res.status(400).render("error", { error: "invalid ID" });
    }
    const details = await peopleData.searchPeopleByID(req.params.id);
    if (details === undefined) {
      res
        .status(400)
        .render("no person iwth that id", { peoplesbody: req.params.id });
      return;
    }
    res.render("personFoundByID", { details: details, title: "person found" });
  } catch (e) {
    console.log(e)
    res.status(400).json({ e: e });
  }
});

module.exports = router;
