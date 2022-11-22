import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AlbumPage, { loader as albumLoader } from "./pages/albums/[id]";
import UsersPage, { loader as usersPageLoader } from "./pages/users/";
import NotFoundPage, { NotFoundRedirect } from "./pages/404";
import UserPage, { loader as userLoader } from "./pages/users/[id]";
import MainPage from "./pages";
import CreateUserPage, {
  action as createUserAction,
} from "./pages/users/create";
import CreateAlbumPage, {
  action as createAlbumAction,
} from "./pages/albums/create";
import AlbumsPage from "./pages/albums";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        index: true,
      },
      {
        path: "albums/",
        errorElement: <NotFoundRedirect />,
        children: [
          {
            path: "",
            element: <AlbumsPage />,
            index: true,
          },
          {
            path: "create/",
            element: <CreateAlbumPage />,
            loader: usersPageLoader,
            action: createAlbumAction,
          },
          {
            path: ":id/",
            element: <AlbumPage />,
            loader: albumLoader,
          },
        ],
      },
      {
        path: "users/",
        children: [
          {
            path: "",
            element: <UsersPage />,
            loader: usersPageLoader,
            index: true,
          },
          {
            path: "create/",
            element: <CreateUserPage />,
            action: createUserAction,
          },
          {
            path: ":id/",
            element: <UserPage />,
            loader: userLoader,
          },
        ],
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
