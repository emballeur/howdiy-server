const router = require("express").Router();

// use middlewares
router.get("/", (req, res, next) => {
  const profileData = { message: "this is secure information" };
  res.status(200).json(profileData);
});

module.exports = router;
