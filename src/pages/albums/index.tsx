import React from 'react';
import AlbumList from '../../components/albumlist/AlbumList';
import ListSkeleton from '../../components/skeletons/ListSkeleton';
import { fetchAlbums } from '../../redux/albums/actions';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { selectAlbumsData, selectAlbumsIsLoaded } from '../../redux/albums/selectors';
import ReduxLoader from '../../components/reduxLoaders/ReduxLoader';
const AlbumsPage = () => {
  const albums = useAppSelector(selectAlbumsData);
  return (
    <ReduxLoader
      selector={selectAlbumsIsLoaded}
      fallback={<ListSkeleton withTitle />}
      loaderAction={fetchAlbums}
    >
      <AlbumList albums={albums} />
    </ReduxLoader>
  );
};

export default AlbumsPage;
