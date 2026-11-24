export type Exercise = {
  id: number;
  name: string;
  sets: WorkoutSet[];
};
export type WorkoutSet = {
  id: number;
  reps: number | null;
  weight: number | null;
};
