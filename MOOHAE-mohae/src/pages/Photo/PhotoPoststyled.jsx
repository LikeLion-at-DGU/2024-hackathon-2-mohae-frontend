import styled from "styled-components";

export const All = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  margin-top: 20px;
  overflow-x: hidden; /* 가로 스크롤 방지 */
  flex-direction: row; /* 항상 가로 배치 */
  overflow: hidden; /* 요소가 화면을 넘어가면 가리기 */
`;

export const Margin = styled.div`
  max-width: 100%;
  margin: 10px auto;
  margin-right: 100px;
  color: #9f9f9f;
  text-align: right;
  font-family: "NanumSquareRound", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  /* position: absolute; */
  /* right: 300px; */
  /* background: yellow; */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    color: black;
  }
`;

export const Menubar = styled.div`
  width: 160px;
  height: 538px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
  margin-left: 10px; /* 왼쪽 여백을 20px로 설정 */
  padding: 28px 15px;
  color: #2d539e;
  font-family: NanumSquareRound, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.23px;
  /* z-index: 1000; */
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
    content: "\\1F4C1";
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
  color: #0000ff;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #000080;
  }
`;

export const SelectedItem = styled(Item)`
  font-weight: bold;
`;

export const Right = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 900px;
  margin-left: 100px;
  min-width: 900px; /* 최소 너비를 설정하여 요소들이 줄어들지 않게 함 */
`;

export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:active {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  }
`;
