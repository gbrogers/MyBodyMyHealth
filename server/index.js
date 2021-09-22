const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");
const app = express();

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

// const connect = require("./database/db.js");

// endpoints
// app.post("/api/authenticate/login", ctrl.loginUser);
// app.post("/api/authenticate/signup", ctrl.signUpUser);
// app.post("/api/addBC", ctrl.addBC);
// app.get("/api/getBirthControl/:birth_control_id", ctrl.getBirthControl);
// app.post("/api/addPeriodDate", ctrl.addPeriodDate);
// app.get("/api/getPeriodDates/:user_id", ctrl.getPeriodDates);
// app.post("/api/addBCDate", ctrl.addBCDate);
// app.get("/api/getBCDates/:user_id", ctrl.getBCDates);
// app.post("/api/saveArticle", ctrl.saveArticle);
// app.get("/api/getSavedArticles/:user_id", ctrl.getSavedArticles);
// app.delete("/api/removeResource/", ctrl.removeResource);
// app.get("/api/getNotes/:user_id", ctrl.getNotes);
// app.post("/api/addNotes/", ctrl.addNotes);
// app.delete("/api/deleteNote/:note_id", ctrl.deleteNote);
// app.get("/api/getLastBCUse/:user_id", ctrl.getLastBCUse);

// connect.connect();

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
