// src/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
// import Gallery from "./pages/Gallery"; // 추가된 부분
import DatePage from "./pages/DatePage"; // DatePage와 Date가 동일 파일로 보임
import HealthCarePage from "./pages/HealthCarePage";
import Header from "./components/Header"; // 필요한 경우 사용
import PhotoPost from "./pages/Photo/PhotoPost";
import PhotoPlus from "./pages/Photo/PhotoPlus";
import PhotoDetail from "./components/PhotoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <LoginPage /> },
      // { path: "/Gallery", element: <Gallery /> }, // 추가된 부분
      { path: "/Date", element: <DatePage /> }, // 중복된 Date 제거
      { path: "/HealthCare", element: <HealthCarePage /> },
      { path: "/PhotoPost", element: <PhotoPost /> },
      { path: "/PhotoPlus", element: <PhotoPlus /> },
      { path: "/PhotoDetail", element: <PhotoDetail /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
