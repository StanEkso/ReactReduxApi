import React, { FC, useMemo } from "react";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import PhotoList from "../../components/photo/PhotoList";
import ReduxLoader from "../../components/reduxLoaders/ReduxLoader";
import CreatedBySkeleton from "../../components/skeletons/CreatedBySkeleton";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import PhotoCardSkeleton from "../../components/skeletons/PhotoCardSkeleton";
import TitleSkeleton from "../../components/skeletons/TitleSkeleton";
import { fetchAlbums } from "../../redux/actions/albums.actions";
import { fetchPhotos } from "../../redux/actions/photos.actions";
import { fetchUsers } from "../../redux/actions/users.actions";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { getAlbumAuthor, getAlbumById, getAlbumPhotos } from "../../utils";
import { NotFoundRedirect } from "../404";

const AlbumPage: FC = () => {
  const { id } = useLoaderData() as ReturnType<typeof loader>;
  const { albums, isLoaded } = useAppSelector((state) => state.albums);
  const { users } = useAppSelector((state) => state.users);

  const { photos } = useAppSelector((state) => state.photos);
  const currentAlbum = useMemo(
    () => getAlbumById({ id, albums }),
    [albums, id]
  );

  const currentAlbumUser = useMemo(
    () => getAlbumAuthor({ album: currentAlbum, users }),
    [currentAlbum, users]
  );
  const currentAlbumPhotos = useMemo(
    () => getAlbumPhotos({ album: currentAlbum, photos }),
    [currentAlbum, photos]
  );

  if (isLoaded && !currentAlbum) {
    return <NotFoundRedirect />;
  }
  return (
    <div>
      <div className="mb-4">
        <ReduxLoader
          fallback={<TitleSkeleton />}
          selector={(state) => state.albums}
          loaderAction={fetchAlbums}
        >
          <h3 className="font-bold mb-2 text-2xl">{currentAlbum?.title}</h3>
        </ReduxLoader>
        <ReduxLoader
          fallback={<CreatedBySkeleton />}
          selector={(state) => state.users}
          loaderAction={fetchUsers}
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
        </ReduxLoader>
        <ReduxLoader
          fallback={<ListSkeleton element={PhotoCardSkeleton} grid />}
          selector={(state) => state.photos}
          loaderAction={fetchPhotos}
        >
          <PhotoList photos={currentAlbumPhotos} />
        </ReduxLoader>
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
