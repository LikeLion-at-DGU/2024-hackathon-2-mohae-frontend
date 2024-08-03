import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* 원래 텍스트 색상을 유지하려면 사용 */

    &:hover {
        text-decoration: none; /* 호버 시에도 밑줄 없앰 */
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
`;

const NavBlockTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    height: 100%;
`;

const NavBlockBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    height: 100%;
`;



const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 200px;
    height: 270px;
    border-radius: 35px;
    overflow: hidden;
    .Menuimg {
        width: 200px;
        height: 270px;
    }
`;

const DirectLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 153px;
    height: 52px;
    gap: 10px;
    position: absolute;
    top: 213px;
    left: 44.5px;
    background-color: #FFFFFF;
    border-radius: 30px 0px 0px 0px;
    div {
        font-size: 20px;
        font-weight: 40;
    }
    img {
        width: 22px;
        height: 22px;
    }
`;
const Navigator = () => {
    return (
        <NavDiv>
                <NavBlockTop>
                    <StyledLink to="Date">
                        <NavMenu>
                            <img className = "Menuimg" src="/src/assets/img/NavDate.png" alt="error loading pic" />
                        </NavMenu>
                    </StyledLink>
                </NavBlockTop>
                <NavBlockBottom>
                <StyledLink to="HealthCare">

                    <NavMenu>
                        <img className = "Menuimg" src="/src/assets/img/NavHealth.png" alt="error loading pic" />
                    </NavMenu>
                    </StyledLink>

                </NavBlockBottom>
                <NavBlockTop>
                <StyledLink to="PhotoPost">

                    <NavMenu>
                        <img className = "Menuimg" src="/src/assets/img/NavPic.png" alt="error loading pic" />
                    </NavMenu>
                    </StyledLink>
                </NavBlockTop>
                
            
                <NavBlockBottom>
                    <StyledLink to="CulturePage">
                        <NavMenu>
                            <img className = "Menuimg" src="/src/assets/img/NavCulture.png" alt="error loading pic" />
                        </NavMenu>
                    </StyledLink>
                </NavBlockBottom>
        </NavDiv>
    );
}

export default Navigator;
