type WorkoutHeaderProps = {
  title: string;
  subtitle: string;
};
export function WorkoutHeader(props: WorkoutHeaderProps) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}
