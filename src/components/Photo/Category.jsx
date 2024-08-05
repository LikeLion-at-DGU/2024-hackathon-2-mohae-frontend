import React, { useState, useEffect } from "react";
import * as S from "../../pages/Photo/PhotoPoststyled"; // styled-components 분리
import { fetchFolders } from "../../api/getFolder";
import { API } from "../../api";
import FavoriteGallery from "./FavoriteGallery"; // 경로 수정

const Category = ({
  filter,
  setFilter,
  folders,
  setFolders,
  selectedFolder,
  setSelectedFolder,
}) => {
  useEffect(() => {
    const loadFolders = async () => {
      try {
        const data = await fetchFolders();
        setFolders(data.map((folder) => folder.name));
      } catch (error) {
        console.error("폴더 목록 가져오기 에러:", error);
      }
    };

    loadFolders();
  }, [setFolders]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSelectedFolder("all");
  };

  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
    setFilter("folder");
  };

  const addNewFolder = async () => {
    const newFolderName = prompt("새 폴더 이름을 입력하세요:");
    console.log("추가할 폴더 이름:", newFolderName);

    if (newFolderName) {
      try {
        const newFolder = await API.post("/gallery/albums", {
          name: newFolderName,
        });
        console.log("서버 응답:", newFolder);

        setFolders((prevFolders) => [...prevFolders, newFolder.data.name]);
      } catch (error) {
        console.error("폴더 추가 중 에러 발생:", error);
      }
    } else {
      console.log("폴더 이름이 입력되지 않았습니다.");
    }
  };

  return (
    <S.Menubar>
      <S.Section>
        <S.ItemList>
          <S.Item
            onClick={() => handleFilterChange("all")}
            active={filter === "all"}
          >
            전체보기
          </S.Item>
          <S.Item
            onClick={() => handleFilterChange("favorites")}
            active={filter === "favorites"}
          >
            즐겨찾기
          </S.Item>
          <S.Item
            onClick={() => handleFilterChange("folder")}
            active={filter === "folder"}
          >
            폴더별
          </S.Item>
        </S.ItemList>
      </S.Section>
      {filter === "folder" && (
        <S.Section>
          <S.SectionTitle>폴더별</S.SectionTitle>
          <S.ItemList>
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
      )}
      {/* {filter === "favorites" && <FavoriteGallery />} 즐겨찾기 필터 추가 */}
    </S.Menubar>
  );
};

export default Category;
