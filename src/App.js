import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <PurpleBulb />
    </div>
  );
}

function PurpleBulb() {
  let isOn = false
  setInterval(() => {
    isOn = !isOn;
  }, 1000);
  return (
    <div class="bulb-container">
      <img className="{isOn ? 'light-on' : 'light-off'}" src={"https://staging.svgrepo.com/show/4204/light-bulb.svg"} />
    </div>
  );
}