import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

function WorkoutList({ workoutOptions }) {
  return (
    <Droppable droppableId="workoutList" isDropDisabled={true}>
      {(provided) => (
        <div
          className="w-1/4 p-4 border-r"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2 className="text-xl font-bold mb-4">Available Workouts</h2>
          {workoutOptions.map((workout, index) => (
            <Draggable key={workout.id} draggableId={workout.id} index={index}>
              {(provided) => (
                <div
                  className="p-2 mb-2 bg-gray-200 rounded"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {workout.name}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default WorkoutList;
