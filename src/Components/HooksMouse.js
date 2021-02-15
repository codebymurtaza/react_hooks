import React, { useState, useEffect } from "react";

function HooksMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("logMouse Position event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unMounting code!");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x} Y - {y}
    </div>
  );
}

export default HooksMouse;
