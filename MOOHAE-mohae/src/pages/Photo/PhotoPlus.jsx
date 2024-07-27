import React from "react";
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

const PhotoPlus = () => {
  return (
    <>
      <Link to="/">
        <MOHAEsytle>mohae</MOHAEsytle>
      </Link>
    </>
  );
};

export default PhotoPlus;
