import { UserCard } from "./UserCard";

export const UserCardController = () => {
  const users = [
    {
      name: "Ali",
      age: 25,
      role: "Developer",
    },
    {
      name: "Sara",
      age: 22,
      role: "Designer",
    },
  ];
  return <UserCard users={users} />;
};
