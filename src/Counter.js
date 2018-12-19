import React, { useState, useEffect } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  //   The function userEffect is loaded when component is re-rendered and mount.
  useEffect(() => {
    console.log("rendred:", value);
  });
  console.log("redering:", value);
  return (
    <div>
      <p>
        You're click <b>{value}</b> times.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
export default Counter;
