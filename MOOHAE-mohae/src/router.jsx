// src/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage"; // 주의: Hompage -> Homepage로 수정해야 합니다
import Signup from "./components/Signup";
import Login from "./components/Login";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/Login", element: <Login /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Header", element: <Header /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
