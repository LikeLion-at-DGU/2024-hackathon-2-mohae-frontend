import React, { useState } from "react";
import GalleryFrame from "../../components/GalleryFrame";
import * as S from "./PhotoPoststyled";
import arrow from "../../assets/arrow.png";
import PhotoPlus from "./PhotoPlus";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import PhotoDetail from "../../components/PhotoDetail";

ReactModal.setAppElement("#root");

const PhotoPost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/"); // 모달 닫힌 후 PhotoPost 페이지로 이동
  };

  // 포토디테일 모달창 띄우기
  // 예시 이미지 데이터 배열, 각 이미지에 폴더 정보 포함
  const [images, setImages] = useState([
    { src: "image1.jpg", folder: "all" },
    { src: "image2.jpg", folder: "all" },
    { src: "image3.jpg", folder: "all" },
    { src: "image4.jpg", folder: "all" },
    { src: "image5.jpg", folder: "all" },
    { src: "image6.jpg", folder: "all" },
    { src: "image7.jpg", folder: "all" },
    { src: "image8.jpg", folder: "all" },
    { src: "image9.jpg", folder: "all" },
    { src: "image10.jpg", folder: "all" },
  ]);

  // 좋아요 상태 관리
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("all"); // 전체보기 필터가 기본값
  const [folders, setFolders] = useState([""]); // 기본 폴더 목록
  const [selectedFolder, setSelectedFolder] = useState("all"); // 선택된 폴더 관리

  // 좋아요 상태 토글 함수
  const handleLikeToggle = (imageSrc) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(imageSrc)
        ? prevFavorites.filter((fav) => fav !== imageSrc)
        : [...prevFavorites, imageSrc]
    );
  };

  // 필터 상태 변경 함수
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedFolder("all"); // 필터 변경 시 폴더 선택 초기화
  };

  // 폴더 선택 함수
  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
    setFilter("folder"); // 폴더 선택 시 필터를 "folder"로 설정
  };

  // 필터링된 이미지 배열
  const filteredImages =
    filter === "favorites"
      ? images.filter((image) => favorites.includes(image.src))
      : filter === "folder"
      ? images.filter((image) => image.folder === selectedFolder) // 폴더별 필터링
      : images;

  // 새로운 폴더 추가 및 이미지 선택
  const addNewFolder = () => {
    const newFolderName = prompt("새 폴더 이름을 입력하세요:");
    setFolders((prevFolders) => [...prevFolders, newFolderName]); // 폴더 목록에 새로운 폴더 추가
  };

  // 페이지 맨 위로 스크롤 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <S.Margin onClick={openModal}>추가하기 +</S.Margin>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            padding: 0,
            border: "none",
            background: "none",
            overflow: "visible",
            position: "unset",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <PhotoPlus closeModal={closeModal} />
      </ReactModal>
      <S.All>
        <S.Menubar>
          <S.Section>
            <S.ItemList>
              <S.Item
                onClick={() => handleFilterChange("all")}
                active={filter === "all"}
              >
                전체보기
              </S.Item>
            </S.ItemList>
          </S.Section>
          <S.Section>
            <S.SectionTitle>폴더별</S.SectionTitle>
            <S.ItemList>
              <S.Item
                onClick={() => handleFilterChange("favorites")}
                active={filter === "favorites"}
              >
                즐겨찾기
              </S.Item>
              {folders.map((folder, index) => (
                <S.Item
                  key={index}
                  onClick={() => handleFolderSelect(folder)}
                  active={selectedFolder === folder}
                >
                  {folder}
                </S.Item>
              ))}
              <S.Item onClick={addNewFolder}>+</S.Item>
            </S.ItemList>
          </S.Section>
        </S.Menubar>
        <S.Right>
          {filteredImages.map((image, index) => (
            <GalleryFrame
              key={index}
              src={image.src}
              onLikeToggle={() => handleLikeToggle(image.src)}
              isLiked={favorites.includes(image.src)}
            />
          ))}
        </S.Right>
      </S.All>
      <S.Arrow onClick={scrollToTop} src={arrow} alt="Sample"></S.Arrow>
    </div>
  );
};

export default PhotoPost;
