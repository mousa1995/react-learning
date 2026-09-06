type User = {
  name: string;
  age: number;
};

const data = '{"name":"Ali","age":"twenty"}';

const parseFn = () => {
  try {
    const parsedData = JSON.parse(data);
    if (
      typeof parsedData.name === "string" &&
      typeof parsedData.age === "number"
    ) {
      console.log("valid user");
    } else {
      console.log("invalid User afther parse");
    }
  } catch {
    console.log("Invalid Json");
  }
};

parseFn();
