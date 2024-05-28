import React, { useEffect, useState } from "react";

const SeacrhDebounce = () => {
  const [key, setKey] = useState("");
  const [defaultKey, setDefaultKey] = useState("");
  const debounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const debounceSetKey = (val) => {
    setKey(val);
  };
  const debounceGetData = debounce(debounceSetKey, 500);
  const handleChange = (e) => {
    setDefaultKey(e.target.value);
    debounceGetData(e.target.value);
  };

  return (
    <div>
      SeacrhDebounce
      <input onChange={handleChange}></input>
      <h2>Default Search key:{defaultKey}</h2>
      <h2>Debounced Search key:{key}</h2>
    </div>
  );
};

export default SeacrhDebounce;
