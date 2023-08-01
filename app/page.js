"use client";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("john doe");
  const [time, setTime] = useState(null);

  const clickHandler = () => {
    name === "john doe" ? setName("not john doe") : setName("john doe");
  };

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <div>
      Hello World!
      <h1>{name} {time}</h1>
      <button onClick={clickHandler}>Change name</button>
      {/* <p>{time}</p> */}
    </div>
  );
};

export default page;
