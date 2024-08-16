import { styled, createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`
body {
  background-color: #F7F8FB;
  margin: auto;
  padding: 0;
  display: flex;
  width: fit-content;
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