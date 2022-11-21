import React, { FC } from "react";

interface Props {
  maxWidth?: number;
}

const StringSkeleton: FC<Props> = ({ maxWidth = 480 }) => {
  return (
    <div
      className={`h-4 max-w-[480px] rounded-md bg-gray-300 max-w-[${maxWidth}px]`}
    />
  );
};

export default StringSkeleton;
