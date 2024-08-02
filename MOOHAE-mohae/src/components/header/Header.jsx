import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAlarmWarningFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 원래 텍스트 색상을 유지 */

  &:hover {
    text-decoration: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* 중앙 정렬 */

  @media (max-width: 359px) {
    max-width: 340px;
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  @media (max-width: 359px) {
    padding: 0;
  }
`;

const ButtonwithIcon = styled.div`
  display: flex;
  flex-direction: column; /* 아이콘과 텍스트를 수평으로 배치 */
  align-items: center;
  gap: 0.5rem;
  color: #000;
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }

  @media (max-width: 359px) {
    font-size: 0.625rem;
  }
`;

const HeaderWrap2 = styled.div`
  display: flex;
  gap: 3rem;
  padding: 1rem;
  width: 100%;
  max-width: 1140px;
  justify-content: center;
  border-bottom: 0.5px solid rgba(171, 171, 171, 0.5);

  @media (max-width: 359px) {
    gap: 1rem;
    max-width: 344px;
    padding: 0.25rem 0.5rem;
  }
`;

const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1.5rem;
  }
`;

const CategoryTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "NanumSquareRound";
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    color: #2d539e;
    font-weight: 1000;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Top>
        {/* <StyledLink to="/">
          <MOHAEsytle>MOHAE</MOHAEsytle>
        </StyledLink> */}
        <StyledLink to="/">
          <ButtonwithIcon>
            <RiAlarmWarningFill size={30} style={{ color: "#FF6F6F" }} />
            긴급
          </ButtonwithIcon>
        </StyledLink>
        <StyledLink to="/">
          <MOHAEsytle>MOHAE</MOHAEsytle>
        </StyledLink>
        <StyledLink to="Login">
          <ButtonwithIcon>
            <BiSolidUser size={30} />
            로그인
          </ButtonwithIcon>
        </StyledLink>
      </Top>
      <HeaderWrap2>
        <StyledLink to="Date">
          <CategoryTitle>일정</CategoryTitle>
        </StyledLink>
        <StyledLink to="HealthCare">
          <CategoryTitle>건강</CategoryTitle>
        </StyledLink>
        <StyledLink to="PhotoPost">
          <CategoryTitle>가족 사진첩</CategoryTitle>
        </StyledLink>
        <StyledLink to="CulturePage">
          <CategoryTitle>문화생활</CategoryTitle>
        </StyledLink>
      </HeaderWrap2>
    </HeaderContainer>
  );
};

export default Header;
