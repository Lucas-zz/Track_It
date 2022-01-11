import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

import Menu from "../generic/Menu";
import TopBar from "../generic/TopBar";
import { Title } from "../generic/Title";
import { Container, ListOfHabits, Percentage, TitleContainer } from "./style";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import UserTodayHabit from "../UserTodayHabit";

export default function HistoryPage() {
    const { user, token, percentage, setPercentage } = useContext(UserContext);
    const [reset, setReset] = useState([]);

    const [todayHabitData, setTodayHabitData] = useState([]);

    useEffect(() => {
        setReset(false)

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(response => {
            setTodayHabitData(response.data)
            setPercentage(integer(response.data));
        });

        promise.then(error => {
            console.log(error.data.message);
        })
    }, [reset, setPercentage, token]);

    function integer(data) {
        if (isNaN(parseInt(data.filter((element) => element.done === true).length / data.length * 100))) {
            return 0;
        } else {
            return parseInt(data.filter((element) => element.done === true).length / data.length * 100)
        }
    }

    let today = dayjs().locale('pt-br').format('dddd, DD/MM');


    return (
        <Container>
            <TopBar user={user} />
            <TitleContainer>
                <Title>{today}</Title>
                <Percentage>
                    {percentage === 0
                        ?
                        <p>Nenhum hábito concluído ainda</p>
                        :
                        <h1>{percentage}% dos hábitos concluídos</h1>
                    }
                </Percentage>
            </TitleContainer>
            <ListOfHabits>
                {todayHabitData.map((element, id) => <UserTodayHabit key={id} data={element} reset={setReset} />)}
            </ListOfHabits>
            <Menu />
        </Container>
    );
}