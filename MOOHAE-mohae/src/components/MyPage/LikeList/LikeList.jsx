import React, { useState } from "react";
import * as S from "./Styled";

const LikeList = () => {
  const [selectedTab, setSelectedTab] = useState('buy'); // 'buy', 'culture', 'learn'

  const handleShowBuy = () => setSelectedTab('buy');
  const handleShowCulture = () => setSelectedTab('culture');
  const handleShowLearn = () => setSelectedTab('learn');

  return (
    <>
      <S.LikeListHeaders>
        <S.LikeLikeHeader
          onClick={handleShowBuy}
          $isSelected={selectedTab === 'buy'}
          >구매내역</S.LikeLikeHeader>
        <S.LikeLikeHeader
          onClick={handleShowCulture}
          $isSelected={selectedTab === 'culture'}
          >최근 본 문화생활</S.LikeLikeHeader>
        <S.LikeLikeHeader
          onClick={handleShowLearn}
          $isSelected={selectedTab === 'learn'}
          >배울 거리 찜 내역</S.LikeLikeHeader>
      </S.LikeListHeaders>
      <S.LikeListContainer>
        {selectedTab === 'buy' && (
          <S.BuyList>
            
            <S.BuyDetail>
              <S.BuyTime>2024년 7월 27일 구매 완료</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyTitle>단 하나뿐인 부산 해운대 펜션</S.BuyTitle>
                    <S.BuySubTitle>옵션: 오션뷰</S.BuySubTitle>
                  </S.hi>
                  <S.BuyMoney>125,000원</S.BuyMoney>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

            <S.BuyDetail>
              <S.BuyTime>2024년 7월 27일 구매 완료</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyTitle>단 하나뿐인 부산 해운대 펜션</S.BuyTitle>
                    <S.BuySubTitle>옵션: 오션뷰</S.BuySubTitle>
                  </S.hi>
                  <S.BuyMoney>125,000원</S.BuyMoney>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

          </S.BuyList>
        )}
        {selectedTab === 'culture' && (
          <S.BuyList> 
            <S.BuyDetail>
              <S.BuyTime>2024년 7월 23일</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyMoney>여행입니다</S.BuyMoney>
                    <S.BuyTitle>부제</S.BuyTitle>
                  </S.hi>
                  <S.BuySubTitle>작성자</S.BuySubTitle>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

            <S.BuyDetail>
              <S.BuyTime>2024년 7월 27일</S.BuyTime>
              <S.Row>
                <S.BuyImage></S.BuyImage>
                <S.Column>
                  <S.hi>
                    <S.BuyMoney>여행 또 갑니다.</S.BuyMoney>
                    <S.BuyTitle>부제 2</S.BuyTitle>
                  </S.hi>
                  <S.BuySubTitle>작성자 2</S.BuySubTitle>
                </S.Column>
              </S.Row>
            </S.BuyDetail>

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
