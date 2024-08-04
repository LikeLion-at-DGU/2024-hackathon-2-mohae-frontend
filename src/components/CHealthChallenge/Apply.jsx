import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import uploadImg from "../../assets/imgplus.png"; // 업로드한 이미지 경로

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  width: 90%;
  height: 600px;
  overflow-y: auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ApplyButton = styled.div`
  color: #fff;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  display: flex;
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #2d539e;
  margin-bottom: 50px;
`;

const UploadButton = styled.button`
  color: #fff;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  display: flex;
  width: 150px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.disabled ? "#CCCCCC" : "#2d539e")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.disabled ? "#CCCCCC" : "#1e3b73")};
  }
`;

const RemoveButton = styled.button`
  display: flex;
  width: 150px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  border: 2px solid #2d539e;
  background: #fff;
  color: #2d539e;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`;

const PhotoPlus = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detailTitle, setDetailTitle] = useState("");
  const [photos, setPhotos] = useState([]);
  const [tags, setTags] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    setIsFormValid(
      title.trim() !== "" &&
        detailTitle.trim() !== "" &&
        photos.length > 0 &&
        tags.length > 0
    );
  }, [title, detailTitle, photos, tags]);

  const handleUpload = () => {
    if (!isFormValid) return;

    // API 통신 부분을 제거하였습니다.
    console.log("Form data is valid and ready to be uploaded.");
  };

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <Overlay>
      <Modal>
        <ApplyButton>갤러리</ApplyButton>
        <Buttons>
          <UploadButton onClick={handleUpload} disabled={!isFormValid}>
            신청하기
          </UploadButton>
          <RemoveButton onClick={closeModal}>취소하기</RemoveButton>
        </Buttons>
      </Modal>
    </Overlay>
  );
};

export default PhotoPlus;
