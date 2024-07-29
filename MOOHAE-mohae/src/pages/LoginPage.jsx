import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

import { createGlobalStyle } from "styled-components";

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

function LoginPage() {
  return (
    <>
      <Login></Login>
      <br />
    </>
  );
}

export default LoginPage;
