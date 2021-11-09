const router = require("express").Router();

// using middlewares in index.js instead of here // why is it "/" shouldn't it be /profile?
router.get("/", (req, res, next) => {
  const profileData = { message: "this is secure information" };
  res.status(200).json(profileData); // means success
});

module.exports = router;
