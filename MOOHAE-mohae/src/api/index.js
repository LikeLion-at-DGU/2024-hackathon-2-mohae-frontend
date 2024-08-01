import axios from "axios";

// Axios 인스턴스 생성
export const API = axios.create({
  baseURL: "http://3.35.44.88:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
