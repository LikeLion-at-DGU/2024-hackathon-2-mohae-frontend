import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import UserInfo from "../components/Mypage/UserInfo";
import Group from "../components/Mypage/Group";
import List from "../components/Mypage/List";
import Cultureand from "../components/Mypage/Cultureand";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* 화면 가로 크기 제한을 100%로 설정 */
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1140px; /* 최대 너비를 제한 */
  border: 1px solid pink;
  height: 1881px;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  width: 100vw;
  padding: 0 150px 31px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%); */
`;

const CenteredUserInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Mypage = () => {
  return (
    <div>
      <PageStyle />
      <CenteredUserInfo>
        <UserInfo />
      </CenteredUserInfo>
      <Background>
        <Container>
          <Group />
          <List />
          <Cultureand />
        </Container>
      </Background>
    </div>
  );
};

export default Mypage;
