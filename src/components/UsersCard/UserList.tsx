import { User } from "./User";
import type { UserType } from "./types/User";

interface UserListProps {
  users: UserType[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <div>Users List</div>
      <div>
        {users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    </>
  );
};
