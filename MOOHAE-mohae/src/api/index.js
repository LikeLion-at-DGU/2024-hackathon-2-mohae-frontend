import axios from "axios";

// Axios 인스턴스 생성
export const API = axios.create({
<<<<<<< HEAD
  baseURL: "http://3.35.44.88:8000/",
  withCredentials: true,
=======
  baseURL: "http://3.35.44.88", // 베이스 url 칸에는 빈칸으로 비워두기
>>>>>>> KYJ
  headers: {
    "Content-Type": "application/json",
  },
});
