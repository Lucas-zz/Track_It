import { Container, StyledLink, ProgressBar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Menu() {

    const { dailyPercentage } = useContext(UserContext);

    const percentage = 66;


    return (
        <Container>
            <StyledLink to={"/habitos"}>Hábitos</StyledLink>
            <StyledLink to={"/hoje"}>
                <ProgressBar>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: '18px',
                            textColor: '#FFF',
                            pathColor: '#FFF',
                            trailColor: 'transparent',
                            backgroundColor: '#52B6FF',
                            textAlign: 'center',
                        })}
                    />
                </ProgressBar>
            </StyledLink>
            <StyledLink to={"/historico"}>Histórico</StyledLink>
        </Container>
    );
}