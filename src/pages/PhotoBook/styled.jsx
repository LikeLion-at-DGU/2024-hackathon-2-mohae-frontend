import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0e6d6;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  margin: 50px;
  width: 1200px;
  height: 500px;
`;

export const Book = styled.div`
  display: flex;
  background-color: #f0e6d6;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const Page = styled.div`
  background-color: white;
  width: 50%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

export const Spine = styled.div`
  width: 5px;
  height: 100%;
  background-color: #d9d9d9;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  color: #333;
  padding: 10px;
  user-select: none;

  &:hover {
    color: #555;
  }
`;
