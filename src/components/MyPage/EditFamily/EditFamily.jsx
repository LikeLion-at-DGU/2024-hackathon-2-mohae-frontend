import React, { useState, useEffect } from "react";
import { API } from "../../../api";
import * as S from "./Styled";
import { SiImessage } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HiLink } from "react-icons/hi";

const EditFamily = () => {
  const [showform, setShowform] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

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

  useEffect(() => {
    fetchFamilyData();
  }, []);

  const getProfilePictureUrl = (url) => {
    console.log(url);
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `http://127.0.0.1:8000${url}`;
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
      {showform && (
        <>
          <S.backWrapping onClick={() => setShowform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>가족 구성원 초대하기</S.FormTitle>
              <S.InviteCode># 326879</S.InviteCode>
              <S.Icons>
                <S.Iconset>
                  <RiKakaoTalkFill size={50} style={{ color: '#371d1e', backgroundColor: '#fae100', borderRadius: '0.5rem', border: '4px solid #fae100' }} />
                  <S.IconText>카카오톡</S.IconText>
                </S.Iconset>
                <S.Iconset>
                  <SiImessage size={58} />
                  <S.IconText>문자전송</S.IconText>
                </S.Iconset>
                <S.Iconset>
                  <HiLink size={58} />
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
