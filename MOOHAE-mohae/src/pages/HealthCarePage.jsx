import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { createGlobalStyle } from "styled-components";

import Clock from "../assets/Clock.png";

import HealthChallenge from "../components/HealthChallenge/HealthChallenge";
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
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-in;
`;

const MedicineTitle = styled.div`
  color: #000;

  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MedicineContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  color: #2d539e;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function HealthCarePage() {

  return (
    <>
      <PageStyle />
      <BackEffect>
        <Box>
          <MedicineTitle>비타민⋅약 복용</MedicineTitle>
          <MedicineContent>
            <img src={Clock} alt="Clock" style={{ width: 50, height: 50 }} />
            2024년 7월 2일(화) 13:12 PM (점심)
          </MedicineContent>
          <Medicine />
        </Box>
        <Box>
          <Hospital />
        </Box>

        <br />
        <HealthChallenge />
        <MHealthcareChallenge />
        <br />
      </BackEffect>
    </>
  );
}

export default HealthCarePage;
