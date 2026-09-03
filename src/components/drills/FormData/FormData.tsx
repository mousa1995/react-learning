export const FormDataComponent = () => {
  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = formData.entries();
    const values = formData.values();
    const keys = formData.keys();
    console.log(`formData entries : ${[...entries]}\n`);
    console.log(`formData values : ${[...values]}\n`);
    console.log(`formData keys : ${[...keys]}\n`);
  };

  return (
    <>
      <form id="book-form" onSubmit={submitHandler}>
        <input name="title" value="title" />
        <input name="author" value="jhonDoes" />

        <select name="genre">
          <option value="novel">Novel</option>
          <option value="history">History</option>
          <option value="science">Science</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  );
};
