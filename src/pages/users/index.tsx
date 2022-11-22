import React, { FC, useEffect } from "react";
import OptionalRenderer from "../../components/optionalRenderer/OptionalRenderer";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import UserList from "../../components/userlist/UserList";
import { fetchUsers } from "../../redux/actions/users.actions";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
const UsersPage: FC = () => {
  const { isLoaded, users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchUsers() as any);
    }
  }, [dispatch, isLoaded]);
  return (
    <OptionalRenderer
      condition={isLoaded}
      fallback={<ListSkeleton withTitle />}
    >
      <UserList users={users} />
    </OptionalRenderer>
  );
};

export default UsersPage;
