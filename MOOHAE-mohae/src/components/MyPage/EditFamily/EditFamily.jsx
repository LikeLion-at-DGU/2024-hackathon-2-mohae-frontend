import * as S from "./Styled";


const EditFamily = () => {
  return (
    <S.EditFamilyContainer>
      <S.Row>
        <S.EditFamilyTitle>가족 구성원</S.EditFamilyTitle>
        <S.AddFamily>구성원 초대하기 +</S.AddFamily>
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
  );
}

export default EditFamily;