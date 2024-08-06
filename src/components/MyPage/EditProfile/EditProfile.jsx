import React, { useEffect, useState, useRef } from "react";
import * as S from "./Styled";
import Camera from '../../../assets/camera.png';
import uploadImg from '../../../assets/imgplus.png';
import { API } from '../../../api'; // 로그아웃 함수 추가

const EditProfile = () => {
  const [showform, setShowform] = useState(false);
  const [information, setInformation] = useState({
    nickname: '',
    phone_number: '',
    address: '',
    profile_picture: ''
  });
  const [profileId, setProfileId] = useState(null);

  const [newinformation, setNewinformation] = useState({
    nickname: '',
    phone_number: '',
    address: '',
    profile_picture: ''
  });

  const fileInputRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
    GetUserData();
  }, []);

  const GetUserData = async () => {
    try {
      const response = await API.get("/users/profiles");
      const data = response.data;
      console.log(data);
      const profile = data[0] || {};
      setInformation({
        nickname: profile.nickname || '',
        phone_number: profile.phone_number || '',
        address: profile.address || '',
        profile_picture: profile.profile_picture || ''
      });
      setProfileId(profile.id);
      setPreviewSrc(profile.profile_picture || Camera);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewinformation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewinformation(prevState => ({
        ...prevState,
        profile_picture: file
      }));
      const preview = URL.createObjectURL(file);
      setPreviewSrc(preview);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (newinformation.nickname) {
      formData.append("nickname", newinformation.nickname);
    }
    if (newinformation.phone_number) {
      formData.append("phone_number", newinformation.phone_number);
    }
    if (newinformation.address) {
      formData.append("address", newinformation.address);
    }
    if (newinformation.profile_picture instanceof File) {
      formData.append("profile_picture", newinformation.profile_picture);
    }

    console.log('올릴데이터', newinformation);

    try {
      const response = await API.put(`/users/profiles/${profileId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      GetUserData();
      setShowform(false);
    } catch (error) {
      console.error(error);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleLogout = async () => {
    try {
      const response = await API.post('/accounts/logout/');
      window.location('/login');
    } catch (error) {
      console.error("로그아웃 중 에러가 발생했습니다.", error);
    }
  };

  return (
    <>
      <S.EditProfileContainer>
        <S.EditProfileImage>
          <S.EditProfileLogo>
            <S.IMG src={previewSrc} alt="Profile" />
          </S.EditProfileLogo>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </S.EditProfileImage>
        <S.EditProfileContent>
          <S.EditProfileName>{information.nickname}</S.EditProfileName>
          <S.EditProfileText onClick={() => setShowform(true)}>회원정보수정</S.EditProfileText>
        </S.EditProfileContent>
      </S.EditProfileContainer>
      {showform && (
        <>
          <S.backWrapping onClick={() => setShowform(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>회원정보수정</S.FormTitle>
              <S.FormText>닉네임</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle
                  type="text"
                  name="nickname"
                  value={newinformation.nickname}
                  onChange={handleChange}
                  placeholder={information.nickname}
                />
              </S.contentContainer>
              <S.FormText>전화번호</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle
                  type="text"
                  name="phone_number"
                  value={newinformation.phone_number}
                  onChange={handleChange}
                  placeholder={information.phone_number}
                />
              </S.contentContainer>
              <S.FormText>주소</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle
                  type="text"
                  name="address"
                  value={newinformation.address}
                  onChange={handleChange}
                  placeholder={information.address}
                />
              </S.contentContainer>
              <S.FormText>프로필 사진</S.FormText>
              <S.contentContainer>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
                {previewSrc && (
                  <S.PreviewContainer>
                    <S.PreviewImage src={previewSrc} alt="Preview" />
                  </S.PreviewContainer>
                )}
                <S.CustomPhotoButton
                  src={uploadImg}
                  alt="Select Photos"
                  onClick={openFileDialog}
                />
              </S.contentContainer>
              <S.row>
                <S.EditProfileCloseButton onClick={() => setShowform(false)}>닫기</S.EditProfileCloseButton>
                <S.EditProfileAddButton onClick={handleSubmit}>수정</S.EditProfileAddButton>
              </S.row>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
};

export default EditProfile;
