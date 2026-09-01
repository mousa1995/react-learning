import { UserCard } from "./UserCard";

export const UserCardController = () => {
  const data = {
    name: "Ali",
    age: 25,
    role: "Developer",
  };
  return <UserCard name={data.name} age={data.age} role={data.role} />;
};
