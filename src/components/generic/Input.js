import styled from "styled-components";

const Input = styled.input`
    height: 45px;
    width: 100%;
    
    font-size: 20px;
    line-height: 25px;
    font-family: 'Lexend Deca', sans-serif;

    border: 1px solid #D5D5D5;
    background-color: ${props => props.isLoading ? "#F2F2F2" : "#FFF"};

    padding: 14px;
    margin-bottom: 10px;
    border-radius: 4px;

    ::placeholder {
        color: ${props => props.isLoading ? "#AFAFAF" : "#DBDBDB"};
        font-family: 'Lexend Deca', sans-serif;
        opacity: ${props => props.isLoading ? 0.5 : 1};
    }
`;

export default Input;