const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "295964992284-7j14595i0ffnl3ha0bc6nsbgh406ness.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
