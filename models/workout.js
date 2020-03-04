const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  workoutType: {
    type: String,
    trim: true,
    required: "Workout Type required"
  },
  distance: {
    type: Number,
    trim: true
  },
  duration: {
    type: Number,
    trim: true
  }

  //   type: String,
  //   name: String,
  //   duration: Number,
  //   weight: Number,
  //   reps: Number,
  //   sets: Number
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
