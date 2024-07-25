// src/pages/Homepage.jsx
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>여기는 홈페이지입니다.</p>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/Gallery">
        <button>갤러리</button>
      </Link>
      <Link to="/Header">
        <buttonn> 헤더 확인용 링크 </buttonn>
      </Link>
    </div>
  );
};

export default Homepage;
