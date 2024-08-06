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
    margin: 0;
    padding: 0;
    display: flex;
    width: 1440px;
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

const BackEffect = styled.div`
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh; 
    align-items: center;
    background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);
    background-size: cover;
    background-repeat: no-repeat;
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
