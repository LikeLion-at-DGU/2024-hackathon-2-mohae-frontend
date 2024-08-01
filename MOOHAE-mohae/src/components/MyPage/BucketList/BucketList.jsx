import React, { useState } from "react";
import * as S from "./Styled";

const BucketList = () => {
  const [showForm, setShowForm] = useState(false);
  const [newBucket, setNewBucket] = useState('');

  const [bucketlist, setBucketlist] = useState([
    { bucketlist: '나는 놀러가야지' }
  ]);

  const handleAddBucketList = () => {
    setBucketlist(prevList => [
      ...prevList,
      { bucketlist: newBucket }
    ]);
    setNewBucket('');
    setShowForm(false);
  };

  return (
    <>
      <S.BucketListContainer>
        <S.Row>
          <S.BucketListTitle>버킷리스트</S.BucketListTitle>
          <S.AddBucketList onClick={() => setShowForm(true)}>추가하기 +</S.AddBucketList>
        </S.Row>
        <S.BucketListLine />
        <S.BucketList>
          {bucketlist.map((item, index) => (
            <S.Bucket key={index}>
              <S.BucketNumber>{index + 1}</S.BucketNumber>
              <S.BucketContent>{item.bucketlist}</S.BucketContent>
            </S.Bucket>
          ))}
        </S.BucketList>
      </S.BucketListContainer>
      {showForm && (
        <>
          <S.backWrapping onClick={() => setShowForm(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>버킷리스트 추가</S.FormTitle>
              <S.FormText>가족의 버킷리스트</S.FormText>
              <S.contentContainer>
                <S.EventInputStyle 
                  type="text"
                  value={newBucket}
                  onChange={(e) => setNewBucket(e.target.value)}
                  placeholder="당신의 버킷리스트를 입력해주세요"
                />
              </S.contentContainer>
              <S.row>
                <S.BucketListCloseButton onClick={() => setShowForm(false)}>닫기</S.BucketListCloseButton>
                <S.BucketListAddButton onClick={handleAddBucketList}>버킷리스트 추가</S.BucketListAddButton>
              </S.row>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
}

export default BucketList;
