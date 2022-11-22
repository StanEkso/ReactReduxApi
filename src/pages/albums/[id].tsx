import React, { FC, useEffect, useMemo } from "react";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import OptionalRenderer from "../../components/optionalRenderer/OptionalRenderer";
import PhotoList from "../../components/photo/PhotoList";
import CreatedBySkeleton from "../../components/skeletons/CreatedBySkeleton";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import PhotoCardSkeleton from "../../components/skeletons/PhotoCardSkeleton";
import TitleSkeleton from "../../components/skeletons/TitleSkeleton";
import { fetchAlbums } from "../../redux/actions/albums.actions";
import { fetchPhotos } from "../../redux/actions/photos.actions";
import { fetchUsers } from "../../redux/actions/users.actions";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { NotFoundRedirect } from "../404";

const AlbumPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useLoaderData() as ReturnType<typeof loader>;
  const { isLoaded: isAlbumsLoaded, albums } = useAppSelector(
    (state) => state.albums
  );
  const { isLoaded: isUsersLoaded, users } = useAppSelector(
    (state) => state.users
  );

  const { isLoaded: isPhotosLoaded, photos } = useAppSelector(
    (state) => state.photos
  );
  const currentAlbum = useMemo(() => {
    return albums.find((album) => album.id === id);
  }, [albums, id]);
  const currentAlbumUser = useMemo(() => {
    return users.find((user) => user.id === currentAlbum?.userId);
  }, [currentAlbum?.userId, users]);
  const currentAlbumPhotos = useMemo(() => {
    return photos.filter((photo) => photo.albumId === currentAlbum?.id);
  }, [currentAlbum?.id, photos]);
  useEffect(() => {
    if (!isAlbumsLoaded) {
      dispatch(fetchAlbums() as any);
    }
  }, [dispatch, isAlbumsLoaded]);

  useEffect(() => {
    if (!isUsersLoaded) {
      dispatch(fetchUsers() as any);
    }
  }, [dispatch, isAlbumsLoaded, isUsersLoaded]);

  useEffect(() => {
    if (!isPhotosLoaded) {
      dispatch(fetchPhotos() as any);
    }
  }, [dispatch, isPhotosLoaded]);

  if (
    (!currentAlbum && isAlbumsLoaded) ||
    (!currentAlbumUser && isUsersLoaded) ||
    (!currentAlbumPhotos && isPhotosLoaded)
  ) {
    return <NotFoundRedirect />;
  }

  return (
    <div>
      <div className="mb-4">
        <OptionalRenderer
          fallback={<TitleSkeleton />}
          condition={isAlbumsLoaded}
        >
          <h3 className="font-bold mb-2 text-2xl">{currentAlbum?.title}</h3>
          <OptionalRenderer
            fallback={<CreatedBySkeleton />}
            condition={isUsersLoaded}
          >
            <p>
              Created by{" "}
              <Link
                to={"/users/" + currentAlbumUser?.id}
                className="hover:underline hover:text-blue-600"
              >
                {currentAlbumUser?.name}
              </Link>
            </p>
          </OptionalRenderer>
        </OptionalRenderer>
        <OptionalRenderer
          fallback={<ListSkeleton element={PhotoCardSkeleton} grid />}
          condition={isPhotosLoaded}
        >
          <PhotoList photos={currentAlbumPhotos} />
        </OptionalRenderer>
      </div>
    </div>
  );
};

export default AlbumPage;

export const loader = ({ params: { id } }: LoaderFunctionArgs) => {
  const parsedId = id ? (isNaN(+id) ? 0 : +id) : 0;
  return {
    id: parsedId,
  };
};
