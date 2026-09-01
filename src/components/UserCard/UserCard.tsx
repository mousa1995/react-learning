interface User {
  name: string;
  age: number;
  role: string;
}

interface UserCardProps {
  users: User[];
}

export const UserCard = ({ users }: UserCardProps) => {
  return (
    <>
      <div>User Card</div>
      <div>
        {users.map((user, idx) => {
          return (
            <div key={idx}>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.role}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
