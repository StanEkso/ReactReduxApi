import React, { useEffect } from "react";
import AlbumList from "../../components/albumlist/AlbumList";
import OptionalRenderer from "../../components/optionalRenderer/OptionalRenderer";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import { fetchAlbums } from "../../redux/actions/albums.actions";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
const AlbumsPage = () => {
  const { albums, isLoaded } = useAppSelector((state) => state.albums);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchAlbums() as any);
    }
  }, [dispatch, isLoaded]);

  return (
    <OptionalRenderer
      condition={isLoaded}
      fallback={<ListSkeleton withTitle />}
    >
      <AlbumList albums={albums} />
    </OptionalRenderer>
  );
};

export default AlbumsPage;
