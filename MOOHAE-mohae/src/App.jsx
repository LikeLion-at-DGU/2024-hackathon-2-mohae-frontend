import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <Wrapper>
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