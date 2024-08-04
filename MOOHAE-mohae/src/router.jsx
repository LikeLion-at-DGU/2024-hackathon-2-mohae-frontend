import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import DatePage from "./pages/DatePage/DatePage";
import HealthCarePage from "./pages/HealthCarePage";
import PhotoPost from "./pages/Photo/PhotoPost";
import PhotoPlus from "./pages/Photo/PhotoPlus";
import PhotoDetail from "./components/PhotoDetail";
import Main from "./pages/PhotoBook/Main";
import MHealthcareChallenge from "./components/CHealthChallenge/MHealthChallenge";
import CulturePage from "./pages/CulturePage";
import Apply from "./components/CHealthChallenge/Apply";
import MyPage from "./pages/MyPage/MyPage";
import DetailPage from "./components/CulturePage/DetailPage";
import Intro from "./pages/Intro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Intro /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Date", element: <DatePage /> },
      { path: "/HealthCare", element: <HealthCarePage /> },
      { path: "/PhotoPost", element: <PhotoPost /> },
      { path: "/PhotoPlus", element: <PhotoPlus /> },
      { path: "/PhotoDetail", element: <PhotoDetail /> },
      { path: "/Main", element: <Main /> },
      { path: "/MHealthcareChallenge", element: <MHealthcareChallenge /> },
      { path: "/CulturePage", element: <CulturePage /> },
      { path: "/Apply", element: <Apply /> },
      { path: "/Mypage", element: <MyPage /> },
      { path: "/CulturePage/detail", element: <DetailPage /> }, // CulturePage의 DetailPage 라우트 추가
      { path: "/Homepage", element: <Homepage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
