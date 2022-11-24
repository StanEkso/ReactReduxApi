import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AlbumPage, { loader as albumLoader } from './pages/albums/[id]';
import UsersPage from './pages/users/';
import NotFoundPage, { NotFoundRedirect } from './pages/404';
import UserPage, { loader as userLoader } from './pages/users/[id]';
import MainPage from './pages';

import AlbumsPage from './pages/albums';
import { store } from './redux/store';
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        index: true
      },
      {
        path: 'albums/',
        errorElement: <NotFoundRedirect />,
        children: [
          {
            path: '',
            element: <AlbumsPage />,
            index: true
          },
          {
            path: ':id/',
            element: <AlbumPage />,
            loader: albumLoader
          }
        ]
      },
      {
        path: 'users/',
        children: [
          {
            path: '',
            element: <UsersPage />,
            index: true
          },
          {
            path: ':id/',
            element: <UserPage />,
            loader: userLoader
          }
        ]
      },
      {
        path: '/404',
        element: <NotFoundPage />
      }
    ]
  }
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
