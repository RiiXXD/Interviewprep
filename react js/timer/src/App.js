import "./App.css";
import React, { useState, useEffect } from "react";
import LifecycleDemo from "./Topics/ClassLifeCycleComponenet";
import Main from "./Topics/modal/Main";
import VideoPlayer from "./Topics/ExampleuseRef/VideoPlayer";
import ProgressBar from "./Topics/ProgressBar";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="app">
      <div className="time">
        {Math.floor(seconds / 3600)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor((seconds % 3600) / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      {/* <LifecycleDemo /> */}
      <Main />
      <VideoPlayer />
      <ProgressBar />
    </div>
  );
}

export default Timer;
