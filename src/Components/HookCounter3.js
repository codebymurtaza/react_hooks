import React, {useState} from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({ firstName: e.target.value, ...name, firstName: e.target.value })
        }
      />
      <input type="text" 
      value={name.lastName}
      onChange={(e) =>
        setName({ lastName: e.target.value, ...name, lastName: e.target.value })
      }
      />
      <h3>Your firstName is: {name.firstName}</h3>
      <h3>Your lastName is: {name.lastName}</h3>
    </div>
  );
}

export default HookCounter3;
