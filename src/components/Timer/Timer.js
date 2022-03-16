import { callStaticConstructors } from "igniteui-react-core";
import React from "react";
import { useStopwatch } from "react-timer-hook";

// days消した
function MyStopwatch() {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({});

  // 分・秒の時間表示を常に2桁にする関数
  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }

  return (
    <div className="TimerComponent">
      <div className="DisplayTime">
        <span>{hours}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={pause} className="pause-btn">PAUSE</button>
      <button onClick={start} className="start-btn">START</button>
      <button onClick={reset} className="reset-btn">RESET</button>
    </div>
  );
}


export default function Timer() {
  return (
    <>
      <div>
        <MyStopwatch />
      </div>
    </>
  );
}
