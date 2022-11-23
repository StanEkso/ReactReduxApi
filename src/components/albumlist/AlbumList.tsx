import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Album } from "../../types/album";

interface Props {
  albums: Album[];
}

const AlbumList: FC<Props> = ({ albums }) => {
  return (
    <div>
      <h3 className="font-bold mb-2 text-2xl">Albums</h3>
      {!albums.length && <h3>There are no albums here.</h3>}
      <div className="">
        {albums.map(({ id, title }) => (
          <div
            key={id}
            className="flex space-x-4 items-center hover:text-blue-600 hover:underline my-3"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
              className="w-6 h-6"
              alt=""
            />
            <Link to={"/albums/" + id}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
