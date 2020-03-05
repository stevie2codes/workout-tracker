const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: []
  },
  opts
);

workoutSchema.virtual("duration").get(function() {
  this.exercises.map(exercise => {
    return exercise.duration;
  });
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
