import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 45px;
    font-size: 21px;
    line-height: 26px;
    
    margin-bottom: 10px;
    padding-bottom: 3px;
    
    border-radius: 4px;
    border: none;
    
    background-color: #52B6FF;
    color: #FFF;
    
    cursor: pointer;

    opacity: ${props => props.isLoading ? 0.7 : 1};

`;

export default Button;