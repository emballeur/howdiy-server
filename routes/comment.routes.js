const router = require("express").Router();
const Comment = require("../models/Comment.model");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

/* 
"/comments/all"
router.get("/all", (req, res, next) => {
    const { category } = req.params;
    Recipe.find({ category }, { productImg: 1, funName: 1, descriptiveName: 1 })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }); 
*/

module.exports = router;