import { Container } from "./style";
import Logo from "../../assets/img/trackit_logo.png"

export default function LoginPage() {
    return (
        <Container>
            <img src={Logo} alt="Logo TrackIt" />
        </Container>
    );
}