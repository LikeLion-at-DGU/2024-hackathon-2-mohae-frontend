// src/components/Signup.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB; // 페이지 내에서 body 배경색 설정
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`;
// 스타일링을 위한 styled-components 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

// const Header = styled.h1`
//   color: #2a82da;
//   margin-bottom: 20px;
//   font-family: "Cafe24 Meongi B";
// `;

const SubHeader = styled.p`
  color: #666;
  margin-bottom: 40px;
  text-align: center;
  max-width: 630px;
`;

const Form = styled.form`
  width: 636px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 68px;
  border-radius: 1rem;
  @media (max-width: 360px) {
    max-width: 360px;
    height: fit-content;
    flex-shrink: 0;
    border-radius: 25px;
    background: #fff;
  }
`;

const SignupText = styled.p`
  display: none;
  @media (max-width: 360px) {
    display: flex;
    width: 141px;
    height: 24px;
    flex-shrink: 0;
    color: #000;
    font-family: NanumSquareRound;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: center;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: -15px;
  margin-bottom: 20px;
  text-align: left;
`;

const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Tag = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.bgColor || "#2a82da"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1a61a0;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [nickname, setNickname] = useState("");
  const [agreeToAll, setAgreeToAll] = useState(false);
  const [agreeToMarketing, setAgreeToMarketing] = useState(false);
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [dobError, setDobError] = useState("");
  const [buttonColor, setButtonColor] = useState("#2a82da");
  const [tagColors, setTagColors] = useState({});

  const handleNameChange = (event) => setName(event.target.value);
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setPhoneError("");
    } else {
      setPhoneError("숫자를 입력해주세요!");
    }
  };
  const handleDobChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setDob(value);
      setDobError("");
    } else {
      setDobError("6자리 숫자만 입력해주세요!");
    }
  };
  const handleNicknameChange = (event) => setNickname(event.target.value);
  const handleMarketingChange = (event) =>
    setAgreeToMarketing(event.target.checked);
  const handlePrivacyChange = (event) =>
    setAgreeToPrivacy(event.target.checked);
  const handleAgreeToAllChange = (event) => {
    const isChecked = event.target.checked;
    setAgreeToAll(isChecked);
    setAgreeToMarketing(isChecked);
    setAgreeToPrivacy(isChecked);
  };

  const isPhoneValid = /^\d+$/.test(phone); // 숫자만 포함
  const isDobValid = /^\d{6}$/.test(dob); // 6자리 숫자만 포함

  const isFormValid =
    name &&
    isPhoneValid &&
    isDobValid &&
    nickname &&
    agreeToMarketing &&
    agreeToPrivacy;

  const handleTagClick = (tag) => {
    setTagColors((prevColors) => {
      const newColor = prevColors[tag] === "#f0f0f0" ? "#d0d0d0" : "#f0f0f0";
      console.log(`Tag clicked: ${tag}, New color: ${newColor}`);
      return {
        ...prevColors,
        [tag]: newColor,
      };
    });
  };

  const handleButtonClick = () => {
    setButtonColor((prevColor) =>
      prevColor === "#2a82da" ? "#1a61a0" : "#2a82da"
    );
  };

  return (
    <>
      <PageStyle />
      <Container>
        {/* <Link to="/">
          <Header>MOHAE 서비스</Header>
        </Link> */}
        <SubHeader>
          모해(MOHAE)는 "엄마, 아빠 그리고 나" 일상을 보다 더 건강하고 의미있게
          꾸며주는 플랫폼입니다.
          <br /> 가족들이 더욱 친밀한 관계를 가지고 표현하기 어려웠던 생각과
          마음을 나누어 아름답습니다!
        </SubHeader>
        <Form>
          <SignupText>회원가입 모해?</SignupText>
          <Label>이름</Label>
          <Input
            type="text"
            placeholder="실명 입력"
            value={name}
            onChange={handleNameChange}
          />

          <Label>휴대폰 번호</Label>
          <Input
            type="text"
            placeholder="숫자만 입력"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <ErrorText>{phoneError}</ErrorText>}

          <Label>생년월일</Label>
          <Input
            type="text"
            placeholder="6자리 숫자만 입력"
            value={dob}
            onChange={handleDobChange}
          />
          {dobError && <ErrorText>{dobError}</ErrorText>}

          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임 입력"
            value={nickname}
            onChange={handleNicknameChange}
          />

          <Label>관심태그</Label>
          <InterestTags>
            {[
              "자기개발",
              "문화",
              "독서",
              "그림",
              "게임",
              "건강",
              "아웃도어",
              "여행",
              "뷰티",
              "교육",
              "뮤지컬",
              "전시회",
              "요리",
              "맛집",
              "호텔",
              "운동",
              "명상",
              "커피",
              "심리",
              "외국어",
            ].map((tag) => (
              <Tag
                key={tag}
                bgColor={tagColors[tag] || "#f0f0f0"}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Tag>
            ))}
          </InterestTags>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreeToAll}
              onChange={handleAgreeToAllChange}
            />
            전체 동의
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreeToMarketing}
              onChange={handleMarketingChange}
            />
            마케팅 수신 동의
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreeToPrivacy}
              onChange={handlePrivacyChange}
            />
            개인정보 처리방침 동의
          </CheckboxLabel>

          <Button
            type="button"
            onClick={handleButtonClick}
            bgColor={buttonColor}
            disabled={!isFormValid}
          >
            회원 가입
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
