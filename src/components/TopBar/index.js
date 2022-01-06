import Logo from "../../assets/img/smallLogo.png"

import { Container, UserImg } from "./style";

export default function TopBar({ user }) {
    return (
        <Container>
            <img src={Logo} alt="trackit small logo" />
            <UserImg src={user.image} />
            {console.log(user)}
        </Container>
    );
}