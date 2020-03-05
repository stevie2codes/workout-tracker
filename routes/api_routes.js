let db = require("../models");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
      res.json(data);
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(data => {
        // console.log(data);
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    db.Workout.findOneAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
