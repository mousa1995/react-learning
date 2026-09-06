const storedData = localStorage.getItem("profile");

const storeDataHandler = () => {
  if (storedData === null) {
    console.log("no Profile !");
  }
  if (storedData !== null) {
    try {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData);
    } catch {
      console.log(`localStorage.getItem("profile"); sent INVALID json`);
    }
  }
};

storeDataHandler();
