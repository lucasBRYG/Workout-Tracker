const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema(
    {
        date: {
            type: Date,
            required: "Enter the date of the workout.",
            default: Date.now,
        },
        excersizes: [
            {
                type: Schema.Types.ObjectId,
                ref: "Excersize"
            }
        ],
        totalDuration: {
            type: Number,
            required: "Enter the duration of your workout."
        }
    }
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;