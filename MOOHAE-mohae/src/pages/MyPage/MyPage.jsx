import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Styled";

import EditProfile from "../../components/MyPage/EditProfile/EditProfile";
import EditFamily from "../../components/MyPage/EditFamily/EditFamily";
import BucketList from "../../components/MyPage/BucketList/BucketList";
import LikeList from "../../components/MyPage/LikeList/LikeList"

const MyPage = () => {
  return (
    <>
      <S.PageStyle />
      <EditProfile />
      <S.DIV />
      <S.BackEffect>
        <EditFamily />
        <BucketList />
        <LikeList />
        <S.DIV />
      </S.BackEffect>
    </>
  );
}

export default MyPage;