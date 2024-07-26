import React from "react";
import { Link } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`;

function HealthCarePage() {
  return (
    <>
      <PageStyle />
    </>
  );
}

export default HealthCarePage;