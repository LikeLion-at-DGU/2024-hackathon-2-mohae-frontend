import React from "react";
import styled from "styled-components";

const Lists = styled.div`
  width: 950px;
  display: flex;
  height: 335px;
  padding: 30px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: #ffffff;
  margin-left: 45px;
  margin-bottom: 30px;
`;

const List = () => {
  return <Lists>안녕</Lists>;
};

export default List;
