import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import uploadImg from "../../assets/imgplus.png"; // 업로드한 이미지 경로

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
  width: 90%;
  height: 600px;
  overflow-y: auto; /* 스크롤 가능하게 설정 */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GalleryButton = styled.div`
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

const TitleInputText = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  margin-bottom: 10px;
`;

const TitleInput = styled.input`
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

const DetailTitleInputText = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  margin-bottom: 10px;
`;

const DetailTitleInput = styled.input`
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

const TagText = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.23px;
  margin-bottom: 10px;
`;

const TagInput = styled.input`
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

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Tag = styled.div`
  background-color: #2d539e;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

const RemoveTagButton = styled.span`
  margin-left: 10px;
  cursor: pointer;
  color: #ff0000;
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
  const [photos, setPhotos] = useState([]);
  const [previewSrcs, setPreviewSrcs] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      title.trim() !== "" &&
        detailTitle.trim() !== "" &&
        photos.length > 0 &&
        tags.length > 0
    );
  }, [title, detailTitle, photos, tags]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailTitleChange = (event) => {
    setDetailTitle(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedPhotos = [...photos, ...files];

    setPhotos(updatedPhotos);

    const previews = updatedPhotos.map((file) => URL.createObjectURL(file));
    setPreviewSrcs(previews);
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleTagKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      tagInput.trim() !== "" &&
      tagInput.startsWith("#")
    ) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // Upload logic would go here
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
        <GalleryButton>갤러리</GalleryButton>
        <div>
          <CustomPhotoButtonText>이미지선택</CustomPhotoButtonText>
          <CustomPhotoButton
            src={uploadImg}
            alt="Select Photos"
            onClick={openFileDialog}
          />
        </div>

        <HiddenPhotoInput
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
        />

        <PreviewContainer>
          {previewSrcs.map((src, index) => (
            <PreviewImage key={index} src={src} alt={`Preview ${index}`} />
          ))}
        </PreviewContainer>
        {photos.length > 0 && (
          <PhotoCount>Selected Photos: {photos.length}</PhotoCount>
        )}

        <div>
          <TitleInputText>피드제목</TitleInputText>
          <TitleInput
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <DetailTitleInputText>상세제목</DetailTitleInputText>
          <DetailTitleInput
            type="text"
            placeholder="상세 제목을 입력하세요"
            value={detailTitle}
            onChange={handleDetailTitleChange}
          />
        </div>

        <div>
          <TagText>태그 작성</TagText>
          <TagInput
            type="text"
            placeholder="#과 함께 태그를 입력하고 Enter를 누르세요"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyPress={handleTagKeyPress}
          />
          <TagContainer>
            {tags.map((tag, index) => (
              <Tag key={index}>
                {tag}
                <RemoveTagButton onClick={() => handleRemoveTag(index)}>
                  ×
                </RemoveTagButton>
              </Tag>
            ))}
          </TagContainer>
          <Buttons>
            <UploadButton onClick={handleUpload} disabled={!isFormValid}>
              등록하기
            </UploadButton>
            <RemoveButton onClick={closeModal}>취소하기</RemoveButton>
          </Buttons>
        </div>
      </Modal>
    </Overlay>
  );
};

export default PhotoPlus;
