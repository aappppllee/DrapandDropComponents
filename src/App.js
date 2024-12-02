import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import WorkoutList from "./WorkoutList";
import Mainframe from "./Mainframe";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const workoutOptions = [
    { id: "workout-1", intensity: 50, duration: 10, name: "Workout 1" },
    { id: "workout-2", intensity: 100, duration: 5, name: "Workout 2" },
    { id: "workout-3", intensity: 40, duration: 20, name: "Workout 3" },
  ];

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === "mainframe") {
      // Get the workout from the list
      const workout = workoutOptions.find((w) => w.id === draggableId);

      // Calculate the start time
      const lastWorkout = workouts[workouts.length - 1];
      const startTime = lastWorkout
        ? lastWorkout.startTime + lastWorkout.duration
        : 0;

      // Add the workout to the mainframe
      setWorkouts([...workouts, { ...workout, startTime }]);
    }
  };

  // Calculate total time
  const totalTime =
    workouts.reduce((sum, workout) => sum + workout.duration, 0) || 60; // Default to 60 mins

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        <WorkoutList workoutOptions={workoutOptions} />
        <Mainframe
          workouts={workouts}
          setWorkouts={setWorkouts}
          totalTime={totalTime}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
