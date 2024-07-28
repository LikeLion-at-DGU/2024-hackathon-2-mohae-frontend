import React, { useState } from "react";
import GalleryFrame from "../../components/GalleryFrame";
import * as S from "./PhotoPoststyled";
import arrow from "../../assets/arrow.png";

import { Link } from "react-router-dom";

const PhotoPost = () => {
  // 예시 이미지 데이터 배열
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];

  // 좋아요 상태 관리
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("all");
  const [folders, setFolders] = useState(["여행", "맛집", "추억"]);

  // 좋아요 상태 토글 함수
  const handleLikeToggle = (image) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(image)
        ? prevFavorites.filter((fav) => fav !== image)
        : [...prevFavorites, image]
    );
  };

  // 필터 상태 변경 함수
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // 필터링된 이미지 배열
  const filteredImages =
    filter === "favorites"
      ? images.filter((image) => favorites.includes(image))
      : images;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 새로운 폴더 추가 함수
  const addNewFolder = () => {
    const newFolderName = prompt("새 폴더 이름을 입력하세요:");
    if (newFolderName && newFolderName.trim() !== "") {
      setFolders((prevFolders) => [...prevFolders, newFolderName]);
    }
  };

  return (
    <div>
      <Link to="/PhotoPlus">
        <S.Margin>추가하기 +</S.Margin>
      </Link>
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
              <S.SectionTitle>연도별</S.SectionTitle>
              <S.Item>2024</S.Item>
              <S.Item>2023</S.Item>
              <S.Item>2022</S.Item>
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
                <S.SelectedItem key={index}>{folder}</S.SelectedItem>
              ))}
              <S.Item onClick={addNewFolder}>+</S.Item>
            </S.ItemList>
          </S.Section>
        </S.Menubar>
        <S.Right>
          {filteredImages.map((image, index) => (
            <GalleryFrame
              key={index}
              src={image}
              onLikeToggle={handleLikeToggle}
              isLiked={favorites.includes(image)}
            />
          ))}
        </S.Right>
      </S.All>
      <S.Arrow onClick={scrollToTop} src={arrow} alt="Sample"></S.Arrow>
    </div>
  );
};

export default PhotoPost;
