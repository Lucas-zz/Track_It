import { useEffect, useState } from "react";
import { Container } from "./style";

export default function DayOfTheWeek({ state, setState, createHabit, weekday }) {
    const [isSelected, setSelected] = useState(false);

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    useEffect(() => {
        let newState = { ...state }
        setSelected(newState.days.indexOf(weekday) !== -1)
    }, [state, weekday]);

    if (createHabit === true) {
        let newState = { ...state }

        function handleOnClick() {
            if (isSelected) {
                newState.days = newState.days.filter((element) => element !== weekday)
            } else {
                newState.days = [...newState.days, weekday]
            }

            setState(newState);
            setSelected(!isSelected);
        }

        return (
            <Container isSelected={isSelected} onClick={handleOnClick}>
                {weekDays[weekday]}
            </Container>
        );
    } else {
        return (
            <Container isSelected={isSelected}>
                {weekDays[weekday]}
            </Container>
        );
    }
}