import React, { FC } from 'react';
import { Album } from '../../types/album';
import AlbumElement from './AlbumElement';

interface Props {
  albums: Album[];
}

const AlbumList: FC<Props> = ({ albums }) => {
  return (
    <div>
      <h3 className="font-bold mb-2 text-2xl">Albums</h3>
      {!albums.length && <h3>There are no albums here.</h3>}
      <div className="">
        {albums.map((album) => (
          <AlbumElement key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
