import styled from "styled-components";

const Container = styled.div`

    min-height: calc(100vh - 70px);

    background-color: #E5E5E5;

    padding-top: 98px;
    padding-bottom: 98px;
`;

const TitleContainer = styled.div`
    padding-left: 17px;

`;

const Percentage = styled.div`

    font-size: 18px;
    line-height: 22px;
    color: #BABABA;

    h1 {
        color: #8FC549;
    }
`;

const ListOfHabits = styled.div`
    padding: 24px 18px 80px 18px;

    font-size: 18px;
    line-height: 22px;

    color: #666;
`;

export {
    Container,
    TitleContainer,
    Percentage,
    ListOfHabits,
}