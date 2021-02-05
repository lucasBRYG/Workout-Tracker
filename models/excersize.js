const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excersize = new Schema(
    {
        muscle: {
            type: String,
            required: "Enter a muscle group.",
            trim: true
        },
        activity: {
            type: String,
            required: "Enter and excersize.",
            trim: true
        },
        duration: {
            type: Number,
            required: "Enter duration of excersize."
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        weight: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }
);

const Excersize = mongoose.model("Excersize", excersize);

module.exports = Excersize;