import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/album';

type Props = Album;

const AlbumElement: FC<Props> = ({ id, title }) => {
  return (
    <div className="flex space-x-4 items-center hover:text-blue-600 hover:underline my-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
        className="w-6 h-6"
        alt=""
      />
      <Link to={'/albums/' + id}>{title}</Link>
    </div>
  );
};

export default AlbumElement;
