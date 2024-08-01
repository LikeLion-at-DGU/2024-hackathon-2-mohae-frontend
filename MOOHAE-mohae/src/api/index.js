import axios from "axios";

export const API = axios.create({
  baseURL: "http://3.35.44.88", // 베이스 url 칸에는 빈칸으로 비워두기
  headers: {
    "Content-Type": "application/json",
  },
});
