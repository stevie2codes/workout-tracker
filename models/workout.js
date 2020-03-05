const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
  },
  opts
);

workoutSchema.virtual("duration").get(function() {
  return this.exercises.duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
