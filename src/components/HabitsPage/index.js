import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import UserContext from "../../contexts/UserContext";

import DayOfTheWeek from "../DayOfTheWeek";
import Input from "../generic/Input";
import { Title } from "../generic/Title";
import { DefaultMessage } from "../generic/DefaultMessage";
import Menu from "../generic/Menu";
import TopBar from "../generic/TopBar";
import UserHabit from "../UserHabit";


import { Button, ButtonsContainer, CenterLoader, Container, Header, NewHabit, WeekDays } from "./style";

export default function HabitsPage() {
    const { user, token, isLoading, setLoading, setPercentage } = useContext(UserContext);

    // const [successRemoval, setSuccessRemoval] = useState(false);
    const [habitData, setHabitData] = useState([]);
    const [createHabit, setCreateHabit] = useState(false);
    const [reset, setReset] = useState(false);
    const [newHabit, setNewHabit] = useState({
        name: "",
        days: [],
    })

    useEffect(() => {
        setLoading(true);
        setReset(false);
        setCreateHabit(false);
        setNewHabit({
            name: "",
            days: [],
        })

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(response => {
            setLoading(false);
            setHabitData(response.data)
        });

        const promise2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise2.then(response => {
            setPercentage(integer(response.data));
        });

    }, [reset, setLoading, setPercentage, token]);

    function integer(data) {
        if (isNaN(parseInt(data.filter((element) => element.done === true).length / data.length * 100))) {
            return 0;
        } else {
            return parseInt(data.filter((element) => element.done === true).length / data.length * 100)
        }
    }


    function addHabit(e) {
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', newHabit, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(() => {
            setReset(true)
            setLoading(false);
        });

        promise.catch((response) =>
            console.log(response.data),
            setLoading(false),
        );
    }

    function removeHabit(id) {
        const areYouSureAboutThat = window.confirm("Você realmente gostaria de excluir esse hábito?");

        if (areYouSureAboutThat === true) {
            setLoading(true);

            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            promise.then(() => setReset(true));

            promise.catch((response) =>
                console.log(response.data),
                setLoading(false),
            )
        }
    }

    function createHabitForm() {

        return (
            <NewHabit isLoading={isLoading}>
                <form onSubmit={addHabit}>
                    <Input
                        type="text"
                        value={newHabit.name}
                        onChange={(e) => setNewHabit({ ...newHabit, ['name']: e.target.value })}
                        isLoading={isLoading}
                        disabled={isLoading}
                        placeholder="nome do hábito"
                        required
                    />
                    <WeekDays>
                        {Array.from(Array(7).keys()).map((element) => <DayOfTheWeek key={element} state={newHabit} setState={setNewHabit} createHabit={true} weekday={element} />)}
                    </WeekDays>
                    <ButtonsContainer>
                        <Button smallerFontSize={true} fontColor={true} width={'95px'} background={'#FFF'} isLoading={isLoading} onClick={() => { setCreateHabit(false) }}>Cancelar</Button>
                        <Button smallerFontSize={true} width={'95px'} background={'#52B6FF'} isLoading={isLoading} disabled={isLoading} >
                            {isLoading ? <Loader type="ThreeDots" color="#FFF" height={13} width={100} /> : "Salvar"}
                        </Button>
                    </ButtonsContainer>
                </form>
            </NewHabit>
        );
    }

    return (
        <>
            <TopBar user={user} />
            <Container>
                <Header>
                    <Title>Meus Hábitos</Title>
                    <Button padding={true} width={'40px'} background={'#52B6FF'} onClick={() => { setCreateHabit(true) }}>+</Button>
                </Header>
                {createHabit === true && createHabitForm()}
                {isLoading && (habitData.length === 0 &&
                    <CenterLoader>
                        <Loader type="ThreeDots" color="#52B6FF" height={25} width={150} />
                    </CenterLoader>
                )}
                {isLoading === false && (habitData.length === 0
                    ?
                    <DefaultMessage>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</DefaultMessage>
                    :
                    <>
                        {habitData.map((el, id) => <UserHabit key={id} data={el} removeHabit={removeHabit} />)}
                    </>
                )}

            </Container>
            <Menu />
        </>
    );
}
