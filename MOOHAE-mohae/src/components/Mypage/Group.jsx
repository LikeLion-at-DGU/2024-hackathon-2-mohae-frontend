import React from "react";
import styled from "styled-components";

const Groups = styled.div`
  width: 950px;
  height: 195px;
  display: flex;
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

const Group = () => {
  return <Groups>안녕</Groups>;
};

export default Group;
