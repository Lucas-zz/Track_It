import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    min-height: 100%;
    width: 100%;
    padding: 31px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
`;

export {
    Container,
    StyledLink
}