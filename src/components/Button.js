import styled from "styled-components";

const Button = styled.button`
    height: 45px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 21px;
    line-height: 26px;
    font-family: 'Lexend Deca', sans-serif;
    
    padding: 14px;
    margin-bottom: 10px;
    
    border-radius: 4px;
    border: none;
    
    
    background-color: #52B6FF;
    color: #FFF;
    
    cursor: pointer;

    opacity: ${props => props.isLoading ? 0.7 : 1};

`;

export default Button;