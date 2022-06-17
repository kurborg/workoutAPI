const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController")

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutID", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutID", workoutController.updateOneWorkout);

router.delete(":/workoutID", workoutController.deleteOneWorkout);

module.exports = router;