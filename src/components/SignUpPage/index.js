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
                    <Input type="email" name="email" placeholder="email" />
                    <Input type="password" name="password" placeholder="senha" />
                    <Input type="text" name="name" placeholder="nome" />
                    <Input type="text" name="image" placeholder="foto" />
                    <Button type="submit">Cadastrar</Button>
                </form>
                <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
            </Container>
        </>
    );
}