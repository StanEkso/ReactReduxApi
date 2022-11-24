import React, { FC } from 'react';
import { Link } from 'react-router-dom';
const MainPage: FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-4 text-center">Welcome here!</h1>
      <p className="text-center text-2xl mb-4">What you do wanna do?</p>
      <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center">
        <Link
          to="/users"
          className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer"
        >
          Check users
        </Link>
        <Link
          to="/albums"
          className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer"
        >
          Check albums
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
