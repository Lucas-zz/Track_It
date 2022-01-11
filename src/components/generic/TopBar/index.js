import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/smallLogo.png"
import UserContext from "../../../contexts/UserContext";

import { Container, UserImg } from "./style";

export default function TopBar() {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    if (user.image == '') {
        navigate('/');
    }

    return (
        <Container>
            <img src={Logo} alt="trackit small logo" />
            <UserImg src={user.image} />
        </Container>
    );
}