import React, { useEffect, useState } from "react";

function InterverlFunctionalCounter() {
  const [count, setCount] = useState(0);

  // declaring the tick function
  const tick = () => {
    setCount(count + 1);
  };

  // using  useEffect with tick
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default InterverlFunctionalCounter;
