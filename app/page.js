"use client";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("john doe");
  const [time, setTime] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const { username } = event.target;
    setName(username.value);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
