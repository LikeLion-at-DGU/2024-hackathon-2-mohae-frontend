import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* 원래 텍스트 색상을 유지 */

    &:hover {
        text-decoration: none;
    }
`;

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    width: 836px;
    height: 298px;
    @media (max-width: 360px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: auto;
        gap: 8px;
    }
`;

const NavBlockTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: px;
    height: 100%;
    @media (max-width: 360px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 85px;
        height: 118px;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 200px;
    height: 270px;
    border-radius: 35px;
    overflow: hidden;
    animation: ${fadeIn} 0.5s ease-in;
    .Menuimg {
        width: 200px;
        height: 270px;
    }
    @media (max-width: 360px) {
        width: 85px;
        height: 118px;
        .Menuimg {
        width: 85px;
        height: 118px;
    }
    }
`;

const Navigator = () => {
    return (
        <NavDiv>
            <NavBlockTop>
                <StyledLink to="/Date">
                    <NavMenu>
                        <img className="Menuimg" src="/src/assets/img/Function_Date.png" alt="error loading pic" />
                    </NavMenu>
                </StyledLink>
            </NavBlockTop>
            <NavBlockTop>
                <StyledLink to="/HealthCare">
                    <NavMenu>
                        <img className="Menuimg" src="/src/assets/img/Function_Health.png" alt="error loading pic" />
                    </NavMenu>
                </StyledLink>
            </NavBlockTop>
            <NavBlockTop>
                <StyledLink to="/PhotoPost">
                    <NavMenu>
                        <img className="Menuimg" src="/src/assets/img/Function_Picture.png" alt="error loading pic" />
                    </NavMenu>
                </StyledLink>
            </NavBlockTop>
            <NavBlockTop>
                <StyledLink to="/CulturePage">
                    <NavMenu>
                        <img className="Menuimg" src="/src/assets/img/Function_CultureLife.png" alt="error loading pic" />
                    </NavMenu>
                </StyledLink>
            </NavBlockTop>
        </NavDiv>
    );
}

export default Navigator;