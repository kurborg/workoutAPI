const express = require("express");

const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;
const v1Router = require("./v1/routes/index");

// For Testing Purposes
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

app.use(bodyParser.json())
app.use("/api/v1", v1Router);
app.use("/api/v1/workouts", v1WorkoutRouter);

const logText = 'API is listening on port ' + PORT;

app.listen(PORT, () => {
    console.log(logText);
});



