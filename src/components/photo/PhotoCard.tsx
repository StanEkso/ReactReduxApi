import React, { FC } from "react";
import { Photo } from "../../types/photo";

type Props = Photo;

const PhotoCard: FC<Props> = ({ title, url }) => {
  return (
    <div className="rounded-sm border-2 p-2">
      <img src={url} alt={title} className="max-w-full" />
      <h4 className="text-xl text-center mt-2">{title}</h4>
    </div>
  );
};

export default React.memo(PhotoCard);
