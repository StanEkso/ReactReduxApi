import React, { FC } from 'react';
import { Photo } from '../../types/photo';
import PhotoCard from './PhotoCard';

interface PhotoListProps {
  photos: Photo[];
}

const PhotoList: FC<PhotoListProps> = ({ photos }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-2">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </div>
  );
};

export default React.memo(PhotoList);
