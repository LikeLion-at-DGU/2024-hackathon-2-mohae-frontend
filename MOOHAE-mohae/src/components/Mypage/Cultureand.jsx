import React from "react";
import styled from "styled-components";

const CultureandPay = styled.div`
  display: flex;
  width: 950px;
  height: 530px;
  padding: 30px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ffffff;
  margin-left: 45px;
`;

const Cultureand = () => {
  return <CultureandPay>안녕</CultureandPay>;
};

export default Cultureand;
