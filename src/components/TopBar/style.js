import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 18px;

    position: absolute;
    top: 0;

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