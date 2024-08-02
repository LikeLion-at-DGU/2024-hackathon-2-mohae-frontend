import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { createGlobalStyle } from "styled-components";

import Hospital from "../components/Hospital/Hospital";
import Medicine from "../components/Medicine/Medicine";
import MHealthcareChallenge from "../components/CHealthChallenge/MHealthChallenge";

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
  width: 1440px;
  align-items: center;
  background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);

  @media (max-width: 359px) {
    width: 360px;
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
      <PageStyle />
      <BackEffect>
        <Box>
          <Medicine />
        </Box>
        <Box>
          <Hospital />
        </Box>

        <br />
        <MHealthcareChallenge />
        <br />
      </BackEffect>
    </>
  );
}

export default HealthCarePage;
