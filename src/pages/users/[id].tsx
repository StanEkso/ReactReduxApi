import React, { FC, useEffect, useMemo } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import AlbumList from "../../components/albumlist/AlbumList";
import OptionalRenderer from "../../components/optionalRenderer/OptionalRenderer";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import UserCardSkeleton from "../../components/skeletons/UserCardSkeleton";
import UserCard from "../../components/usercard/UserCard";
import { fetchAlbums } from "../../redux/actions/albums.actions";
import { fetchUsers } from "../../redux/actions/users.actions";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { NotFoundRedirect } from "../404";
const UserPage: FC = () => {
  const { id } = useLoaderData() as ReturnType<typeof loader>;
  const dispatch = useAppDispatch();
  const { users, isLoaded: isUsersLoaded } = useAppSelector(
    (state) => state.users
  );
  const { albums, isLoaded: isAlbumsLoaded } = useAppSelector(
    (state) => state.albums
  );
  const selectedUser = useMemo(
    () => users.find((user) => user.id === id),
    [id, users]
  );
  const selectedUserAlbums = useMemo(
    () => albums.filter((album) => album.userId === selectedUser?.id),
    [albums, selectedUser?.id]
  );
  useEffect(() => {
    if (!isUsersLoaded) {
      dispatch(fetchUsers() as any);
    }
  });

  useEffect(() => {
    if (!isAlbumsLoaded) {
      dispatch(fetchAlbums() as any);
    }
  });

  if (!isUsersLoaded) {
    return <UserCardSkeleton />;
  }
  if (!selectedUser) return <NotFoundRedirect />;
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-10 xl:gap-12">
      <OptionalRenderer
        condition={isUsersLoaded && !!selectedUser}
        fallback={<UserCardSkeleton />}
      >
        <UserCard {...selectedUser} />
      </OptionalRenderer>
      <OptionalRenderer
        condition={isAlbumsLoaded}
        fallback={<ListSkeleton withTitle />}
      >
        <AlbumList albums={selectedUserAlbums} />
      </OptionalRenderer>
    </div>
  );
};

export default UserPage;
export const loader = ({ params: { id } }: LoaderFunctionArgs) => {
  const parsedId = id ? (isNaN(+id) ? 0 : +id) : 0;
  return {
    id: parsedId,
  };
};
