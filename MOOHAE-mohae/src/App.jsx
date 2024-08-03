import { styled, ThemeProvider } from "styled-components";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform-origin: top;
  transform: scale(0.7916);

  @media (max-width: 359px) {
    transform: scale(0.95);
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
  const showHeader = location.pathname !== "/PhotoPlus";

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
