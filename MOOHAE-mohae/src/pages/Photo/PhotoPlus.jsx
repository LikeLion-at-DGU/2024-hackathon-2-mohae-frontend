import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TitleInput = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  font-size: 1.25rem;
  border-radius: 5px;
  text-align: center;
  font-family: " NanumSquareRound ", sans-serif;
`;

const PhotoPlus = () => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Link to="/">
        <MOHAEsytle>mohae</MOHAEsytle>
      </Link>
      <TitleInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={handleChange}
      />
    </>
  );
};

export default PhotoPlus;
