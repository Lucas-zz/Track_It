import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;

    width: 100%;

    display: flex;
    justify-content: space-between;

    border-radius: 5px;

    padding: 13px;
    margin-top: 10px;

    font-size: 13px;
    line-height: 16px;
    color: #666;

    background-color: #FFF;
`;

const TextContainer = styled.div`
    box-sizing: border-box;

    text-align: left;
`;

const HabitName = styled.span`
    font-size: 20px;
    line-height: 25px;

`;

const Text = styled.div`
    font-size: 13px;
    line-height: 16px;
    
    mark {
        all: unset;
        color: #8FC549;
    }
`;

const CheckBox = styled.button`
    box-sizing: border-box;
    
    width: 69px;
    height: 69px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border: ${props => !props.done ? '1px solid #E7E7E7' : 'none'};

    background-color: ${props => !props.done ? '#EBEBEB' : '#8FC549'};
`;

export {
    Container,
    HabitName,
    Text,
    CheckBox,
    TextContainer
}