import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Menu from "../Menu";
import TopBar from "../TopBar";
import { Container } from "./style";

export default function HistoryPage() {
    const { user, token } = useContext(UserContext);

    return (
        <Container>
            <TopBar user={user} />
            <Menu />
        </Container>
    );
}