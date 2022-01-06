import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, StyledLink } from "./style";

import BigLogo from "../BigLogo";
import Button from "../Button";
import Input from "../Input";

export default function LoginPage({ setToken, setUser }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email,
            password
        });

        promise.then(response => {
            setUser(response.data);
            setToken(response.data.token);
            navigate('/habitos');
        });
        promise.catch(error => console.log(error.response));
    }

    return (
        <>
            <BigLogo />
            <Container>
                <form onSubmit={handleLogin}>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                    <Button type="submit">Entrar</Button>
                </form>
                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
            </Container>
        </>
    );
}