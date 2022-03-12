import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({});

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function TasksToDo() {
  return (
    <div>
      <p>Tasks to do</p>
    </div>
  );
}

function TasksCompleted() {
  return (
    <div>
      <p>Tasks completed this week</p>
    </div>
  );
}

function YourTasks() {
  return (
    <div>
      <p>Your projects & Tasks</p>
    </div>
  );
}

export default function Timer() {
  return (
    <>
      <div>
        <TasksToDo />
      </div>
      <div>
        <TasksCompleted />
      </div>
      <div>
        <MyStopwatch />
      </div>
      <div>
        <YourTasks />
      </div>
    </>
  );
}
