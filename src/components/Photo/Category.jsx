import React, { useEffect } from "react";
import * as S from "../../pages/Photo/PhotoPoststyled"; // styled-components 분리
import { API } from "../../api";

const Category = ({
  filter,
  setFilter,
  folders,
  setFolders,
  selectedFolder,
  setSelectedFolder,
  setPhotos, // 폴더의 사진을 저장할 상태 추가
}) => {
  useEffect(() => {
    const loadFolders = async () => {
      try {
        const response = await API.get("/gallery/albums");
        setFolders(
          response.data.map((folder) => ({ id: folder.id, name: folder.name }))
        );
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

  const handleFolderSelect = async (folder) => {
    setSelectedFolder(folder);
    setFilter("folder");
    // 선택된 폴더의 사진을 가져옴
    try {
      const response = await API.get(`/gallery/albums/${folder.id}/photos`);
      setPhotos(response.data);
    } catch (error) {
      console.error("폴더 사진 가져오기 에러:", error);
    }
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

        // 폴더 목록을 다시 불러옴
        const response = await API.get("/gallery/albums");
        setFolders(
          response.data.map((folder) => ({ id: folder.id, name: folder.name }))
        );
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
                {folder.name}
              </S.Item>
            ))}
            <S.Item onClick={addNewFolder}>+</S.Item>
          </S.ItemList>
        </S.Section>
      )}
    </S.Menubar>
  );
};

export default Category;
