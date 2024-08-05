import React, { useState, useEffect } from "react";
import { API } from "../../../api";
import * as S from "./Styled";
// import { SiImessage } from "react-icons/si";
// import { RiKakaoTalkFill } from "react-icons/ri";
// import { HiLink } from "react-icons/hi";

const EditFamily = () => {
  const [showform, setShowform] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  const [code, setCode] = useState("");

  const [codeform, setCodeform] = useState(false);
  const [inviteform, setInviteform] = useState(false);

  const fetchFamilyData = async () => {
    try {
      const response = await API.get("/users/family");
      console.log("Fetched family response:", response.data);

      const family = response.data.flatMap(family =>
        family.profiles.map(profile => ({
          nickname: profile.nickname,
          profile_picture: profile.profile_picture
        }))
      );

      console.log("Processed family members:", family);
      setFamilyMembers(family);
    } catch (error) {
      console.error("Failed to fetch family data:", error);
    }
  };

  const Postdata = async () => {
    try {
      const response = await API.post("/users/family/join/", { family_code : code });
      console.log("Post data response:", response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFamilyData();
  }, []);

  const getProfilePictureUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `http://127.0.0.1:8000${url}`;
  };

  return (
    <>
      <S.EditFamilyContainer>
        <S.Row>
          <S.EditFamilyTitle>가족 구성원</S.EditFamilyTitle>
          <S.AddFamily onClick={() => setShowform(!showform)}>구성원 초대하기 +</S.AddFamily>
        </S.Row>
        {showform && (
          <S.SelectForm>
            <S.Selection onClick={() => setCodeform(true)}><S.StyledPen />초대 코드 입력</S.Selection>
            <S.Selection2 onClick={() => setInviteform(true)}><S.StyledUser />가족 구성원 초대</S.Selection2>
          </S.SelectForm>
        )}
        <S.EditFamilyLine />
        <S.EditFamilyList>
          {familyMembers.map((member, index) => (
            <S.EditFamily key={index}>
              {member.profile_picture ? (
                <S.FamilyProfile src={getProfilePictureUrl(member.profile_picture)} alt={member.nickname} />
              ) : (
                <S.FamilyProfile alt={member.nickname} />
              )}
              <S.FamilyName>{member.nickname}</S.FamilyName>
            </S.EditFamily>
          ))}
        </S.EditFamilyList>
      </S.EditFamilyContainer>
      {codeform && (
        <>
          <S.backWrapping onClick={() => setCodeform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.Rowdi>
                <S.FormTitle>구성원 초대 코드 입력하기</S.FormTitle>
                <S.StyledTimes onClick={() => setCodeform(false)}/>
              </S.Rowdi>
              <S.FormSubtitle>가족 구성원에게 받은 6자리 숫자를 입력해주세요.</S.FormSubtitle>
              <S.Sharp>#</S.Sharp>
              <S.FormInput 
                type="text"
                placeholder="입력"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <S.PostButton onClick={Postdata}>인증하기</S.PostButton>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
      {inviteform && (
        <>
          <S.backWrapping onClick={() => setInviteform(false)} />
          <S.FormContent>
            <S.Rowdi>
              <S.FormTitle>가족 구성원 초대하기</S.FormTitle>
              <S.StyledTimes onClick={() => setInviteform(false)} />
            </S.Rowdi>
            <S.FormSubtitle>우리 가족명</S.FormSubtitle>
            <S.FormInput2 />
            <S.inputbutton>입력</S.inputbutton>
          </S.FormContent>
        </>
      )}
    </>
  );
}

export default EditFamily;
