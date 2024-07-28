import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
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
  height: 600px;
  width: 90%;
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
  /* padding: 10px 37px; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #2d539e;
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

const TitleInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  font-size: 1.25rem;
  border-radius: 5px;
  text-align: center;
  font-family: "NanumSquareRound", sans-serif;
`;

const HiddenPhotoInput = styled.input`
  display: none;
`;

const CustomPhotoButton = styled.img`
  display: block;
  width: 70px;
  cursor: pointer;
  margin: 0 auto; /* 가운데 정렬 */
  margin-top: 20px; /* 갤러리와의 간격 조정 */
  margin-left: 0px;
`;

const TagInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  font-size: 1rem;
  border-radius: 5px;
  font-family: "NanumSquareRound", sans-serif;
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
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ddd;
`;

const PhotoPlus = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [photos, setPhotos] = useState([]);
  const [previewSrcs, setPreviewSrcs] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(title.trim() !== "" && photos.length > 0);
  }, [title, photos]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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
    if (!isFormValid) return;

    const formData = new FormData();
    formData.append("title", title);

    photos.forEach((photo, index) => {
      formData.append(`photo${index}`, photo);
    });

    formData.append("tags", JSON.stringify(tags));

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // 업로드 성공 후 처리 로직
      })
      .catch((error) => {
        console.error("Error:", error);
        // 오류 처리 로직
      });
  };

  const closeModal = () => {
    navigate(-1); // 뒤로 가기
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <Overlay>
      <Modal>
        <GalleryButton>갤러리</GalleryButton>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <Link to="/">{/* <MOHAEsytle>mohae</MOHAEsytle> */}</Link>

        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />

        <CustomPhotoButton
          src={uploadImg}
          alt="Select Photos"
          onClick={openFileDialog}
        />
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
      </Modal>
    </Overlay>
  );
};

export default PhotoPlus;
