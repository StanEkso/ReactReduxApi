import React, { FC, Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { getAlbumById, getAlbumPhotos, getUserById } from "../../api";
import PhotoList from "../../components/photo/PhotoList";
import CreatedBySkeleton from "../../components/skeletons/CreatedBySkeleton";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import PhotoCardSkeleton from "../../components/skeletons/PhotoCardSkeleton";
import TitleSkeleton from "../../components/skeletons/TitleSkeleton";
import { User } from "../../types/user";
import { NotFoundRedirect } from "../404";

const AlbumPage: FC = () => {
  const { albumPromise, photosPromise } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <div>
      <Suspense fallback={<TitleSkeleton />}>
        <Await
          errorElement={<NotFoundRedirect />}
          resolve={albumPromise}
          children={(album) => (
            <>
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-2xl">{album.title}</h3>
                <Suspense fallback={<CreatedBySkeleton />}>
                  <Await
                    resolve={getUserById(album.userId)}
                    children={({ name, id }: User) => (
                      <p>
                        Created by{" "}
                        <Link
                          to={"/users/" + id}
                          className="hover:underline hover:text-blue-600"
                        >
                          {name}
                        </Link>
                      </p>
                    )}
                  />
                </Suspense>
              </div>
            </>
          )}
        />
      </Suspense>
      <Suspense fallback={<ListSkeleton element={PhotoCardSkeleton} grid />}>
        <Await
          resolve={photosPromise}
          children={(photos) => <PhotoList photos={photos} />}
        />
      </Suspense>
    </div>
  );
};

export default AlbumPage;

export const loader = ({ params: { id } }: LoaderFunctionArgs) => {
  return {
    albumPromise: getAlbumById(id ? +id : 0),
    photosPromise: getAlbumPhotos(id ? +id : 0),
  };
};
