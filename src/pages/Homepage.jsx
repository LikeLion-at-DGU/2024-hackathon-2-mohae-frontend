import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MainPage from "../components/MainPage/MainPage";

const PageStyle = createGlobalStyle`
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
`;

function HomePage() {
  return (
    <>
      <PageStyle />
      <MainPage />
    </>
  );
}

export default HomePage;
