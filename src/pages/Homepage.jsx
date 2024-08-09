import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import MainPage from "../components/MainPage/MainPage";
import { API } from '../api';  // API 모듈 가져오기

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


const ReservationPopup = styled.div`
  width: 580px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 20px;
  gap: 80px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 1001;

  .TextReservation {
    font-family: NanumSquareRound;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
  .NextTime {
    width: 180px;
    height: 65px;
    background-color: #F2F3F5;
    color: #5D5C61;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    line-height: 65px;
  }
  
  
`;

const StyledLink = styled(Link)`
  width: 180px;
  height: 65px;
  background-color: #2D539E;
  color: #FFFFFF;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;

 
`;

function HomePage() {
  const [userId, setUserId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 로딩 시 스크롤을 최상단으로 이동
    FetchUserId(); 
  }, []);

  const FetchUserId = async () => {
    try {
      const response = await API.get('/accounts/profile/');
      console.log("userId response", response.data);
      setUserId(response.data.user.id);

      // 가족 구성원이 없는 경우 팝업을 표시
      if (!response.data.family) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log('fetch user id error:', error);
    }
  };

  return (
    <>
      <PageStyle />
      <MainPage />
      {showPopup && (
        <ReservationPopup>
          <div className="TextReservation">
            아직 가족 구성원이 구성되어 있지 않습니다.<br/>가족을 구성하시는건 어떨까요?
          </div>
          <ButtonWrapper>
            <button className="NextTime" onClick={() => setShowPopup(false)}>다음에 하기</button>
            <StyledLink to="/Mypage">바로 가기</StyledLink>
          </ButtonWrapper>
        </ReservationPopup>
      )}
    </>
  );
}

export default HomePage;
