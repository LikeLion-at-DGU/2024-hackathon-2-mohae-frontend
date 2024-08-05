import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { fetchFolders } from "../../api/getFolder";
import { API } from "../../api";

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
  overflow-y: hidden;
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
  overflow-y: scroll;
`;

const SmallModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  width: 200px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 20%;
  left: 60%;
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

const HeaderTitle = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
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

const PostTitle = styled.div`
  font-size: 20px;
  color: #333;
  margin: 0 0 10px;
  font-weight: bold;
`;

const PostText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 0 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 30px;
`;

const CommentSection = styled.div`
  flex: 1;
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

const PhotoDetail = ({ photoData, closeModal }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isMoveFolderModalOpen, setIsMoveFolderModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const fetchedFolders = await fetchFolders();
        setFolders(fetchedFolders); // 폴더 데이터를 전체 저장
      } catch (error) {
        console.error("폴더 목록 가져오기 에러: ", error);
      }
    };

    loadFolders();
    fetchComments(photoData.id); // photoData.id를 이용해 댓글을 가져옵니다.
  }, [photoData.id]);

  const fetchComments = async (photoId) => {
    try {
      const response = await API.get(`/gallery/comments`);
      const matchingComments = response.data.filter(
        (item) => item.photo === photoId
      );
      if (matchingComments.length > 0) {
        setComments(matchingComments);
      } else {
        console.log("사진 ID가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("댓글 불러오기 실패: ", error);
    }
  };

  const reply = async () => {
    try {
      await API.post("/gallery/comments", {
        photo: photoData.id,
        text: newComment,
      });
      alert("댓글이 작성되었습니다!!!");
      setNewComment("");
      fetchComments(photoData.id); // 댓글 작성 후 다시 댓글을 가져옵니다.
    } catch (error) {
      console.error("댓글 작성에 실패했습니다 ", error);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    reply();
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

  const handleFolderClick = (folderId) => {
    console.log("클릭된 폴더 ID:", folderId); // 폴더 ID가 올바르게 선택되는지 확인
    setSelectedFolder(folderId);
  };

  const handleDeletePhoto = async () => {
    try {
      await API.delete(`/gallery/photos/${photoData.id}`);
      alert("사진이 삭제되었습니다.");
      closeModal(); // 삭제 후 모달 닫기
      window.location.reload();
    } catch (error) {
      console.error("사진 삭제 실패: ", error);
      alert("사진 삭제에 실패했습니다.");
    }
  };

  const handleMoveFolderSubmit = async () => {
    if (selectedFolder) {
      try {
        console.log("선택 폴더 ID", selectedFolder);
        console.log(photoData.id);
        const response = await API.post(
          `/gallery/photos/${photoData.id}/add_to_album`,
          {
            album: selectedFolder, // 폴더 ID를 사용
          }
        );
        if (response.status === 200 || response.status === 201) {
          alert("폴더 이동이 완료되었습니다.");
          setIsMoveFolderModalOpen(false);
          closeModal(); // 모달 닫기
          window.location.reload();
        } else {
          console.error("Unexpected response:", response);
          alert("폴더 이동에 실패했습니다.");
        }
      } catch (error) {
        console.error("폴더 이동 실패: ", error);
        alert("폴더 이동에 실패했습니다.");
      }
    } else {
      alert("이동할 폴더를 선택해주세요.");
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <Header>
          {/* <HeaderIcon src="icon-url" alt="icon" />
          <HeaderTitle>{photoData.date}</HeaderTitle> */}
        </Header>
        <PostInfo>
          <Avatar src={photoData.profile.avatar} alt="avatar" />
          <PostContent>
            <PostText>{photoData.profile.nickname}</PostText>
          </PostContent>
          <FontAwesomeIcon
            icon={faSliders}
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleSettingsClick}
            ref={iconRef}
          />
        </PostInfo>
        <Image src={photoData.image} alt="photo" />
        <PostTitle>{photoData.title}</PostTitle>
        <PostText>{photoData.description}</PostText>
        <Line></Line>
        <CommentSection>
          <CommentList>
            {comments.map((comment, index) => (
              <CommentItem key={index}>
                <CommentAvatar
                  src={
                    comment.user_profile_image || "/path/to/default/avatar.jpg"
                  }
                  alt="avatar"
                />
                <CommentText>
                  <strong>{comment.user_name}</strong>
                  <p>{comment.text}</p>
                </CommentText>
              </CommentItem>
            ))}
          </CommentList>
        </CommentSection>
        <CommentForm onSubmit={handleCommentSubmit}>
          <TextArea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
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
          <Button onClick={handleDeletePhoto}>사진 삭제하기</Button>
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
                <Folder
                  key={folder.id}
                  onClick={() => handleFolderClick(folder.id)}
                >
                  <FontAwesomeIcon
                    icon={
                      selectedFolder === folder.id ? faFolderOpen : faFolder
                    }
                    size="3x"
                  />
                  <FolderName>{folder.name}</FolderName>
                </Folder>
              ))}
            </FolderList>
            <Button onClick={handleMoveFolderSubmit}>폴더 이동하기</Button>
          </SecondModal>
        </Overlay>
      )}
    </Overlay>
  );
};

export default PhotoDetail;
