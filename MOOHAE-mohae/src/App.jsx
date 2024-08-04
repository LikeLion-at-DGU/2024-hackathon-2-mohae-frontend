import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform-origin: top;
  zoom: 0.7916;

  @media (max-width: 359px) {
    zoom: 0.95;
  }
`;

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 359px) {
    width: 360px;
  }
`;

const Layout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/PhotoPlus", "/"]; // 헤더를 숨길 경로들
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      <Container>
        <Wrapper>
          {showHeader && <Header />}
          <Outlet />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
