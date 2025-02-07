import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      {workouts.map((workout) => (
        <div key={workout._id}>
          <h2>{workout.name}</h2>
          <p>Reps: {workout.reps}</p>
          <p>Load: {workout.load}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
