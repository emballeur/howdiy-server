const router = require("express").Router();
const authRoutes = require("./auth.routes");
const secureRoutes = require("./secure.routes"); // added for profile page
const { isLoggedIn } = require("../middlewares/authorization"); // middlewares
const recipeRoutes = require("./recipe.routes"); // added for recipes

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
router.use("/auth", authRoutes);
router.use("/", isLoggedIn, secureRoutes); // added for profile page
router.use("/recipe", isLoggedIn, recipeRoutes); // added for profile page

// example: router.use("/auth", authRoutes)
module.exports = router;
