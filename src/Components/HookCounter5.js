import React, { useState, useEffect } from "react";

function HookCounter5() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // UseEffect section
  useEffect(() => {
    console.log("UseEffect updated document title");
    document.title = `You clicked! ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default HookCounter5;
