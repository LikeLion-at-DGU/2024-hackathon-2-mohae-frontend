import React, { useState } from "react";
import styled from "styled-components";
import training from "../../assets/training.png";
import ChallengeBox from "./ChallengeBox";

const Container = styled.div`
  width: 1140px;
  height: 498px;
  flex-shrink: 0;
  margin-bottom: 20px;
  /* border: 1px solid pink; */
`;

const P = styled.p`
  align-self: stretch;
  color: #000;
  font-family: NanumSquareRound;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.46px;
`;

const TagContainer = styled.div`
  width: 1050px;
  height: 45px;
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
  margin-top: -9px;
`;

const Tag = styled.div`
  text-align: center;
  width: 150px;
  height: 20px;
  color: ${(props) => (props.active ? "#FFF" : "#9f9f9f")}; /* 텍스트 색상 */
  font-family: NanumSquareRound;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  display: flex;
  padding: 7px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: ${(props) =>
    props.active ? "#2D539E" : "rgba(45, 83, 158, 0.1)"}; /* 배경색 */
  cursor: pointer; // 클릭 가능한 커서
  transition: transform 0.2s, background-color 0.2s; // 효과의 전환 시간 설정
  &:active {
    background-color: #f0f0f0; // 클릭 시 배경색 변경
    box-shadow: 10px 10px 15px; // 클릭 시 크기 변화
  }
`;

const UnderContainer = styled.div`
  width: 1140px;
  height: 355px;
  /* border: 1px solid pink; */
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const MHealthcareChallenge = () => {
  const [activeTag, setActiveTag] = useState(null);

  return (
    <>
      <Container>
        <P>건강 챌린지</P>
        <TagContainer>
          <Image src={training} alt="예제 이미지" />
          <Tag active={activeTag === 1} onClick={() => setActiveTag(1)}>
            #이번 주의 챌린지
          </Tag>
          <Tag active={activeTag === 2} onClick={() => setActiveTag(2)}>
            #진행 중인 챌린지
          </Tag>
          <Tag active={activeTag === 3} onClick={() => setActiveTag(3)}>
            #시작 전인 챌린지
          </Tag>
          <Tag active={activeTag === 4} onClick={() => setActiveTag(4)}>
            #종료된 챌린지
          </Tag>
        </TagContainer>
        <UnderContainer>
          <ChallengeBox />
          <ChallengeBox />
          <ChallengeBox />
          <ChallengeBox />
        </UnderContainer>
      </Container>
    </>
  );
};

export default MHealthcareChallenge;
