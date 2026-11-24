# Workout Tracker

A mobile-first workout tracking app built while learning React,
TypeScript, and GitHub collaboration workflows.

The app aims to help users organize exercises, log workout sets,
and track their progress over time.

## Current Features

- Display exercises and their sets.
- Add sets to an exercise.
- Show unset reps and weight as "---".
- Basic responsive layout for mobile screens.

## Planned Features

- Scrollable number pickers for reps and weight.
- Add and remove exercises.
- Remove sets.
- Save workouts locally.
- View workout history and progress.
- AI-assisted food photo analysis with estimated calories
  and user-adjustable portions.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- ESLint

## Getting Started

Requires Node.js and npm.

From the repository root:

    cd uzduotys
    npm install
    npm run dev

Open the local URL shown in the terminal.

## Checks

Run these commands from the uzduotys directory:

    npm run lint
    npm run build

## Project Structure

    uzduotys/
      src/
        App.tsx             Main application component
        WorkoutHeader.tsx   Workout heading
        ExerciseCard.tsx    Exercise and set display
        exercises.ts        Sample exercise data
        types.ts            Shared TypeScript types
        App.css             Component styles
        index.css           Global styles

## Development Workflow

Features are developed on separate branches and merged into main
through GitHub pull requests.

## Project Status

Work in progress. Workout data is currently held in component state
and resets when the page is reloaded.
