import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nemo = styled.div`
  display: flex;
  width: 548px;
  height: 155px;
  padding: 6px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.25);
`;

const Nemo1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 155px;
  /* border: 1px solid blue; */
`;

const Right = styled.div`
  width: 372px;
  height: 155px;
  /* border: 1px solid green; */
  margin-left: 10px;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; // 확인용 */
`;

const Imgofuser = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const Participation = styled.div`
  display: flex;
  width: 372px;
  height: 40px;
  justify-content: space-between; // 기존 space-between을 flex-end로 변경
  align-items: center;
  /* background-color: pink; */
  /* margin-left: 7px; */
`;

const Radiusofuser = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: lightgray; // url(<path-to-image>) 부분 제거
  display: flex; // display 속성 추가
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const ChallengeTitle = styled.p`
  align-self: stretch;
  color: #2d539e;
  font-family: NanumSquareRound;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.42px;
  margin-top: 0px;
`;

const ChallengeDate = styled.p`
  align-self: stretch;
  color: #000;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-top: -10px;
`;

const PLeft = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PRight = styled.p`
  display: flex;
  gap: 8px;
  margin-right: 10px;
`;
const PRight1 = styled.p`
  color: #2d539e;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #ebf1ff;
`;
const PRight2 = styled.p`
  color: #de0000;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #ffebe1;
`;

const Apply = styled.p`
  color: #fff;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.16px;
  display: flex;
  width: 130px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #2d539e;
  cursor: pointer; // 클릭 가능한 커서
  transition: transform 0.2s, background-color 0.2s; // 효과의 전환 시간 설정
  &:active {
    background-color: #f0f0f0; // 클릭 시 배경색 변경
    transform: scale(0.95); // 클릭 시 크기 변화
  }
`;

const ChallengeBox = () => {
  return (
    <Nemo>
      <Nemo1>
        <Left>
          <Icon>이미지 삽입</Icon>
        </Left>
        <Right>
          <Participation>
            <PLeft>
              <Imgofuser>참여자</Imgofuser>
              <Radiusofuser></Radiusofuser>
            </PLeft>
            <PRight>
              <PRight1>진행상황</PRight1>
              <PRight2>디데이</PRight2>
            </PRight>
          </Participation>
          <ChallengeTitle>운동장 한바퀴 뛰기(가제)</ChallengeTitle>
          <ChallengeDate>2003.04.29</ChallengeDate>
          <Link to="/Apply">
            <Apply>신청하기</Apply>
          </Link>
        </Right>
      </Nemo1>
    </Nemo>
  );
};

export default ChallengeBox;
