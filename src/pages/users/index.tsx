import React, { FC } from "react";
import ReduxLoader from "../../components/reduxLoaders/ReduxLoader";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import UserList from "../../components/userlist/UserList";
import { fetchUsers } from "../../redux/users/actions";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { RootState } from "../../redux/store";
const usersSelector = (state: RootState) => state.users;

const UsersPage: FC = () => {
  const { users } = useAppSelector(usersSelector);
  return (
    <ReduxLoader
      fallback={<ListSkeleton withTitle />}
      selector={usersSelector}
      loaderAction={fetchUsers}
    >
      <UserList users={users} />
    </ReduxLoader>
  );
};

export default UsersPage;
