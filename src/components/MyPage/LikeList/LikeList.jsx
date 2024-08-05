import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { API } from '../../../api';

const LikeList = () => {
  const [selectedTab, setSelectedTab] = useState('buy');
  const [likeData, setLikeData] = useState([]);
  const [reservationsData, setReservationsData] = useState([]);

  const GetLikeData = async () => {
    try {
      const response = await API.get("/users/mypage/likes");
      setLikeData(response.data);
      console.log("likes data", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const GetReservationsData = async () => {
    try {
      const response = await API.get("/users/mypage/confirmed_reservations");
      setReservationsData(response.data);
      console.log("reservations", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetLikeData();
    GetReservationsData();
  }, []);

  const handleShowBuy = () => setSelectedTab('buy');
  const handleShowCulture = () => setSelectedTab('culture');
  const handleShowLearn = () => setSelectedTab('learn');

  return (
    <>
      <S.LikeListHeaders>
        <S.LikeLikeHeader
          onClick={handleShowBuy}
          $isSelected={selectedTab === 'buy'}
        >예약 내역</S.LikeLikeHeader>
        <S.LikeLikeHeader
          onClick={handleShowCulture}
          $isSelected={selectedTab === 'culture'}
        >좋아요 목록</S.LikeLikeHeader>
        <S.LikeLikeHeader
          onClick={handleShowLearn}
          $isSelected={selectedTab === 'learn'}
        >배울 거리 찜 내역</S.LikeLikeHeader>
      </S.LikeListHeaders>
      <S.LikeListContainer>
        {selectedTab === 'buy' && (
          <S.BuyList>
            {reservationsData.map((reservation, index) => (
              <S.BuyDetail key={index}>
                <S.BuyTime>{new Date(reservation.confirmed_at).toLocaleDateString()} 예약 완료</S.BuyTime>
                <S.Row>
                  <S.BuyImage></S.BuyImage>
                  <S.Column>
                    <S.BuyMoney>활동 이름 : {reservation.reservation.activity?.title || 'No title available'}</S.BuyMoney>
                    <S.BuyTitle>예약자 : {reservation.reservation.user?.username || 'Unknown user'}</S.BuyTitle>
                  </S.Column>
                </S.Row>
              </S.BuyDetail>
            ))}
          </S.BuyList>
        )}
        {selectedTab === 'culture' && (
          <S.BuyList> 
            {likeData.map((like, index) => (
              <S.BuyDetail key={index}>
                <S.Row>
                  <S.BuyImage></S.BuyImage>
                  <S.Column>
                    <S.hi>
                      <S.BuyMoney>{like.title}</S.BuyMoney>
                      <S.BuyTitle>{parseInt(like.price)} 원</S.BuyTitle>
                    </S.hi>
                    <S.BuySubTitle>{new Date(like.start_date).toLocaleDateString()} ~ {new Date(like.end_date).toLocaleDateString()}</S.BuySubTitle>
                  </S.Column>
                </S.Row>
              </S.BuyDetail>
            ))}
          </S.BuyList>
        )}
        {selectedTab === 'learn' && (
          <S.BuyList>  
            <S.BuyDetail>
              <S.BuyTime>2024년 7월 27일</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyMoney>오늘 배울거리1</S.BuyMoney>
                    <S.BuyTitle>부제 1</S.BuyTitle>
                  </S.hi>
                  <S.BuySubTitle>작성자 1</S.BuySubTitle>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

            <S.BuyDetail>
              <S.BuyTime>2024년 7월 27일</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyMoney>오늘 배울거리2</S.BuyMoney>
                    <S.BuyTitle>부제 2</S.BuyTitle>
                  </S.hi>
                  <S.BuySubTitle>작성자 2</S.BuySubTitle>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

          </S.BuyList>
        )}
      </S.LikeListContainer>
    </>
  );
}

export default LikeList;
