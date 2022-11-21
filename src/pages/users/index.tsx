import React, { FC, Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { getUsers } from "../../api";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import UserList from "../../components/userlist/UserList";
const UsersPage: FC = () => {
  const { userPromise } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <Suspense fallback={<ListSkeleton withTitle />}>
      <Await
        resolve={userPromise}
        children={(users) => <UserList users={users} />}
      />
    </Suspense>
  );
};

export default UsersPage;

export const loader = () => {
  return { userPromise: getUsers() };
};
