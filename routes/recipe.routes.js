const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model"); // use this PENDING -- find the User (createdBy) of the Recipe 

// "/recipes/categories"
router.get("/categorylist/:category", (req, res, next) => {
  const { category } = req.params;
  Recipe.find({ category }, { productImg: 1, funName: 1, descriptiveName: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//create  // "/recipes/create"
router.post("/create", (req, res, next) => {
  const {
    category,
    descriptiveName,
    ingredients,
    preparation,
    productImg,
    isGiftable,
    gallery,
    timeOfPreparation,
    costRating,
    difficultyRating,
  } = req.body;
  Recipe.create({
    category,
    descriptiveName,
    ingredients,
    preparation,
    productImg,
    isGiftable,
    gallery,
    timeOfPreparation,
    costRating,
    difficultyRating,
  })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//display a specific howdiy with all info
router.get("/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//edit
router.patch("/:id", (req, res, next) => {
  const {
    category,
    descriptiveName,
    ingredients,
    preparation,
    productImg,
    isGiftable,
    gallery,
    timeOfPreparation,
    costRating,
    difficultyRating,
  } = req.body;
  Recipe.findByIdAndUpdate(
    req.params.id,
    {
      category,
      descriptiveName,
      ingredients,
      preparation,
      productImg,
      isGiftable,
      gallery,
      timeOfPreparation,
      costRating,
      difficultyRating,
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//delete
router.delete("/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.json("Your changes are made...we got rid of..." + data._id)
    )
    .catch((err) => next(err));
});

module.exports = router;
