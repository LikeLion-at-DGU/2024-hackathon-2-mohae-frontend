import * as S from "./Styled";

import Camera from '../../../assets/camera.png'

const EditProfile = () => {
  return (
    <S.EditProfileContainer>
      <S.EditProfileImage>
        <S.EditProfileLogo><img src={Camera} alt="Camera" style={{ width: 40, height: 40 }} /></S.EditProfileLogo>
      </S.EditProfileImage>
      <S.EditProfileContent>
        <S.EditProfileName>구도욱</S.EditProfileName>
        <S.EditProfileText>회원정보수정</S.EditProfileText>
      </S.EditProfileContent>
    </S.EditProfileContainer>
  );
}

export default EditProfile;