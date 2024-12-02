import React from "react";
import { Resizable } from "re-resizable";

function WorkoutBar({
  workout,
  index,
  setWorkouts,
  workouts,
  timeScale,
  intensityScale,
  frameHeight,
  frameWidth,
  totalTime,
}) {
  const onResizeStop = (e, direction, ref, d) => {
    const newWidth = ref.offsetWidth; // in pixels
    const newHeight = ref.offsetHeight; // in pixels

    const newDuration = (newWidth / frameWidth) * totalTime; // Map back from pixels to duration
    const newIntensity = (newHeight / frameHeight) * 100; // Map back from pixels to intensity

    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = {
      ...workout,
      duration: newDuration,
      intensity: newIntensity,
    };

    setWorkouts(updatedWorkouts);
  };

  const leftPosition = timeScale(workout.startTime); // Map startTime to pixels
  const width = timeScale(workout.duration); // Map duration to pixels
  const height = intensityScale(workout.intensity); // Map intensity to pixels

  return (
    <Resizable
      size={{
        width: width,
        height: height,
      }}
      onResizeStop={onResizeStop}
      enable={{
        top: true,
        right: true,
        bottom: false,
        left: false,
        topRight: true,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      style={{
        position: "absolute",
        bottom: 0,
        left: leftPosition,
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {workout.name}
    </Resizable>
  );
}

export default WorkoutBar;
