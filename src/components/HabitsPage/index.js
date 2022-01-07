import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import TopBar from "../TopBar";

export default function HabitsPage() {
    const { user } = useContext(UserContext);

    return (
        <>
            <TopBar user={user} />
            {console.log(user)}
        </>
    );
}