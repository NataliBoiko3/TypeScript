import { useState } from "react";
import "./counter.css";
function Counter() {
    // явно указываем тип для значения в  useState
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  const handleMinus = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="lesson-container">
      <h4>Counter 💯</h4>
      <div>
        <button onClick={handleMinus}>-</button>
        <span className="counterValue">{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default Counter;