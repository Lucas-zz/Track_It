import styled from "styled-components";

const Container = styled.div`

    min-height: calc(100vh - 70px);

    background: #E5E5E5;

    padding-top:  98px;
    padding-bottom: 98px;
`;

const Header = styled.div`
    width: 100%;

    padding-top: 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 17px;
    
`;

const Button = styled.button`
    
    width: ${props => props.width};
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: ${props => props.padding === true && '3px'};

    font-size: ${props => props.smallerFontSize === true ? '16px' : '25px'};
    line-height: 33.72px;

    color: ${props => props.fontColor === true ? '#52B6FF' : '#FFF'};
    background-color: ${props => props.background};

    border-radius: 4.63px;

    opacity: ${props => props.isLoading ? 0.7 : 1};

`;

const NewHabit = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    margin: 18px;
    padding: 18px;

    border-radius: 5px;

    position: relative;

    background-color: #FFF;

    opacity: ${props => props.isLoading ? 0.7 : 1.0};
    ${props => props.isLoading && "pointer-events: none"}
`;

const WeekDays = styled.div`
    display: flex;

    gap: 4px;
`;

const ButtonsContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: right;
    align-items: center;

    padding-top: 28px;

    gap: 10px;
`

const CenterLoader = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 100px;
    
`

export {
    Container,
    Header,
    Button,
    NewHabit,
    WeekDays,
    ButtonsContainer,
    CenterLoader,
}