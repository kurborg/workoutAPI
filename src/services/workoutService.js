const workoutDb = require("../database/workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = ( filterParams) => {
    try {
        const allWorkouts = workoutDb.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
    }
}

const getOneWorkout = (workoutId) => {

    try {
        const workout = workoutDb.getOneWorkout(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }

}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };

    try {
        const createdWorkout = workoutDb.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }
    
}

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updatedWorkout = workoutDb.updateOneWorkout(workoutId, changes);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }

}

const deleteOneWorkout = (workoutId) => {
    try {
        workoutDb.deleteOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}