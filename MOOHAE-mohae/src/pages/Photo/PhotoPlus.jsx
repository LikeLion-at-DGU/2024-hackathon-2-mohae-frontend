import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

const PhotoInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  font-size: 1rem;
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

const UploadButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#2d539e")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#cccccc" : "#1e3b73")};
  }
`;

const PhotoPlus = () => {
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

  return (
    <>
      <Link to="/">
        <MOHAEsytle>mohae</MOHAEsytle>
      </Link>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleTitleChange}
      />
      <PhotoInput
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
      <UploadButton onClick={handleUpload} disabled={!isFormValid}>
        Upload
      </UploadButton>
    </>
  );
};

export default PhotoPlus;
