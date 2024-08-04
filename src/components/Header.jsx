import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import emergencyIcon from "../assets/emergency.png"; // 이미지 파일을 import
import Ingan from "../assets/ingan.png";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const HeadText = styled.div`
  width: 100%;
  text-align: center;
  color: #2d539e;
  font-family: "Cafe24 Meongi B";
  font-size: 50px;
  font-weight: 400;
`;

const Emergency = styled.div`
  width: 1118px;
  height: 51px;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 20px 40px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0px;
  img {
    width: 35px; /* 적절한 너비로 설정 */
    height: auto;
  }
`;

const Right = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0px;
  /* position: absolute; */
  img {
    width: 35px; /* 적절한 너비로 설정 */
    height: auto;
  }
`;

const Navbar = styled.div``;
const Category1 = styled.p``;
const Category2 = styled.p``;
const Category3 = styled.p``;
const Category4 = styled.p``;

const Header = () => {
  return (
    <>
      <PageStyle />
      <Container>
        <HeadText>MOHAE</HeadText>
        <Emergency>
          <Left>
            <img src={emergencyIcon} alt="Emergency Icon" />
            긴급
          </Left>

          <Right>
            <img src={Ingan} alt="Login Icon" />
            로그인
          </Right>
        </Emergency>
        <Navbar>
          <Category1>일정</Category1>
          <Category2>건강</Category2>
          <Category3>가족 사진첩</Category3>
          <Category4>문화생활</Category4>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
