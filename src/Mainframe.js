import React from "react";
import { Droppable } from "react-beautiful-dnd";
import WorkoutBar from "./WorkoutBar";

function Mainframe({ workouts, setWorkouts, totalTime }) {
  const frameWidth = 800;
  const frameHeight = 400;

  const timeScale = (value) => (value / totalTime) * frameWidth;
  const intensityScale = (value) => (value / 100) * frameHeight;

  return (
    <Droppable droppableId="mainframe">
      {(provided) => (
        <div
          className="relative border ml-4"
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            width: `${frameWidth}px`,
            height: `${frameHeight}px`,
          }}
        >
          {/* Display the workouts as bars */}
          {workouts.map((workout, index) => (
            <WorkoutBar
              key={index}
              workout={workout}
              index={index}
              setWorkouts={setWorkouts}
              workouts={workouts}
              timeScale={timeScale}
              intensityScale={intensityScale}
              frameHeight={frameHeight}
              frameWidth={frameWidth}
              totalTime={totalTime}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Mainframe;
