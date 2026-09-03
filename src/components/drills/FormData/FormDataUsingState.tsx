type Genre = "horror" | "drama";

import React from "react";

export const FormDataUsingState = () => {
  const [title, setTitle] = React.useState("book");
  const [director, setDirector] = React.useState("jhonDoe");
  const [genre, setGenre] = React.useState<Genre>("drama");

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const directorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirector(e.target.value);
  };
  const genreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "horror" || value === "drama") {
      setGenre(value);
    }
  };
  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`title: ${title} \n`);
    console.log(`director: ${director}\n`);
    console.log(`genre: ${genre}\n`);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" value={title} onChange={titleHandler} />
        <input
          type="text"
          name="director"
          value={director}
          onChange={directorHandler}
        />
        <select name="genre" onChange={genreHandler} value={genre}>
          <option value="horror">horror</option>
          <option value="drama">drama</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
