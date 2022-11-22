import React, { FC } from "react";
import StringSkeleton from "./StringSkeleton";
import TitleSkeleton from "./TitleSkeleton";

const UserCard: FC = () => {
  return (
    <div className="rounded-md p-4 border-2 flex flex-col gap-1 animate-pulse">
      <TitleSkeleton />
      <StringSkeleton maxWidth={160} />

      <div className="flex gap-2 items-center">
        <div className="h-6 w-6 rounded-md bg-gray-300 mb-2" />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="h-6 w-6 rounded-md bg-gray-300 mb-2" />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="h-6 w-6 rounded-md bg-gray-300 mb-2" />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="h-6 w-6 rounded-md bg-gray-300 mb-2" />
        <div className="h-4 w-[240px] rounded-md bg-gray-300 mb-2" />
      </div>
    </div>
  );
};

export default React.memo(UserCard);
