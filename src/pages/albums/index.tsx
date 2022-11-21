import React, { Suspense } from "react";
import { Await, LoaderFunction, useLoaderData } from "react-router-dom";
import { getAlbums } from "../../api";
import AlbumList from "../../components/albumlist/AlbumList";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
const AlbumsPage = () => {
  const { albumsPromise } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <Suspense fallback={<ListSkeleton withTitle />}>
      <Await
        resolve={albumsPromise}
        children={(albums) => <AlbumList albums={albums} />}
      />
    </Suspense>
  );
};

export default AlbumsPage;
export const loader: LoaderFunction = () => {
  return {
    albumsPromise: getAlbums(),
  };
};
