const express = require("express");
const passport = require("passport");
const router = express.Router();

const CLIENT_URL = "http://localhost:5173/";

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/google/failure",
  })
);

router.get("/success", (req, res) => {
  if (req?.user) res.send("Data is here");
  else res.send("unauthorized");
});

router.get("/google/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect(CLIENT_URL);
  });
});

module.exports = router;
