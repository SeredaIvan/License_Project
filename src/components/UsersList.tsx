import {User} from "@/types/types";

type Props = {
  users: User[];
};

const UsersList = ( {users}:Props ) => {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}, CreatedAt: {new Date(user.createdAt).toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;