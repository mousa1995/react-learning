//const data = '[{"name":"Ali","age":25},{"name":"Reza","age":30}]'; valid data
const data = '[{"name":"Ali","age":25},{"name":"Reza","age":"thirty"}]';

// type User = {
//   name: string;
//   age: number;
// };

const parseFn = () => {
  try {
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      const correctType = parsedData.every((el) => {
        return typeof el["name"] === "string" && !isNaN(Number(el["age"]));
      });
      correctType ? console.log("valid data") : console.log("invalid data");
    } else {
      console.log("data is not a array");
    }
  } catch {
    console.log("invalid json");
  }
};

parseFn();
