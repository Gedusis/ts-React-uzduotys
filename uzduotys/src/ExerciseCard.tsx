import type { Exercise } from "./types";
import { useState } from "react";

type ExerciseCardProps = {
  exercise: Exercise;
};

export function ExerciseCard(props: ExerciseCardProps) {
  const [sets, setSets] = useState(props.exercise.sets);

  function addSet() {
    const newSet = {
      id: Date.now(),
      reps: null,
      weight: null,
    };
    setSets((previousSets) => [...previousSets, newSet]); //Paima senus setus => grazina [visus senus, ir nauja seta sukuria]
  }
  return (
    <article>
      <h2>{props.exercise.name}</h2>
      <p>{sets.length} sets</p>
      {sets.map((set, index) => (
        <div key={set.id}>
          Set {index + 1}: {set.reps ?? `---`} reps x {set.weight ?? `---`} kg
        </div>
      ))}
      <button onClick={addSet}>Add set</button>
    </article>
  );
}
