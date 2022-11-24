import React from 'react';
import ImageSkeleton from './ImageSkeleton';
import StringSkeleton from './StringSkeleton';

const PhotoCardSkeleton = () => {
  return (
    <div className="rounded-sm border-2 p-2 flex flex-col gap-2">
      <ImageSkeleton />
      <StringSkeleton />
    </div>
  );
};

export default PhotoCardSkeleton;
