const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passportSetup = require("./passport");
const authRoutes = require("./routes/auth");
const passport = require("passport");
const app = express();

app.use(
  session({
    name: "session",
    secret: "anysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }, //use this if you want to save as cookies with expiry else without this will be saved as session only
  })
);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    // methods: "GET,POST",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(3000, () => console.log("Server running at 3000"));
