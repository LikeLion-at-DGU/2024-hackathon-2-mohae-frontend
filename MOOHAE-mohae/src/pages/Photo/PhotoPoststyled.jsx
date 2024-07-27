import styled from "styled-components";

export const All = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  margin-top: 20px;
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

export const Margin = styled.div`
  max-width: 100%;
  margin: 20px auto;
  color: #9f9f9f;
  text-align: right; /* 텍스트 오른쪽 정렬 */
  font-family: "NanumSquareRound", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  position: absolute;
  right: 300px;
  background: yellow;
  cursor: pointer; /* 커서 모양 변경 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 애니메이션 추가 */

  &:hover {
    color: black;
  }
`;

// export const Left = styled.div`
//   flex: 0 0 230px; /* 고정 너비 */
//   min-height: 100vh;
//   /* margin-left: 60px; */
//   margin-right: 30px; Right와의 간격을 주기 위해 추가
// `;

export const Menubar = styled.div`
  width: 160px;
  height: 538px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 3;
  position: absolute;
  top: 260px;
  left: 0px;
  margin-left: 100px;
  padding: 28px 15px;
  color: #2d539e;
  font-family: NanumSquareRound;
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.23px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  justify-content: center;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  color: #2d539e;
  &:before {
    content: "\\1F4C1"; /* 폴더 아이콘 (유니코드) */
    margin-right: 10px;
  }
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  color: #0000ff; /* 링크 색상 */
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #000080; /* 호버시 색상 변경 */
  }
`;

export const SelectedItem = styled(Item)`
  /* background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px; */
  font-weight: bold;
`;

export const Right = styled.div`
  /* flex: 1; 남은 공간을 모두 차지 */
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* background-color: gray; */
  width: 900px;
  margin-left: 100px;
`;

export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 50px; /* 오른쪽에 고정 */
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* &:hover {
    background-color: darkgray;
  } */

  &:active {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15); /* 그림자 추가 */
  }
`;
