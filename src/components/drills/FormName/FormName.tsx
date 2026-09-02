import React, { useState } from "react";

export const UsernameForm = () => {
  const [username, setUsername] = useState("");

  const SubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
