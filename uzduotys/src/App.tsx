import { exercises } from "./exercises";
import "./App.css";
import { WorkoutHeader } from "./WorkoutHeader";
import { ExerciseCard } from "./ExerciseCard";
function App() {
  return (
    <main>
      <WorkoutHeader title="My Workout" subtitle="Track your progress" />

      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </main>
  );
}

export default App;
