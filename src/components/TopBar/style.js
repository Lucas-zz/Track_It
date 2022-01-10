import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 18px;

    position: fixed;
    top: 0;
    z-index: 2;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    background-color: #126BA5;
`;

const UserImg = styled.img`
    width: 51px;
    height: 51px;

    border-radius: 30px;
`;

export {
    Container,
    UserImg
}