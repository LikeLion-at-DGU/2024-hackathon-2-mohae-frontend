import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { fetchFolders } from "../../api/getFolder";
import { API } from "../../api"; // 추가: API 인스턴스 가져오기

// 스타일 컴포넌트 정의
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
  overflow-y: hidden; /* 추가된 부분 */
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  height: 700px;
  width: 90%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll; /* 추가된 부분 */
`;

const SmallModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  width: 200px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 20%; /* 뷰포트 높이의 20% 지점 */
  left: 60%; /* 뷰포트 너비의 50% 지점 */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
`;

const SecondModal = styled.div`
  background: #5c5c5c;
  padding: 35px;
  border-radius: 30px;
  width: 432px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1002;
  position: relative;
`;

const Button = styled.button`
  border: none;
  background: white;
  color: pink;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px 0;

  &:active {
    color: #ff006a;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10001;
`;

const FolderList = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const FolderName = styled.span`
  margin-top: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const HeaderTitle = styled.h2`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostContent = styled.div`
  flex: 1;
  justify-content: space-between;
`;

const PostText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 0 10px;
`;

const Image = styled.img`
  width: 31.2rem;
  min-height: 500px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: blue;
  border: 1px solid red;
`;

const Line = styled.div`
  width: 32rem;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 30px;
`;

const CommentSection = styled.div`
  flex: 1;
  padding-bottom: 80px;
`;

const CommentList = styled.div`
  margin-bottom: 20px;
`;

const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CommentAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentText = styled.div`
  flex: 1;
  font-size: 14px;
`;

const CommentForm = styled.form`
  display: flex;
  padding: 11px 10px 11px 10px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 25px;
  background: #f3f4f6;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 400px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  background: #f3f4f6;
  color: #9f9f9f;
  font-family: NanumSquareRound;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.23px;
  resize: none;
  border: none;
`;

const SubmitButton = styled.button`
  background: #f3f4f6;
  width: 40px;
  color: #7ea6f6;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.46px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

const PhotoDetail = ({ photoId, closeModal }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isMoveFolderModalOpen, setIsMoveFolderModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("Default");
  const iconRef = useRef(null);

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const fetchedFolders = await fetchFolders();
        setFolders(fetchedFolders.map((folder) => folder.name));
      } catch (error) {
        console.error("폴더 목록 가져오기 에러: ", error);
      }
    };

    const fetchPhotoDetail = async () => {
      try {
        const response = await API.get(`/gallery/photos/${photoId}`);
        setData(response.data);
      } catch (error) {
        console.error("사진 정보를 불러오는 중 오류 발생:", error);
      }
    };

    loadFolders();
    fetchPhotoDetail();
  }, [photoId]);

  const deletePhoto = async () => {
    try {
      const response = await API.delete(`/gallery/photos/${photoId}`);
      console.log("삭제가 완료되었습니다", response);
      window.location.reload(); // 페이지 새로고침

      // closeModal();
    } catch (error) {
      console.error("삭제가 완료되지 않았습니다", error);
    }
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };

  const handleSettingsClick = () => {
    const iconRect = iconRef.current.getBoundingClientRect();
    setModalPosition({
      top: iconRect.bottom + window.scrollY,
      left: iconRect.left + window.scrollX,
    });
    setIsSettingsModalOpen(true);
  };

  const handleMoveFolderClick = () => {
    setIsMoveFolderModalOpen(true);
  };

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setIsMoveFolderModalOpen(false);
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <Header>
          <HeaderIcon src="icon-url" alt="icon" />
          <HeaderTitle>2024년 7월 31일 18:15</HeaderTitle>
        </Header>
        <PostInfo>
          <Avatar src="avatar-url" alt="avatar" />
          <PostContent>
            <PostText>구도욱</PostText>
          </PostContent>
          <FontAwesomeIcon
            icon={faSliders}
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleSettingsClick}
            ref={iconRef}
          />
        </PostInfo>
        <Image />
        <PostText>가족사진찍었습니다.</PostText>
        <Line></Line>
        <CommentSection>
          <CommentList>
            {comments.map((comment, index) => (
              <CommentItem key={index}>
                <CommentAvatar src="avatar-url" alt="avatar" />
                <CommentText>{comment}</CommentText>
              </CommentItem>
            ))}
          </CommentList>
        </CommentSection>
        <CommentForm onSubmit={handleCommentSubmit}>
          <TextArea
            value={newComment}
            onChange={handleNewCommentChange}
            rows="2"
            placeholder="댓글 달기"
          />
          <SubmitButton type="submit">제출</SubmitButton>
        </CommentForm>
      </Modal>

      {isSettingsModalOpen && (
        <SmallModal top={modalPosition.top} left={modalPosition.left}>
          <CloseButton onClick={() => setIsSettingsModalOpen(false)}>
            &times;
          </CloseButton>
          <Button onClick={deletePhoto}>사진 삭제하기</Button>
          <Button onClick={handleMoveFolderClick}>폴더 이동하기</Button>
        </SmallModal>
      )}

      {isMoveFolderModalOpen && (
        <Overlay>
          <SecondModal>
            <CloseButton onClick={() => setIsMoveFolderModalOpen(false)}>
              &times;
            </CloseButton>
            <h2 style={{ color: "white" }}>폴더 선택</h2>
            <FolderList>
              {folders.map((folder) => (
                <Folder key={folder} onClick={() => handleFolderClick(folder)}>
                  <FontAwesomeIcon
                    icon={selectedFolder === folder ? faFolderOpen : faFolder}
                    size="3x"
                  />
                  <FolderName>{folder}</FolderName>
                </Folder>
              ))}
            </FolderList>
            <Button onClick={() => setIsMoveFolderModalOpen(false)}>
              폴더 이동하기
            </Button>
          </SecondModal>
        </Overlay>
      )}
    </Overlay>
  );
};

export default PhotoDetail;
