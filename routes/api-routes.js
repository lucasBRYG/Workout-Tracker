const router = require("express").Router();
const Workout = require("../models/workout.js");
const Excersize = require("../models/excersize.js")

router.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({date: -1}).then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("api/workouts/range", (req,res) => {
    Workout.find({}).sort({date: 1}).limit(7).populate("excersizes").then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req,res) => {
    Exzersize.create(req.body).then(workout => {
        res.json(workout);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.post("api/workouts", (req,res) => {
    Workout.create(body).then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;