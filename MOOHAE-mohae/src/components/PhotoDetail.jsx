import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { API } from "./../api"; // API 인스턴스 불러오기

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  height: 600px;
  width: 90%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const IMGcome = styled.div`
  background: gray;
  display: flex;
  justify-content: center;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const CommentSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 80px; /* 댓글 폼 높이 확보 */
`;

const CommentList = styled.div`
  margin-bottom: 20px;
`;

const CommentItem = styled.div`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ddd;
  z-index: 100;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  resize: none; /* 크기 조절 제한 */
  width: 100%;
  box-sizing: border-box; /* padding 포함한 너비 계산 */
`;

const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const PhotoDetail = ({ photoId }) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // 컴포넌트 마운트 시 댓글 목록 가져오기
    const loadComments = async () => {
      try {
        const response = await API.get(`/api/comments?photo_id=${photoId}`);
        setComments(response.data);
      } catch (error) {
        console.error("댓글을 가져오는 중 오류 발생:", error);
      }
    };

    loadComments();
  }, [photoId]);

  const closeModal = () => {
    navigate(-1); // 뒤로 가기
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      try {
        // API를 사용하여 서버에 댓글 전송
        const response = await API.post("/api/comments", {
          photo_id: photoId,
          text: newComment,
        });
        setComments([...comments, response.data]); // 새로운 댓글 추가
        setNewComment(""); // 입력 필드 초기화
      } catch (error) {
        console.error("댓글 저장 중 오류 발생:", error);
      }
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <IMGcome>이미지 더미데이터를 불러올 곳</IMGcome>
        <CommentSection>
          <CommentList>
            {comments.map((comment, index) => (
              <CommentItem key={index}>{comment.text}</CommentItem>
            ))}
          </CommentList>
        </CommentSection>
        <CommentForm onSubmit={handleCommentSubmit}>
          <TextArea
            value={newComment}
            onChange={handleNewCommentChange}
            rows="4"
            placeholder="댓글을 입력하세요"
          />
          <SubmitButton type="submit">댓글 남기기</SubmitButton>
        </CommentForm>
      </Modal>
    </Overlay>
  );
};

export default PhotoDetail;
