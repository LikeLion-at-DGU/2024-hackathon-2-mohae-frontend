// src/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import PhotoPost from "./pages/Photo/PhotoPost";
import PhotoPlus from "./pages/Photo/PhotoPlus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "Signup", element: <Signup /> },
      { path: "Login", element: <Login /> },
      { path: "Header", element: <Header /> },
      { path: "PhotoPost", element: <PhotoPost /> },
      { path: "PhotoPlus", element: <PhotoPlus /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
