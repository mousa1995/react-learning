import { UserList } from "./UserList";

export const UserCardController = () => {
  const users = [
    {
      name: "Ali",
      age: 25,
      role: "Developer",
      id: "1",
    },
    {
      name: "Sara",
      age: 22,
      role: "Designer",
      id: "2",
    },
  ];
  return <UserList users={users} />;
};
