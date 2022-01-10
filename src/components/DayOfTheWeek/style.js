import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 2px;

    background-color: ${props => props.isSelected ? '#CFCFCF' : '#FFF'};
    border: 1px solid ${props => props.isSelected ? '#CFCFCF' : '#D5D5D5'};
    border-radius: 5px;

    font-size: 20px;
    line-height: 25px;
    color: ${props => props.isSelected ? '#FFF' : '#DBDBDB'};
`;

export {
    Container,
}