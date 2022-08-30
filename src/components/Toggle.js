import {React, useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return <button onClick={setToggle(!Toggle)}>{toggle ? "on" : "off" }
  {toggle}</button>;
}

export default Toggle;
