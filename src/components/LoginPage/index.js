import BigLogo from "../BigLogo";
import Button from "../Button";
import Input from "../Input";
import { Container, StyledLink } from "./style";

export default function LoginPage() {
    return (
        <>
            <BigLogo />
            <Container>
                <form>
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="senha" />
                    <Button type="submit">Entrar</Button>
                </form>
                <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
            </Container>
        </>
    );
}