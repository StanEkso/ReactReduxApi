import React, { FC, useMemo } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import AlbumList from '../../components/album/AlbumList';
import ReduxLoader from '../../components/reduxLoaders/ReduxLoader';
import ListSkeleton from '../../components/skeletons/ListSkeleton';
import UserCardSkeleton from '../../components/skeletons/UserCardSkeleton';
import UserCard from '../../components/user/UserCard';
import { fetchAlbums } from '../../redux/albums/actions';
import { fetchUsers } from '../../redux/users/actions';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { NotFoundRedirect } from '../404';
import { selectUsersIsLoaded, selectUsersState } from '../../redux/users/selectors';
import { selectAlbumsData, selectAlbumsIsLoaded } from '../../redux/albums/selectors';
const UserPage: FC = () => {
  const { id } = useLoaderData() as ReturnType<typeof loader>;
  const { users, isLoaded: isUsersLoaded } = useAppSelector(selectUsersState);
  const albums = useAppSelector(selectAlbumsData);
  const selectedUser = useMemo(() => users.find((user) => user.id === id), [id, users]);
  const selectedUserAlbums = useMemo(
    () => albums.filter((album) => album.userId === selectedUser?.id),
    [albums, selectedUser?.id]
  );

  if (isUsersLoaded && !selectedUser) return <NotFoundRedirect />;
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-10 xl:gap-12">
      <ReduxLoader
        fallback={<UserCardSkeleton />}
        selector={selectUsersIsLoaded}
        loaderAction={fetchUsers}
      >
        {selectedUser && <UserCard {...selectedUser} />}
      </ReduxLoader>
      <ReduxLoader
        fallback={<ListSkeleton withTitle />}
        selector={selectAlbumsIsLoaded}
        loaderAction={fetchAlbums}
      >
        <AlbumList albums={selectedUserAlbums} />
      </ReduxLoader>
    </div>
  );
};

export default UserPage;
export const loader = ({ params: { id } }: LoaderFunctionArgs) => {
  const parsedId = id ? (isNaN(+id) ? 0 : +id) : 0;
  return {
    id: parsedId
  };
};
