const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const Workout = require("./models/workout");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

app.post("/exercise", ({ body }, res) => {
  const workout = new Workout(body);
  workout
    .create(body)
    .then(db => {
      res.json(db);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/exercise", (req, res) => {
  Workout.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
