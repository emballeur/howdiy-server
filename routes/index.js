const router = require("express").Router();
const authRoutes = require("./auth.routes");
const secureRoutes = require('./secure.routes'); // added for profile page
const { isLoggedIn } = require('../middlewares/authorization'); // middlewares


router.get("/", (req, res, next) => {
  res.json("All good in here");
})

// You put the next routes here 👇
router.use('/auth', authRoutes);
router.use("/profile", isLoggedIn, secureRoutes); // added for profile page

// example: router.use("/auth", authRoutes)
module.exports = router;
