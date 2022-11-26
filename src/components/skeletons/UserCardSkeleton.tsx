import React, { FC } from 'react';
import IconSkeleton from './IconSkeleton';
import StringSkeleton from './StringSkeleton';
import TitleSkeleton from './TitleSkeleton';

const UserCard: FC = () => {
  return (
    <div className="rounded-md p-4 border-2 flex flex-col gap-1 animate-pulse">
      <TitleSkeleton />
      <StringSkeleton />

      <div className="flex gap-2 items-center">
        <IconSkeleton />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <IconSkeleton />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <IconSkeleton />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <IconSkeleton />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
    </div>
  );
};

export default React.memo(UserCard);
