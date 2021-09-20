const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");
const app = express();

const path = require("path");

const connect = require("./database/db.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// endpoints
app.post("/api/authenticate/login", ctrl.loginUser);
app.use("/api/authenticate/signup", ctrl.signUpUser);
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
app.use("/api/getLastBCUse/:user_id", ctrl.getLastBCUse);

connect.connect();

// if (process.env.NODE_ENV == "production") {
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "../public/index.html"));
});
// }

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
