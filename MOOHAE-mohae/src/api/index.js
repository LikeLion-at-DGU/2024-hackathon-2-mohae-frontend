import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5174", // 로컬 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});
