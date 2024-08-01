import { styled, ThemeProvider } from "styled-components";

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/header/Header";

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
    <Wrapper>
      {showHeader && <Header />}
      <Outlet />
    </Wrapper>
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
