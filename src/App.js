import React, { useState, useEffect } from 'react';
import './style.css';
import lightBulb from './assets/light-bulb.svg';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <YellowBulb />
      <BlueBulb noPadding="{true}"/>
    </div>
  );
}

function YellowBulb() {
  const [isOnYellow, setIsOnYellow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnYellow((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bulb-container">
      <img
        className={isOnYellow ? 'light-on' : 'light-off'}
        src={lightBulb}
      />
    </div>
  );
}

function BlueBulb(noPadding) {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bulb-container" style={noPadding ? {paddingTop: 0} : {}}>
      <img
        className={isOn ? 'light-on-blue' : 'light-off-blue'}
        src={lightBulb}
      />
    </div>
  );
}
