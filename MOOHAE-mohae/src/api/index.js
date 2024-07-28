import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/", // 로컬 서버의 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});
