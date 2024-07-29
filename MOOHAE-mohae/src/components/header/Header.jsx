import { Link } from "react-router-dom";

import { styled } from "styled-components";

import { RiAlarmWarningFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 원래 텍스트 색상을 유지하려면 사용 */

  &:hover {
    text-decoration: none; /* 호버 시에도 밑줄 없앰 */
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderWrap1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonwithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  color: #000;
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderWrap2 = styled.div`
  display: flex;

  gap: 3rem;
  padding: 1rem;
  width: 90%;
  justify-content: center;
  border-bottom: 0.5px solid rgba(171, 171, 171, 0.5);
`;

const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CategoryTitle = styled.div`
  display: flex;
  flex-direction: row;

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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <MOHAEsytle>mohae</MOHAEsytle>
      </StyledLink>
      <HeaderWrap1>
        <StyledLink to="/">
          <ButtonwithIcon style={{ marginLeft: 30 }}>
            <RiAlarmWarningFill size={30} style={{ color: "#FF6F6F" }} />
            긴급
          </ButtonwithIcon>
        </StyledLink>
        <StyledLink to="Login">
          <ButtonwithIcon style={{ marginRight: 30 }}>
            <BiSolidUser size={30} />
            로그인
          </ButtonwithIcon>
        </StyledLink>
      </HeaderWrap1>
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
        <StyledLink to="/">
          <CategoryTitle>문화생활</CategoryTitle>
        </StyledLink>
      </HeaderWrap2>
    </HeaderContainer>
  );
};

export default Header;
