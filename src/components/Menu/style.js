import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;

    position: fixed;
    bottom: 0;
    z-index: 2;

    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const StyledLink = styled(Link)`
    box-sizing: border-box;
    
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`;

const ProgressBar = styled.div`

    width: 90px;
    height: 90px;

    margin-bottom: 50px;
`;

export {
    Container,
    StyledLink,
    ProgressBar,
}