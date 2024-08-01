import * as S from "./Styled";


const BucketList = () => {
  return (
    <S.BucketListContainer>
      <S.Row>
        <S.BucketListTitle>버킷리스트</S.BucketListTitle>
        <S.AddBucketList>추가하기 +</S.AddBucketList>
      </S.Row>
      <S.BucketListLine />
      <S.BucketList>
        <S.Bucket>
          <S.BucketNumber>1</S.BucketNumber>
          <S.BucketContent>번지점프 하고말테야</S.BucketContent>
        </S.Bucket>
        <S.Bucket>
          <S.BucketNumber>2</S.BucketNumber>
          <S.BucketContent>가족들과 함께 한달 동안 세계일주 해보는 것이 소원입니다</S.BucketContent>
        </S.Bucket>
        <S.Bucket>
          <S.BucketNumber>3</S.BucketNumber>
          <S.BucketContent>제주도 가서 루지타보고 싶어요..</S.BucketContent>
        </S.Bucket>
        <S.Bucket>
          <S.BucketNumber>4</S.BucketNumber>
          <S.BucketContent>버킷리스트 작성하기</S.BucketContent>
        </S.Bucket>
      </S.BucketList>
    </S.BucketListContainer>
  );
}

export default BucketList;