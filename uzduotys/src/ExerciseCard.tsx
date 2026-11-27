import { useState } from "react";
import type { Exercise, WorkoutSet } from "./types";

type ExerciseCardProps = {
  exercise: Exercise;
};

export function ExerciseCard(props: ExerciseCardProps) {
  // Kiekviena serija saugo savo reps ir weight.
  const [sets, setSets] = useState(props.exercise.sets);

  function addSet() {
    const newSet: WorkoutSet = {
      id: Date.now(),
      reps: null,
      weight: null,
    };

    setSets((previousSets) => [...previousSets, newSet]);
  }

  return (
    <article>
      <h2>{props.exercise.name}</h2>
      <p>{sets.length} sets</p>

      {sets.map((set, index) => (
        <div key={set.id}>
          <p>Set {index + 1}</p>

          {/* Čia kursime pakartojimų įvedimo lauką. */}
          <p>{set.reps ?? "---"} reps</p>

          {/* Čia kursime svorio įvedimo lauką. */}
          <p>{set.weight ?? "---"} kg</p>
        </div>
      ))}

      <button type="button" onClick={addSet}>
        Add set
      </button>
    </article>
  );
}
