import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import Header from "./components/header/Header";

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
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
