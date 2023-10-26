import { useState } from "react";

export default function Timer(props) {
  const [time, setTime] = useState(props.start);

  setTimeout(() => {
    setTime(time => time + 1);
  }, 1000);



  return (
    <div>
      <h2>Timer</h2>

      <p>Time: {time}</p>
    </div>
  );
}
