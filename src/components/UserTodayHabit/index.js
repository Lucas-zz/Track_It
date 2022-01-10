import axios from "axios";
import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext";
import { HabitName } from "../UserHabit/style";
import { CheckBox, Container, Text, TextContainer } from "./style";

import CheckMark from "../../assets/img/CheckMark.svg";

export default function UserTodayHabit({ data, reset }) {
    let recordValidation = (data.currentSequence >= data.highestSequence && data.highestSequence !== 0)
    const [check, setCheck] = useState(data.done);
    const { token } = useContext(UserContext);

    function handleOnClick() {

        let promise;

        if (check === true) {
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${data.id}/uncheck`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } else {
            promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${data.id}/check`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        promise.then(() => {
            setCheck(!check)
            reset(true);
        });

        promise.catch(error => {
            console.log(error.response.message)
        })
    }

    return (
        <Container>
            <TextContainer>
                <HabitName>{data.name}</HabitName>
                <Text>Sequência atual: {data.done ? <mark>{data.currentSequence} dias</mark> : `${data.currentSequence} dias`} </Text>
                <Text>Seu recorde: {recordValidation ? <mark>{data.highestSequence} dias</mark> : `${data.highestSequence} dias`} </Text>
            </TextContainer>
            <CheckBox onClick={() => handleOnClick()} done={data.done}>
                <img src={CheckMark} alt='check_mark' />
            </CheckBox>
        </Container>
    );
}
