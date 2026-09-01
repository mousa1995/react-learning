interface UserCardProps {
  name: string;
  age: number;
  role: string;
}

export const UserCard = ({ name, age, role }: UserCardProps) => {
  return (
    <>
      <div>User Card</div>
      <div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{role}</div>
      </div>
    </>
  );
};
