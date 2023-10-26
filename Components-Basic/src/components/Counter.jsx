import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount((count) => count + 1);
  };

  const onClearClick = () => {
    setCount(0);
  };

  let message = null;

  switch (count) {
    case 1:
      message = "First Blood";
      break;
    case 2:
      message = "Double Kill";
      break;
    case 3:
      message = "Triple Kill";
      break;
    case 4:
      message = "Multy Kill";
      break;
    case 5:
      message = "Killing Spree";
      break;
    case 6:
      message = "Unstoppable";
      break;
    case 7:
      message = "God Like";
      break;
    default:
      message = "God Like";
      break;
  }

  return (
    <div>
      <h2>Counter</h2>
    
      {count <= 0 ? <p>Please start incrementing</p> : <p>{message}</p>}

      <p>Count: {count}</p>

      <button onClick={onIncrementClick}>+</button>
      <button onClick={onClearClick}>Clear</button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
