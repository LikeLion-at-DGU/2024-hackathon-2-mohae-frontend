import { API } from ".";

export const fetchFolders = async () => {
  try {
    const response = await API.get("/gallery/albums");
    return response.data;
  } catch (error) {
    console.error("폴더 목록 가져오기 에러: ", error);
    throw error;
  }
};

export const addFolder = async (newFolderName) => {
  try {
    const response = await API.post("/gallery/albums", {
      name: newFolderName,
    });
    return response.data;
  } catch (error) {
    console.error("폴더 추가 에러: ", error);
    throw error;
  }
};

export const deletePhoto = async () => {
  try {
    const response = await API.delete("/gallery/albums/{album_id}");
    return response.data;
  } catch (error) {
    console.error("삭제가 완료되지 않았습니다.", error);
    throw error;
  }
};

export const fetchFavorites = async () => {
  try {
    const response = await API.get("/gallery/favorites");
    return response.data;
  } catch (error) {
    console.error("즐겨찾기 데이터를 가져오는 중 에러 발생:", error);
    throw error;
  }
};
