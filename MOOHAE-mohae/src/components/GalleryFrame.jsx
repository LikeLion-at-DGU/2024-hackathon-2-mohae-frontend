import React from "react";
import styled from "styled-components";
import good from "./../assets/good.png";

const Frame = styled.div`
  display: flex;
  width: 247px;
  height: 350px;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 3px 11.2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05) translateY(-5px);
  }
`;

const ImgFrame = styled.div`
  display: flex;
  width: 100%;
  height: 240px;
  padding: 9px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background: #bababa;
  box-sizing: border-box;
  position: relative;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border: ${(props) => (props.liked ? "2px solid red" : "none")};
  border-radius: 5px;
  transition: border 0.3s ease;
`;

const UnderImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Re = styled.div`
  color: #9f9f9f;
  font-family: "NanumSquare Neo";
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const When = styled.p`
  color: #9f9f9f;
  font-family: "NanumSquare Neo";
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.09px;
  text-align: right;
`;

const Under = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  bottom: 5px;
  width: 100%;
`;

const Radius = styled.div`
  width: 39px;
  height: 39px;
  padding: 5px;
  background: #d9d9d9;
  border-radius: 50%;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Who = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.16px;
  margin-bottom: 2px; /* 하단 여백을 줄임 */
`;

const DetailText = styled.p`
  margin-top: 2px; /* 상단 여백을 줄임 */
`;

const WhoandDetailText = styled.div`
  display: flex;
  flex-direction: column;
`;

const GalleryFrame = ({ src, onLikeToggle, isLiked }) => {
  return (
    <Frame>
      <ImgFrame>
        <StyledImageWrapper onClick={() => onLikeToggle(src)}>
          <StyledImage src={good} alt="사진이 들어갈 공간" liked={isLiked} />
        </StyledImageWrapper>
      </ImgFrame>
      <UnderImg>
        <Re>댓글</Re>
        <When>2024-07-25</When>
      </UnderImg>
      <Under>
        <Radius />
        <WhoandDetailText>
          <Who>취직한 동생</Who>
          <DetailText>첫 사회생활의 시작</DetailText>
        </WhoandDetailText>
      </Under>
    </Frame>
  );
};

export default GalleryFrame;
