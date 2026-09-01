import type { UserType } from "./types/User";

interface UserProps {
  user: UserType;
}

export const User = ({ user }: UserProps) => {
  return (
    <div key={user.id}>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.role}</div>
    </div>
  );
};
