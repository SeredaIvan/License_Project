// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.


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