import { styled, ThemeProvider } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { createGlobalStyle } from 'styled-components';
import { BiFontFamily } from "react-icons/bi";

import "./Font.css";

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform-origin: top;

  zoom: 0.7916;


  @media (max-width: 359px) {
    width: 360px;
    zoom: 0.95;
  }
`;

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/PhotoPlus" && location.pathname !== "/Login" && location.pathname !== "/login" && location.pathname !== "/Signup" && location.pathname !=="/" && location.pathname !=="/";

  return (
    <>

          <Wrapper>
            {showHeader && <Header />}
            <Outlet />
          </Wrapper>
        <Footer/>
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
