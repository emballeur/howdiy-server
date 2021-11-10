const router = require('express').Router();
const Recipe = require('../models/Recipe.model');

// "/recipes/categories"
router.get('/categorylist', (req, res, next) => {
    Recipe.find({}, {productImg: 1, funName: 1, descriptiveName: 1})
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

//create  // "/recipes/create"
router.post('/create', (req, res, next) => {
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

module.exports = router;