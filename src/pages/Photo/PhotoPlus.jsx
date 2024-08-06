import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import uploadImg from "../../assets/imgplus.png";
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
  @media (max-width: 360px) {
    width: 90%;
    height: 80%;
    max-height: 80%;
    padding: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  height: 600px;
  overflow-y: auto; /* 스크롤 가능하게 설정 */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 360px) {
    width: 360px;
    position: absolute;
    top: 200px;
    height: 800px;
    max-height: 80%;
    padding: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
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
  cursor: pointer;
`;

const InputText = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: flex;
  width: 90%;
  height: 20px;
  padding: 14px 22px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #ededed;
`;

const HiddenPhotoInput = styled.input`
  display: none;
`;

const CustomPhotoButtonText = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  margin-bottom: -10px;
`;

const CustomPhotoButton = styled.img`
  display: block;
  width: 70px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
  transition: box-shadow 0.3s ease, transform 0.1s ease;

  &:active {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
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
  cursor: pointer;
`;

const PhotoCount = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 1.1rem;
  color: #333;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const PreviewImage = styled.img`
  margin: 10px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ddd;
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

const Buttons = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`;

const PhotoPlus = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [detailTitle, setDetailTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsFormValid(
      title.trim() !== "" && detailTitle.trim() !== "" && photo !== null
    );
  }, [title, detailTitle, photo]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailTitleChange = (event) => {
    setDetailTitle(event.target.value);
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      const preview = URL.createObjectURL(file);
      setPreviewSrc(preview);
    }
  };

  const handleUpload = async () => {
    if (photo) {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", detailTitle);
        formData.append("image", photo);

        const response = await API.post("/gallery/photos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("폼데이터: ", response.data);
        window.location.reload();
      } catch (error) {
        console.error("Error uploading data", error);
      }
    }
  };

  const closeModal = () => {
    navigate(0);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <Overlay>
      <Modal>
        <Button onClick={() => navigate("/gallery")}>갤러리</Button>
        <div>
          <CustomPhotoButtonText>이미지 선택</CustomPhotoButtonText>
          <CustomPhotoButton
            src={uploadImg}
            alt="Select Photos"
            onClick={openFileDialog}
          />
        </div>

        <HiddenPhotoInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />

        {previewSrc && (
          <PreviewContainer>
            <PreviewImage src={previewSrc} alt="Preview" />
          </PreviewContainer>
        )}
        {photo && <PhotoCount>Selected Photo</PhotoCount>}

        <div>
          <InputText>피드 제목</InputText>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <InputText>상세 제목</InputText>
          <Input
            type="text"
            placeholder="상세 제목을 입력하세요"
            value={detailTitle}
            onChange={handleDetailTitleChange}
          />
        </div>

        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}

        <Buttons>
          <UploadButton onClick={handleUpload} disabled={!isFormValid}>
            등록하기
          </UploadButton>
          <RemoveButton onClick={closeModal}>취소하기</RemoveButton>
        </Buttons>
      </Modal>
    </Overlay>
  );
};

export default PhotoPlus;
