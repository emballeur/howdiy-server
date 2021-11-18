const router = require("express").Router();
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model"); // use this PENDING -- find the User (createdBy) of the Recipe
// const upload = require('../config/cloudinary.config');

// "/recipes/categories"
router.get("/categorylist/:category", (req, res, next) => {
  const { category } = req.params;
  Recipe.find({ category }, { productImg: 1, funName: 1, descriptiveName: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

/* upload.single('imageUrl'), // as a middleware
const productImg = req.file.path;
const gallery = req.file.path; */

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
    createdBy: req.session.user._id,
  })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//display a specific howdiy with all info
router.get("/howdiy/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}); // for the view of Howdiy.jsx

//edit  /recipes/edit/:id
router.patch("/edit/:id", (req, res, next) => {
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
    .then((data) => {
      console.log(data, "this is the edit data")
      res.json(data)
    })
    .catch((err) => {
      console.log(data, "this is the edit catch error")
      next(err)
    });
});

//delete
router.delete("/delete/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.json("Your changes are made...we got rid of..." + data._id)
    )
    .catch((err) => next(err));
});


module.exports = router;
