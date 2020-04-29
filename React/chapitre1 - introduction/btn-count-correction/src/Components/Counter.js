import React, { useState, useEffect, useRef, useCallback } from "react";

import Button from "./Button";
import { restElement } from "@babel/types";

const Counter = ({ delay }) => {
  const intervalRef = useRef(null);

  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  const start = () => {
    if (intervalRef.current !== null) return;
    setActive(!active);
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, delay);
  };

  const stop = () => {
    if (intervalRef.current == null) return;
    setActive(!active);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      reset();
      // clearInterval(intervalRef.current);
      // intervalRef.current = null;
      // setCount(0);
    };
  }, []);
  // TODO

  return (
    <>
      <p className="btn btn-block">Count : {count}</p>
      <Button handleClick={start} label="start" active={active} />
      <Button handleClick={stop} lavel="stop" active={!active} />
      <Button />
    </>
  );
};

export default Counter;
