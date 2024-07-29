import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

import Clock from "../assets/Clock.png";

import HealthChallenge from "../components/HealthChallenge/HealthChallenge";
import Hospital from "../components/Hospital/Hospital";
import Medicine from "../components/Medicine/Medicine";

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

const BackEffect = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: center;
  width: 1440px;
  background: linear-gradient(120deg, #E1EAFF 0%, #FFF 52.4%, #DCFAFC 100%);
`;

const MedicineBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MedicineTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MedicineContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  color: #2D539E;

  font-family: 'NanumSquareRound';
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
        <MedicineBox>
          <MedicineTitle>비타민⋅약 복용</MedicineTitle>
          <MedicineContent><img src={Clock} alt="Clock" style={{width:50, height:50}} />2024년 7월 2일(화) 13:12 PM (점심)</MedicineContent>
          <Medicine />
        </MedicineBox>
        <br />
        <HealthChallenge />
        <br />
        <Hospital />
      </BackEffect>
    </>
  );
}

export default HealthCarePage;