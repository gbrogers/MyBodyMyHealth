const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "../public"));
});
// const baseURL = "https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?";
// // https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=35&sex=female&pregnant=no&sexuallyActive=yes&tobaccoUse=no

// endpoints
// app.get(`${baseURL}/`, ctrl.getWords);

const port = process.env.PORT || 5555;
// const port = 5555;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
