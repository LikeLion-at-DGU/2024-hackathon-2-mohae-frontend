import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ADBar from "../components/CulturePage/ADBar";
import CategoryBar from "../components/CulturePage/CategoryBar";
import Entertainment from "../components/CulturePage/Entertainment";
import Activity from "../components/CulturePage/Activity";
import Travel from "../components/CulturePage/Travle"; // Travel 컴포넌트를 가져옵니다
import Education from "../components/CulturePage/Education";
import DetailPage from "../components/CulturePage/DetailPage";

const PageStyle = createGlobalStyle`
body {
  background-color: #F7F8FB;
  margin: auto;
  padding: 0;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  height: fit-content;
}

@media (max-width: 359px) {
  body {
    width: 360px;
  }
}
`;



function CulturePage() {
    const [selectedCategory, setSelectedCategory] = useState(0);

    const renderContent = () => {
        switch (selectedCategory) {
            case 0:
                return <Entertainment />;
            case 1:
                return <Travel />;
            case 2:
                return <Activity />;
            case 3: 
                return <Education/>
            default:
                return <Entertainment />;
        }
    };

    return (
        <>
            <PageStyle />
                <ADBar />
                <CategoryBar setSelectedCategory={setSelectedCategory} />
                {renderContent()}
        </>
    );
}

export default CulturePage;
