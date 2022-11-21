import React, { FC, Suspense } from "react";
import { Await, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getUserAlbums, getUserById } from "../../api";
import AlbumList from "../../components/albumlist/AlbumList";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import UserCardSkeleton from "../../components/skeletons/UserCardSkeleton";
import UserCard from "../../components/usercard/UserCard";
import { NotFoundRedirect } from "../404";
const UserPage: FC = () => {
  const { userPromise, albumsPromise } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-10 xl:gap-12">
      <Suspense
        fallback={
          <>
            <UserCardSkeleton />
            <ListSkeleton withTitle />
          </>
        }
      >
        <Await
          resolve={userPromise}
          errorElement={<NotFoundRedirect />}
          children={(user) => <UserCard {...user} />}
        />
        <Await
          resolve={albumsPromise}
          errorElement={<NotFoundRedirect />}
          children={(albums) => <AlbumList albums={albums} />}
        />
      </Suspense>
    </div>
  );
};

export default UserPage;
export const loader = ({ params: { id } }: LoaderFunctionArgs) => {
  return {
    userPromise: getUserById(id ? +id : 0),
    albumsPromise: getUserAlbums(id ? +id : 0),
  };
};
