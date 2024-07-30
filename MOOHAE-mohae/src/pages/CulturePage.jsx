import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageStyle = createGlobalStyle`
    body {
        background-color: #F7F8FB;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }
`;

function HomePage() {
    return (
        <>
        <PageStyle />
        <MainPage/>
        </>
    );
}

export default HomePage;
