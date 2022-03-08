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

function Tasks_to_do() {
  return (
    <div>
      <p>Tasks to do</p>
    </div>
  );
}

function Tasks_completed() {
  return (
    <div>
      <p>Tasks completed this week</p>
    </div>
  );
}

function Your_tasks() {
  return (
    <div>
      <p>Your projects & Tasks</p>
    </div>
  )
}

export default function Timer() {
  return (
    <>
      <div>
        <Tasks_to_do />
      </div>
      <div>
        <Tasks_completed />
      </div>
      <div>
        <MyStopwatch />
      </div>
      <div>
        <Your_tasks />
      </div>
    </>
  );
}
