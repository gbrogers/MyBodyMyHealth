const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

const connect = require("./database/db.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "../public"));
});

// endpoints
app.post("/api/authenticate/login", ctrl.loginUser);
app.post("/api/authenticate/signup", ctrl.signUpUser);
app.use("/api/addBC", ctrl.addBC);
app.use("/api/getBirthControl/:birth_control_id", ctrl.getBirthControl);
app.use("/api/addPeriodDate", ctrl.addPeriodDate);
app.use("/api/getPeriodDates/:user_id", ctrl.getPeriodDates);
app.use("/api/addBCDate", ctrl.addBCDate);
app.use("/api/getBCDates/:user_id", ctrl.getBCDates);
app.use("/api/saveArticle", ctrl.saveArticle);
app.use("/api/getSavedArticles/:user_id", ctrl.getSavedArticles);
app.use("/api/removeResource/", ctrl.removeResource);
app.use("/api/getNotes/:user_id", ctrl.getNotes);
app.use("/api/addNotes/", ctrl.addNotes);
app.use("/api/deleteNote/:note_id", ctrl.deleteNote);

connect.connect();

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
