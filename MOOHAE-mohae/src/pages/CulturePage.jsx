import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ADBar from "../components/CulturePage/ADBar";
import CategoryBar from "../components/CulturePage/CategoryBar";

import { createGlobalStyle } from "styled-components";

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

function CulturePage() {
    return (
        <>
            <ADBar/>
            <div class="textWraaper">카테고리</div>
            <CategoryBar/>
            <div class="textWraaper">모해 PICK</div>
            
        </>
    );
}

export default CulturePage;
