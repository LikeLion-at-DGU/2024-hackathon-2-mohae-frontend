import React, { useState, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from "./Styled";
import styled from "styled-components";
import uploadImg from "../../assets/imgplus.png";
import { API } from "../../api";

import Mohaeduaghter from "../../assets/mohaedaughter.png";
import Mohaeson from "../../assets/mohaeson.png";
import Mohaemom from "../../assets/mohaemom.png";
import Mohaedad from "../../assets/mohaedad.png";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <S.FormInputforDate onClick={onClick} ref={ref}>
    {value || '날짜를 선택해주세요'}
  </S.FormInputforDate>
));

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chkpassword, setChkpassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [birth, setBirth] = useState("");
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const [checkedMarketing, setCheckedMarketing] = useState(false);

  const [firstform, setFirstform] = useState(true);
  const [secondform, setSecondform] = useState(false);
  const [thirdform, setThirdform] = useState(false);

  const [privacyform, setPrivacyform] = useState(false);
  const [marketingform, setMarketingform] = useState(false);

  const fileInputRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      const preview = URL.createObjectURL(file);
      setPreviewSrc(preview);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const selectDefaultPhoto = (photo) => {
    setPhoto(photo);
    setPreviewSrc(photo);
  };

  const FirstFormNext = () => {
    setFirstform(false);
    setSecondform(true);
    setThirdform(false);
  };

  const SecondFormPrev = () => {
    setFirstform(true);
    setSecondform(false);
    setThirdform(false);
  };

  const SecondFormNext = () => {
    setFirstform(false);
    setSecondform(false);
    setThirdform(true);
  };

  const ThirdFormPrev = () => {
    setFirstform(false);
    setSecondform(true);
    setThirdform(false);
  };

  const OnPrivacyform = () => {
    setThirdform(false);
    setPrivacyform(true);
  }

  const OffPrivacyform = () => {
    setThirdform(true);
    setPrivacyform(false);
  }

  const OnMarketingform = () => {
    setThirdform(false);
    setMarketingform(true);
  }

  const OffMarketingform = () => {
    setThirdform(true);
    setMarketingform(false);
  }

  const handleSubmit = async () => {
    const formattedBirthDate = new Date(birth).toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식으로 변환

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("profile.phone_number", phonenumber);
    formData.append("profile.nickname", nickname);
    formData.append("profile.birth_date", formattedBirthDate);
    formData.append("profile.address", address);
    formData.append("profile.profile_picture", photo);

    try {
      const response = await API.post("/accounts/register/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("회원가입이 완료되었습니다!");
        window.location.href = "/login";
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleCheckAll = (event) => {
    const checked = event.target.checked;
    setCheckedAll(checked);
    setCheckedPrivacy(checked);
    setCheckedMarketing(checked);
  };

  const handleCheckPrivacy = (event) => {
    const checked = event.target.checked;
    setCheckedPrivacy(checked);
    setCheckedAll(checked && checkedMarketing);
  };

  const handleCheckMarketing = (event) => {
    const checked = event.target.checked;
    setCheckedMarketing(checked);
    setCheckedAll(checked && checkedPrivacy);
  };

  return (
    <>
      <S.PageStyle />
      <S.BackEffect>
        <S.Container>
          <S.Top>
            <StyledLink to="/">
              <S.MOHAEsytle>MOHAE</S.MOHAEsytle>
            </StyledLink>
          </S.Top>
          {firstform && (
            <S.FirstForm>
              <S.FormTitle>회원가입 모해?</S.FormTitle>
              <S.FormSubtitle>모해 서비스에 오신 것을 환영합니다.</S.FormSubtitle>
              <S.FormSet>
                <S.FormText>아이디</S.FormText>
                <S.FormInput
                  type="text"
                  placeholder="영어, 숫자를 포함하여 최소 6자리, 최대 30자리"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>비밀번호</S.FormText>
                <S.FormInput
                  type="password"
                  placeholder="영어, 숫자를 포함하여 최소 6자리"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>비밀번호 확인</S.FormText>
                <S.FormInput
                  type="password"
                  placeholder="비밀번호 재입력"
                  value={chkpassword}
                  onChange={(e) => setChkpassword(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>닉네임</S.FormText>
                <S.FormInput
                  type="text"
                  placeholder="닉네임 입력"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </S.FormSet>
              <S.Buttonlist>
                <StyledLink to={"/login"} style={{ width: "100%" }}>
                  <S.PrevButton>로그인 화면으로</S.PrevButton>
                </StyledLink>
                <S.NextButton onClick={FirstFormNext}>다음</S.NextButton>
              </S.Buttonlist>
            </S.FirstForm>
          )}

          {secondform && (
            <S.SecondForm>
              <S.FormTitle>기본 정보</S.FormTitle>
              <S.FormSubtitle>
                본인의 이름과 휴대폰 번호를 모두 정확하게 입력해 주세요.
              </S.FormSubtitle>
              <S.FormSet>
                <S.FormText>이름</S.FormText>
                <S.NameRow>
                  <S.FormInputRow
                    type="text"
                    placeholder="성"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <S.FormInputRow
                    type="text"
                    placeholder="이름"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </S.NameRow>
              </S.FormSet>
              <S.FormSet>
                <S.FormText>휴대폰 번호</S.FormText>
                <S.FormInput
                  type="text"
                  placeholder="숫자만 입력"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>주소</S.FormText>
                <S.FormInput
                  type="text"
                  placeholder="주소를 입력해주세요."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>이메일</S.FormText>
                <S.FormInput
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </S.FormSet>
              <S.FormSet>
                <S.FormText>생년월일</S.FormText>
                <DatePicker
                  showIcon
                  icon={
                    <S.StyledPi/>
                  }
                  selected={birth}
                  value={birth}
                  onChange={(date) => setBirth(date)}
                  dateFormat="yyyy/MM/dd"
                  customInput={<CustomDateInput />}
                />
              </S.FormSet>
              <S.Buttonlist>
                <S.PrevButton onClick={SecondFormPrev}>이전</S.PrevButton>
                <S.NextButton onClick={SecondFormNext}>다음</S.NextButton>
              </S.Buttonlist>
            </S.SecondForm>
          )}

          {thirdform && (
            <S.ThirdForm>
              <S.FormTitle>기본 정보</S.FormTitle>
              <S.FormSubtitle>본인의 사진과 관심 태그를 선택해주세요.</S.FormSubtitle>
              <S.FormSet>
                <S.FormText>프로필</S.FormText>
                <S.FormSemiText>
                  사진을 추가하거나, 기본 이미지로 프로필을 설정할 수 있습니다.
                </S.FormSemiText>
                <S.BasicImageContainer>
                  <S.CustomPhotoButton
                    src={uploadImg}
                    alt="Select Photos"
                    onClick={openFileDialog}
                  />
                  <S.FormInput
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />
                  <S.FormText></S.FormText>
                  <S.BasicImage
                    src={Mohaeduaghter}
                    alt="기본 이미지1"
                    onClick={() => selectDefaultPhoto(Mohaeduaghter)}
                  />
                  <S.BasicImage
                    src={Mohaeson}
                    alt="기본 이미지2"
                    onClick={() => selectDefaultPhoto(Mohaeson)}
                  />
                  <S.BasicImage
                    src={Mohaemom}
                    alt="기본 이미지3"
                    onClick={() => selectDefaultPhoto(Mohaemom)}
                  />
                  <S.BasicImage
                    src={Mohaedad}
                    alt="기본 이미지4"
                    onClick={() => selectDefaultPhoto(Mohaedad)}
                  />
                </S.BasicImageContainer>
                {previewSrc && (
                  <S.PreviewContainer>
                    <S.PreviewImage src={previewSrc} alt="Preview" />
                  </S.PreviewContainer>
                )}
                <S.FormText style={{display:'flex' ,justifyContent:'center'}}>이제 이 프로필로 모해와 함께합니다!</S.FormText>
              </S.FormSet>
              <S.FormSet>
                <S.FormText>태그</S.FormText>
                <S.FormSubtitle>평소에 관심있는 분야를 선택해주세요.</S.FormSubtitle>
                <S.Tags>
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
                    <S.Tag key={tag}>{tag}</S.Tag>
                  ))}
                </S.Tags>
              </S.FormSet>
              <S.FormSet>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={checkedAll}
                    onChange={handleCheckAll}
                  />
                  전체동의
                </S.CheckboxLabel>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={checkedPrivacy}
                    onChange={handleCheckPrivacy}
                  />
                  [필수] 개인정보 처리방침 <div onClick={OnPrivacyform} style={{cursor:'pointer'}}>보기</div>
                </S.CheckboxLabel>
                <S.CheckboxLabel>
                  <S.Checkbox
                    type="checkbox"
                    checked={checkedMarketing}
                    onChange={handleCheckMarketing}
                  />
                  [선택] 마케팅 수신 동의 <div onClick={OnMarketingform} style={{cursor:'pointer'}}>보기</div>
                </S.CheckboxLabel>
              </S.FormSet>
              <S.Buttonlist>
                <S.PrevButton onClick={ThirdFormPrev}>이전</S.PrevButton>
                <S.NextButton onClick={handleSubmit} disabled={!checkedPrivacy}>회원가입</S.NextButton>
              </S.Buttonlist>
            </S.ThirdForm>
          )}
          {privacyform && (
            <S.ThirdForm>
              <S.FormTitle>개인정보 처리방침</S.FormTitle>
              <S.ContentBody>
                <S.Content>
                  개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                </S.Content>
                <S.ContentTitle>
                  1. 수집하는 개인정보
                </S.ContentTitle>
                <S.Content>
                  이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
                </S.Content>
                <S.Content>
                  회원가입 시점에 모해가 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br />- 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 생년월일, 휴대전화번호를 수집합니다.
                </S.Content>
                <S.ContentTitle>
                  2. 수집한 개인정보의 이용
                </S.ContentTitle>
                <S.Content>
                  모해 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.<br />- 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
                </S.Content>
                <S.ContentTitle>
                  3. 개인정보 보관기간
                </S.ContentTitle>
                <S.Content>
                  회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다. 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
                </S.Content>
                <S.ContentTitle>
                  4. 개인정보 수집 및 이용 동의를 거부할 권리
                </S.ContentTitle>
                <S.Content>
                  이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
                </S.Content>
              </S.ContentBody>
              <S.Buttonlist>
                <S.NextButton onClick={OffPrivacyform}>동의함</S.NextButton>
              </S.Buttonlist>
            </S.ThirdForm>
          )}
          {marketingform && (
            <S.ThirdForm>
              <S.FormTitle>마케팅 수신 동의</S.FormTitle>
              <S.ContentBody>
                <S.Content>
                  네이버 및 제휴 서비스의 이벤트・혜택 등의 정보 발송을 위해 네이버 아이디(아이디 식별값 포함), 휴대전화번호(네이버 앱 알림 또는 문자), 이메일주소를 수집합니다.
                </S.Content>
                <S.Content>
                네이버 아이디(아이디 식별값 포함), 휴대전화번호 및 이메일주소는 네이버 서비스 제공을 위한 필수 수집항목으로서 네이버 회원 가입 기간 동안 보관하나, 이벤트 혜택 정보 수신 동의를 철회하시면 본 목적으로의 개인정보 처리는 중지됩니다. <br />정보주체는 개인정보 수집 및 이용 동의를 거부하실 수 있으며, 미동의 시에도 서비스 이용은 가능합니다.
                </S.Content>
                <S.Content>
                  ※ 일부 서비스(별개의 회원체계 운영, 네이버 가입 후 추가 가입하는 서비스 등)의 경우, 수신에 대해 별도로 안내 드리며, 동의를 구합니다.
                </S.Content>
              </S.ContentBody>
              <S.Buttonlist>
                <S.NextButton onClick={OffMarketingform}>동의함</S.NextButton>
              </S.Buttonlist>
            </S.ThirdForm>
          )}
        </S.Container>
      </S.BackEffect>
    </>
  );
};

export default Signup;
