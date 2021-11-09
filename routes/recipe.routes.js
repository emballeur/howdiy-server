const router = require('express').Router();
const Recipe = require('../models/Recipe.model');

// "/recipes/categories"
router.get('/categories', (req, res, next) => {
    Recipe.find({}, {category: 1})
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

// "/recipes/create"
// router.post("/create", (req, res, next) => {
    
// })
  
// if (req.session.user) 
// return res.json({ user: req.session.user });
// res.status(403).json({ errorMessage: "You're not authenticated." });

module.exports = router;