import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/user';

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h3 className="font-bold mb-2 text-2xl">Users</h3>
      {users.map(({ id, name }) => (
        <div key={id}>
          <Link to={`/users/${id}`} className="hover:underline hover:text-blue-600">
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserList);
