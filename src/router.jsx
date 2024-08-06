import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup/Signup";
import LoginPage from "./pages/Login";
// import Gallery from "./pages/Gallery"; // 추가된 부분
import DatePage from "./pages/DatePage/DatePage"; 
import HealthCarePage from "./pages/HealthCarePage";
import Header from "./components/Header"; 
import PhotoPost from "./pages/Photo/PhotoPost";
import PhotoPlus from "./pages/Photo/PhotoPlus";
import PhotoDetail from "./components/Photo/PhotoDetail";
import Main from "./pages/PhotoBook/Main";
import MHealthcareChallenge from "./components/CHealthChallenge/MHealthChallenge";
import CulturePage from "./pages/CulturePage";
import Apply from "./components/CHealthChallenge/Apply";
import MyPage from "./pages/MyPage/MyPage";
import DetailPage from "./components/CulturePage/DetailPage";
import Intro from "./pages/Intro";

const Router = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: viewportWidth <= 360 ? <LoginPage /> : <Intro /> },
        { path: "/Signup", element: <Signup /> },
        { path: "/Login", element: <LoginPage /> },
        // { path: "/Gallery", element: <Gallery /> }, // 추가된 부분
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
        { path: "/Homepage", element: <Homepage /> },
        { path: "/CulturePage/DetailPage", element: <DetailPage /> }, // CulturePage의 DetailPage 라우트 추가
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
