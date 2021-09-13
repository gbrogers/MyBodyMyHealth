const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

const connect = require("./database/db.js");

app.use(express.urlencoded({ extended: true })); // this is from youtube video
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "../public"));
});

// endpoints
app.use("/api/authenticate/login", ctrl.loginUser);
app.use("/api/authenticate/signup", ctrl.signUpUser);
app.use("/api/addBC", ctrl.addBC);
app.use("/api/addPeriodDate", ctrl.addPeriodDate);
// app.use("/api/getPeriodDate", ctrl.getPeriodDate);
app.use("/api/addBCDate", ctrl.addBCDate);
app.use("/api/saveArticle", ctrl.saveArticle);
app.use("/api/getSavedArticles/:user_id", ctrl.getSavedArticles);
// app.use("/api/calcNextDose", ctrl.calcNextDose);

connect.connect();

const port = process.env.PORT || 5555;
// const port = 5555;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
