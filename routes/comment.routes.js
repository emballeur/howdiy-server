const router = require("express").Router();
const Comment = require("../models/Comment.model");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

/* 
"/comments/all"
router.get("/all", (req, res, next) => {
    const { recipe_id } = req.params;
    Comment.find({ recipe_id }, { avatar, input })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }); 

 */

// "/comments/create"
router.post("/create", (req, res, next) => {
    const { recipe_id } = req.params;
    Comment.create({ recipe_id }, { avatar, input })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }); 


module.exports = router;