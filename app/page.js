"use client";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("john doe");
  const [time, setTime] = useState(null);

  const clickHandler = () => {
    name === "john doe" ? setName("not john doe") : setName("john doe");
  };

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

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
