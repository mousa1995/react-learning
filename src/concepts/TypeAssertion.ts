type Status = "success" | "error" | "loading";

const response: string = "success";

const status = response as Status;

if (status === "success") {
  console.log("Request succeeded");
}
