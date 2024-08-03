import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { API } from '../../../api';

const BucketList = () => {
  const [showForm, setShowForm] = useState(false);
  const [newBucket, setNewBucket] = useState('');

  const [bucketlist, setBucketlist] = useState([]);

  useEffect(() => {
    const fetchBucketList = async () => {
      try {
        const response = await API.get('/users/bucketlists');
        setBucketlist(response.data);
      } catch (error) {
        console.error('Failed to fetch bucket list:', error);
      }
    };

    fetchBucketList();
  }, []);

  const handleAddBucketList = async () => {
    try {
      const response = await API.post('/users/bucketlists', { bucketlist: newBucket });
      setBucketlist(prevList => [
        ...prevList,
        response.data
      ]);
      setNewBucket('');
      setShowForm(false);
    } catch (error) {
      console.error('Failed to add bucket list:', error);
    }
  };

  const handleDeleteBucket = async (id) => {
    try {
      await API.delete(`/users/bucketlists/${id}`);
      setBucketlist(bucketlist.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete bucket list:', error);
    }
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
              <S.RemoveParticipant onClick={() => handleDeleteBucket(item.id)}>X</S.RemoveParticipant>
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
