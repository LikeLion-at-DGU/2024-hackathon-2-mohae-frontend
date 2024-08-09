import { styled, createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    width: 1440px;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }

  @media (max-width: 359px) {
    body {
      width: 360px;
    }
  }
`;

export const DIV = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 359px) {
    margin-bottom: 1rem;
  }
`;