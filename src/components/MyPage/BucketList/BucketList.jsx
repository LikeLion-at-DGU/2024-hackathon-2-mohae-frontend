import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { API } from "../../../api";

const BucketList = () => {
  const [showForm, setShowForm] = useState(false);
  const [newBucket, setNewBucket] = useState('');
  const [bucketlist, setBucketlist] = useState([]);

  const fetchBucketList = async () => {
    try {
      const response = await API.get('/users/bucketlists');
      setBucketlist(response.data);
    } catch (error) {
      console.error('Failed to fetch bucket list:', error);
    }
  };

  useEffect(() => {
    fetchBucketList();
  }, []);

  const handleAddBucketList = async () => {
    try {
      const response = await API.post('/users/bucketlists', { title: newBucket });
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

  const handleDeleteBucketList = async (id) => {
    try {
      await API.delete(`/users/bucketlists/${id}`);
      setBucketlist(prevList => prevList.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete bucket list:', error);
    }
  };

  const handleToggleCompletion = async (id, finish) => {
    try {
      await API.patch(`/users/bucketlists/${id}`, { description: finish ? "" : "finish" });
      setBucketlist(prevList =>
        prevList.map(item =>
          item.id === id ? { ...item, description: finish ? "" : "finish" } : item
        )
      );
    } catch (error) {
      console.error('Failed to update bucket list:', error);
    }
  };

  const unfinishedBuckets = bucketlist.filter(item => item.description !== "finish");
  const finishedBuckets = bucketlist.filter(item => item.description === "finish");

  return (
    <>
      <S.BucketListContainer>
        <S.Row>
          <S.BucketListTitle>버킷리스트</S.BucketListTitle>
          <S.AddBucketList onClick={() => setShowForm(true)}>추가하기 +</S.AddBucketList>
        </S.Row>
        <S.BucketListLine />
        <S.BucketList>
          {unfinishedBuckets.map((item, index) => (
            <S.Bucket key={item.id}>
              <S.BucketNumber>{index + 1}</S.BucketNumber>
              <S.BucketContent>{item.title}</S.BucketContent>
              <S.Actions className="actions">
                <S.ActionButton onClick={() => handleToggleCompletion(item.id, false)}><S.StyFaCheck /></S.ActionButton>
                <S.ActionButton onClick={() => handleDeleteBucketList(item.id)}><S.StyFaTimes /></S.ActionButton>
              </S.Actions>
            </S.Bucket>
          ))}
          {showForm && (
            <S.InputBucket>
              <S.BucketNumber>{bucketlist.length + 1}</S.BucketNumber>
              <S.EventInputStyle
                type="text"
                value={newBucket}
                onChange={(e) => setNewBucket(e.target.value)}
                placeholder="당신의 버킷리스트를 입력해주세요"
              />
              <S.ActionButton onClick={handleAddBucketList}><S.StyFaCheck /></S.ActionButton>
            </S.InputBucket>
          )}
          {finishedBuckets.map((item, index) => (
            <S.Bucket key={item.id} completed="true">
              <S.BucketNumber>{unfinishedBuckets.length + index + 1}</S.BucketNumber>
              <S.BucketContent completed="true">{item.title}</S.BucketContent>
              <S.Actions className="actions">
                <S.ActionButton onClick={() => handleToggleCompletion(item.id, true)}><S.StyFaRedo /></S.ActionButton>
              </S.Actions>
            </S.Bucket>
          ))}
        </S.BucketList>
      </S.BucketListContainer>
    </>
  );
}

export default BucketList;
