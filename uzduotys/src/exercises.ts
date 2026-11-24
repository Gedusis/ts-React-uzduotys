import type { Exercise } from "./types";

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    sets: [
      { id: 1, reps: 6, weight: 65 },
      { id: 2, reps: 6, weight: 65 },
    ],
  },
  {
    id: 2,
    name: "Pull ups",
    sets: [
      { id: 1, reps: 6, weight: 65 },
      { id: 2, reps: 6, weight: 65 },
    ],
  },
];
