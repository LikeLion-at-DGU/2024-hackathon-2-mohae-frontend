import { styled, ThemeProvider } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform-origin: top;
  zoom: 0.7916;

  @media (max-width: 359px) {
    zoom: 0.95;
  }
`;

const BackEffect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh; 
  background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
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
  const showHeader = location.pathname !== "/PhotoPlus" && location.pathname !== "/Login" && location.pathname !== "/Signup" && location.pathname !=="/";

  return (
    <BackEffect>
      <Container>
        {showHeader && <Header />}
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </BackEffect>
  );
};

function App() {
  return (
    <Layout />
  );
}

export default App;
