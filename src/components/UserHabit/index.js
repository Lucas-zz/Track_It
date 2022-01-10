import DayOfTheWeek from "../DayOfTheWeek";
import { WeekDays } from "../HabitsPage/style";
import { Container, HabitName, TrashCan } from "./style";
import trashCanIcon from "../../assets/img/trashCanIcon.svg";

export default function UserHabit({ data, removeHabit }) {
    return (
        <Container>
            <HabitName>{data.name}</HabitName>
            <WeekDays>
                {Array.from(Array(7).keys()).map((element) => <DayOfTheWeek key={element} state={data} createHabit={false} weekday={element} />)}
            </WeekDays>
            <TrashCan>
                <img onClick={() => removeHabit(data.id)} src={trashCanIcon} alt="deletar_habito" />
            </TrashCan>
        </Container>
    );
}