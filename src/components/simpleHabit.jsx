import React, { useRef, useCallback, useEffect, useState } from "react";

// fucntion execues if prop or state changes
// should useState be updated to 0 ? No, React will save the data
const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  // it will make and save the data
  const spanRef = useRef();

  // samething (but cautions)
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  });
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
