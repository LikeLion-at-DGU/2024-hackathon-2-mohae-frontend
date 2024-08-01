import React from "react";
import styled from "styled-components";

const UserInformation = styled.div`
  width: 126px;
  height: 212px;
  display: inline-flex;
  padding: 33px 204px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 2.5px solid #d9d9d9;
  background: #ffffff;
  justify-content: center;
  margin-left: 45px;
  margin-top: 29px;
  margin-bottom: 72px;
`;

const UserImg = styled.img`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 120px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const UserName = styled.p``;

const UserInfo = () => {
  return (
    <UserInformation>
      <UserInfo>
        <UserImg />
        <UserName>구도욱</UserName>
      </UserInfo>
    </UserInformation>
  );
};

export default UserInfo;
