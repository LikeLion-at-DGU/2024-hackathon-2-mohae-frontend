// src/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage"; // 주의: Hompage -> Homepage로 수정해야 합니다
import Signup from "./components/Signup";
import Login from "./pages/LoginPage";
import Gallery from "./pages/Gallery";
import Date from "./pages/DatePage";
import DatePage from "./pages/DatePage";
import LoginPage from "./pages/LoginPage";
import HealthCarePage from "./pages/HealthCarePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Date", element: <DatePage /> },
      { path: "/HealthCare", element: <HealthCarePage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
