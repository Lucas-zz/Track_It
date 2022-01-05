import styled from "styled-components";

const Input = styled.input`
    height: 45px;
    width: 100%;
    
    font-size: 20px;
    line-height: 25px;
    font-family: 'Lexend Deca', sans-serif;

    border: 1px solid #D5D5D5;
    background-color: #FFF;

    padding: 14px;
    margin-bottom: 10px;
    border-radius: 4px;

    ::placeholder {
        color: #DBDBDB;
        font-family: 'Lexend Deca', sans-serif;
    }
`;

export default Input;