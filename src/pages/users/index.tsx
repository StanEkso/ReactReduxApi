import React, { FC } from 'react';
import ReduxLoader from '../../components/reduxLoaders/ReduxLoader';
import ListSkeleton from '../../components/skeletons/ListSkeleton';
import UserList from '../../components/user/UserList';
import { fetchUsers } from '../../redux/users/actions';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectUsersData, selectUsersIsLoaded } from '../../redux/users/selectors';

const UsersPage: FC = () => {
  const users = useAppSelector(selectUsersData);
  return (
    <ReduxLoader
      fallback={<ListSkeleton withTitle />}
      selector={selectUsersIsLoaded}
      loaderAction={fetchUsers}
    >
      <UserList users={users} />
    </ReduxLoader>
  );
};

export default UsersPage;
