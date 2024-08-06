import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { createGlobalStyle } from "styled-components";

import Hospital from "../components/Hospital/Hospital";
import Medicine from "../components/Medicine/Medicine";
import HealthChallenge from "../components/HealthChallenge/HealthCallenge";

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

  @media (max-width: 359px) {
    body {
      width: 360px;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackEffect = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  width: 130%;
  align-items: center;
  background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);

  @media (max-width: 359px) {
    width: 105%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-in;
`;

function HealthCarePage() {

  return (
    <>
      <div style={{marginTop:'2rem'}}></div>
      <PageStyle />
      <BackEffect>
        <Box>
          <Medicine />
        </Box>
        <Box>
          <Hospital />
        </Box>

        <br />
        <HealthChallenge />
        <br />
      </BackEffect>
    </>
  );
}

export default HealthCarePage;
