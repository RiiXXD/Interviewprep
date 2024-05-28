import "./App.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import LifecycleDemo from "./Topics/ClassLifeCycleComponenet";
// import Main from "./Topics/modal/Main";
// import VideoPlayer from "./Topics/ExampleuseRef/VideoPlayer";
import SeacrhDebounce from "./Topics/SeacrhDebounce";
const VideoPlayer = lazy(() => import("./Topics/ExampleuseRef/VideoPlayer"));
const Main = lazy(() => import("./Topics/modal/Main"));
const ProgressBar = lazy(() => import("./Topics/ProgressBar"));

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
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </div>
      {/* <LifecycleDemo /> */}.
      <Suspense fallback={<h1>loading main</h1>}>
        <Main />
      </Suspense>
      <Suspense fallback={<h1>loading VideoPlayer</h1>}>
        <VideoPlayer />
      </Suspense>
      <Suspense fallback={<h1>loading ProgressBar</h1>}>
        <ProgressBar />
      </Suspense>
      <SeacrhDebounce />
    </div>
  );
}

export default Timer;
