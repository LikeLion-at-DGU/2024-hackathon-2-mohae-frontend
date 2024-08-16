import React, { useState, useEffect } from "react";
import { API } from "../../../api";
import * as S from "./Styled";

const EditFamily = () => {
  const [showform, setShowform] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  const [code, setCode] = useState("");
  const [family, setFamily] = useState("");
  const [familycode, setFamilycode] = useState("");

  const [codeform, setCodeform] = useState(false);
  const [inviteform, setInviteform] = useState(false);
  const [invitingfamilyform, setInvitingfamilyform] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

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
      const response = await API.post("/users/family/join/", { family_code: code });
      console.log("Post data response:", response);
    } catch (error) {
      console.error("Failed to join family:", error.response ? error.response.data : error.message);
    }
  };

  const PostFamilyName = async () => {
    try {
      const response1 = await API.post("/users/family", { family_name: family });
      console.log("포스트 성공", response1.data);
      const response = await API.get("/users/family");
      console.log("하이", response.data[0].family_code);
      setFamilycode(response.data[0].family_code);
    } catch (error) {
      console.error("Failed to create family:", error.response ? error.response.data : error.message);
    }
  };

  const validatePhoneNumber = (phone_number) => {
    const phoneRegex = /^010\d{8}$/;
    return phoneRegex.test(phone_number);
  };

  const sendInvitations = async () => {
    try {
      const validPhoneNumbers = phoneNumbers.filter(validatePhoneNumber);
      if (validPhoneNumbers.length !== phoneNumbers.length) {
        throw new Error("Invalid phone number format. Please ensure all phone numbers are in the format 010XXXXXXXX.");
      }

      const response = await API.post("/users/invite/", { phone_numbers: validPhoneNumbers.map(num => num.toString()) });
      console.log("Invitations sent successfully:", response.data);
    } catch (error) {
      console.error("Failed to send invitations:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchFamilyData();
  }, []);

  const getProfilePictureUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `http://127.0.0.1:8000${url}`;
  };

  const Invitingfamily = () => {
    setInviteform(false);
    setInvitingfamilyform(true);
  };

  const addPhoneNumberInput = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const handlePhoneNumberChange = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
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
                <S.StyledTimes onClick={() => setCodeform(false)} />
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
          <S.NewEventForm>
            <S.FormContent>
              <S.Rowdi>
                <S.FormTitle>가족 구성원 초대하기</S.FormTitle>
                <S.StyledTimes onClick={() => setInviteform(false)} />
              </S.Rowdi>
              <S.FormSubtitle>우리 가족명</S.FormSubtitle>
              <S.Rowdi>
                <S.FormInput2
                  type="text"
                  placeholder="가족명 입력"
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                />
                <S.inputbutton style={{ background: '#2d539e' }} onClick={PostFamilyName}>입력</S.inputbutton>
              </S.Rowdi>
              <S.Formprint2>{familycode}</S.Formprint2>
              <S.SendingBox onClick={Invitingfamily}>
                <S.SendIcon />
                <S.SendText>문자전송</S.SendText>
              </S.SendingBox>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
      {invitingfamilyform && (
        <>
          <S.backWrapping onClick={() => setInvitingfamilyform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.Rowdi>
                <S.FormTitle>가족 구성원 초대하기</S.FormTitle>
                <S.StyledTimes onClick={() => setInvitingfamilyform(false)} />
              </S.Rowdi>
              <S.Formprint2>{familycode}</S.Formprint2>
              <S.Rowdi>
                <S.Phone>휴대폰 번호</S.Phone>
                <S.Phoneadding onClick={addPhoneNumberInput}><S.StyleiconLu />번호 추가하기</S.Phoneadding>
              </S.Rowdi>
              {phoneNumbers.map((phoneNumber, index) => (
                <S.PhoneNumberInput
                  key={index}
                  type="text"
                  placeholder="숫자만 입력"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                />
              ))}
              <S.SendingButton onClick={sendInvitations}>문자 전송</S.SendingButton>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
};

export default EditFamily;
