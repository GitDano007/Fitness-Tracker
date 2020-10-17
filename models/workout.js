const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    weight: {
      type: Number,
      trim: true
    },
    sets: {
      type: Number,
      trim: true
    },
    Reps: {
      type: Number,
      trim: true
    },
    Distance: {
      type: Number,
      trim: true
    },
    Duration: {
      type: Number,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now
    },

    exercises: []
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
