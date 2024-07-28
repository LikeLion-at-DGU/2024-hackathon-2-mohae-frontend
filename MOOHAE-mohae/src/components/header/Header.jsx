import { Link } from "react-router-dom";

import { styled } from "styled-components";

import { RiAlarmWarningFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";

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
  font-family: "NanumSquare Neo";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderWrap2 = styled.div`
  display: flex;

  gap: 3rem;
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
  font-family: "NanumSquare Neo";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  & hover {
    color: #2d539e;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <MOHAEsytle>mohae</MOHAEsytle>
      </Link>
      <HeaderWrap1>
        <Link to="/">
          <ButtonwithIcon style={{ marginLeft: 30 }}>
            <RiAlarmWarningFill size={30} style={{ color: "#FF6F6F" }} />
            긴급
          </ButtonwithIcon>
        </Link>
        <Link to="/Login">
          <ButtonwithIcon style={{ marginRight: 30 }}>
            <BiSolidUser size={30} />
            로그인
          </ButtonwithIcon>
        </Link>
      </HeaderWrap1>
      <HeaderWrap2>
        <Link to="/">
          <CategoryTitle>일정</CategoryTitle>
        </Link>
        <Link to="/">
          <CategoryTitle>건강</CategoryTitle>
        </Link>
        <Link to="/PhotoPost">
          <CategoryTitle>가족 사진첩</CategoryTitle>
        </Link>
        <Link to="/">
          <CategoryTitle>문화생활</CategoryTitle>
        </Link>
      </HeaderWrap2>
    </HeaderContainer>
  );
};

export default Header;
