import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;

    margin: 18px;

    padding: 13px 15px;

    border-radius: 5px;
    background-color: #FFF;

    position: relative;

`;

const HabitName = styled.span`
    box-sizing: border-box;

    margin-bottom: 8px;

    display: flex;
    justify-content: left;
    align-items: center;

    font-size: 20px;
    line-height: 25px;
    color: #666;
    
`;

const TrashCan = styled.button`
    position: absolute;
    top: 11px;
    right: 11px;

    background-color: #FFF;
`;

export {
    Container,
    HabitName,
    TrashCan,
}
