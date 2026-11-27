import type { Exercise } from "./types";
import { useState, useRef, useLayoutEffect } from "react";

type ExerciseCardProps = {
  exercise: Exercise;
};

export function ExerciseCard(props: ExerciseCardProps) {
  const [sets, setSets] = useState(props.exercise.sets);
  const wheelRef = useRef<HTMLDivElement>(null);
  const positionedSetId = useRef<number | null>(null);
  const [selectedSetId, setSelectedSetId] = useState<number | null>(null);
  const repsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function addSet() {
    const newSet = {
      id: Date.now(),
      reps: null,
      weight: null,
    };
    setSets((previousSets) => [...previousSets, newSet]); //Paima senus setus => grazina [visus senus, ir nauja seta sukuria]
  }
  function updateReps(reps: number) {
    setSets((previousSets) =>
      previousSets.map((set) => {
        if (set.id === selectedSetId) {
          return { ...set, reps };
        }

        return set;
      }),
    );
  }
  const selectedSet = sets.find((set) => set.id === selectedSetId);
  const currentReps = selectedSet?.reps ?? 1;
  const selectedIndex = repsOptions.indexOf(currentReps);

  useLayoutEffect(() => {
    if (selectedSetId === null) {
      positionedSetId.current = null;
      return;
    }

    if (wheelRef.current && positionedSetId.current !== selectedSetId) {
      wheelRef.current.scrollTop = selectedIndex * 40;
      positionedSetId.current = selectedSetId;
    }
  }, [selectedSetId, selectedIndex]);
  return (
    <article>
      <h2>{props.exercise.name}</h2>
      <p>{sets.length} sets</p>
      {sets.map((set) => (
        <div key={set.id}>
          <button onClick={() => setSelectedSetId(set.id)}>
            {set.reps ?? "---"} reps
          </button>
        </div>
      ))}
      {selectedSetId !== null && (
        <div>
          <div
            className="reps-wheel"
            ref={wheelRef}
            onScroll={(event) => {
              const scrollTop = event.currentTarget.scrollTop;
              const index = Math.round(scrollTop / 40);
              const selectedReps = repsOptions[index];
              if (selectedReps !== undefined) {
                updateReps(selectedReps);
              }
            }}
          >
            {repsOptions.map((reps) => (
              <div className="reps-option" key={reps}>
                {reps}
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedSetId(null)}> Close</button>
        </div>
      )}
      <button onClick={addSet}>Add set</button>
    </article>
  );
}
