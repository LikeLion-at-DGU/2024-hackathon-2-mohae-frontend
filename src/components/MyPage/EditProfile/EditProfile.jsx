import React, { useState } from "react";
import * as S from "./Styled";
import Camera from '../../../assets/camera.png';

const EditProfile = () => {
  const [showform, setShowform] = useState(false);
  const [information, setInformation] = useState([
    {name: '오태준', nickname: '하이'}
  ]);

  const [newinformation, setNewinformation] = useState({name: '', nickname: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewinformation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInformation([...information, { ...newinformation}]);
    setNewinformation({ name: '', nickname: '' });
    setShowform(false);
  };

  return (
    <>
      <S.EditProfileContainer>
        <S.EditProfileImage>
          <S.EditProfileLogo><S.IMG src={Camera} alt="Camera" /></S.EditProfileLogo>
        </S.EditProfileImage>
        <S.EditProfileContent>
          <S.EditProfileName>{information[0].name}</S.EditProfileName>
          <S.EditProfileText onClick={() => setShowform(true)}>회원정보수정</S.EditProfileText>
        </S.EditProfileContent>
      </S.EditProfileContainer>
      {showform && (
        <>
          <S.backWrapping onClick={() => setShowform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>회원정보수정</S.FormTitle>
              <S.FormText>이름</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle 
                  type="text"
                  name="name"
                  value={information.name}
                  onChange={handleChange}
                  placeholder="이름을 입력해주세요."
                />
              </S.contentContainer>
              <S.FormText>시간</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle 
                  type="text"
                  name="nickname"
                  value={information.nickname}
                  onChange={handleChange}
                  placeholder="별명을 입력해주세요."
                />
              </S.contentContainer>
              <S.row>
                <S.EditProfileCloseButton onClick={() => setShowform(false)}>닫기</S.EditProfileCloseButton>
                <S.EditProfileAddButton onClick={handleSubmit}>추가</S.EditProfileAddButton>
              </S.row>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
}

export default EditProfile;
