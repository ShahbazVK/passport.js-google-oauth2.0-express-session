const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "clientID",
      clientSecret: "clientSecret",
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  // The serializeUser function is called when a user logs in or authenticates successfully.
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // The deserializeUser function is called on every subsequent request made by the user after they have logged in.
  done(null, user);
});
