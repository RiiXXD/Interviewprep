import React, { useState } from "react";
import "./Progress.css";

const ProgressBar = () => {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));
  return (
    <>
      <div className="container">
        <div className="progress" style={{ width: `${val}%` }}></div>
      </div>
      <label>Percentage</label>
      <input type="number" onChange={setValuer} value={val} />
    </>
  );
};

export default ProgressBar;
