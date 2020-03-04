module.exports = app => {
  app.post("/api/exercise", ({ body }, res) => {
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
};
