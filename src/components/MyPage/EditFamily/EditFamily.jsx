import React, { useState } from "react";

import * as S from "./Styled";

import { SiImessage } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiLink } from "react-icons/hi";


const EditFamily = () => {
  const [showform, setShowform] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewinformation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <S.EditFamilyContainer>
        <S.Row>
          <S.EditFamilyTitle>가족 구성원</S.EditFamilyTitle>
          <S.AddFamily onClick={() => setShowform(true)}>구성원 초대하기 +</S.AddFamily>
        </S.Row>
        <S.EditFamilyLine />
        <S.EditFamilyList>
          <S.EditFamily>
            <S.FamilyProfile></S.FamilyProfile>
            <S.FamilyName>나</S.FamilyName>
          </S.EditFamily>
          <S.EditFamily>
            <S.FamilyProfile></S.FamilyProfile>
            <S.FamilyName>어무니</S.FamilyName>
          </S.EditFamily>
          <S.EditFamily>
            <S.FamilyProfile></S.FamilyProfile>
            <S.FamilyName>아부지</S.FamilyName>
          </S.EditFamily>
        </S.EditFamilyList>
      </S.EditFamilyContainer>
      {showform && (
        <>
          <S.backWrapping onClick={() => setShowform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>가족 구성원 초대하기</S.FormTitle>
              <S.InviteCode># 326879</S.InviteCode>
              <S.Icons>
                <S.Iconset>
                  <RiKakaoTalkFill size={50} style={{color:'#371d1e', backgroundColor:'#fae100', borderRadius: '0.5rem', border: '4px solid #fae100'}}/>
                  <S.IconText>카카오톡</S.IconText>
                </S.Iconset>
                <S.Iconset>
                  <SiImessage size={58} />
                  <S.IconText>문자전송</S.IconText>
                </S.Iconset>
                <S.Iconset>
                  <HiLink size={58}/>
                  <S.IconText>링크복사</S.IconText>
                </S.Iconset>
              </S.Icons>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
    
  );
}

export default EditFamily;