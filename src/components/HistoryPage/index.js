import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { DefaultMessage } from "../generic/DefaultMessage";
import Menu from "../generic/Menu";
import { Title } from "../generic/Title";
import TopBar from "../generic/TopBar";
import { Container, Header } from "./style";

export default function HistoryPage() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <TopBar user={user} />
            <Header>
                <Title>Histórico</Title>
            </Header>
            <DefaultMessage>Em breve você poderá ver o historico dos seus hábitos aqui!</DefaultMessage>
            <Menu />
        </Container>
    );
}