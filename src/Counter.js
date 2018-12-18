import React, { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
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
