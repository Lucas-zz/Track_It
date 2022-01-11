import axios from "axios";
import Loader from "react-loader-spinner"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ErrorMessage, StyledLink } from "./style";

import BigLogo from "../generic/BigLogo";
import Button from "../generic/Button";
import Input from "../generic/Input";
import UserContext from "../../contexts/UserContext";

export default function LoginPage() {
    const { setUser, setToken, isLoading, setLoading } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        setLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email,
            password,
        });


        promise.then(handleSuccess);
        promise.catch(handleError);
    }

    function handleSuccess(response) {
        setLoading(false);
        setError(false)

        setUser(response.data);
        setToken(response.data.token);

        navigate('/hoje');
    }

    function handleError(error) {
        setLoading(false);
        setErrorMessage(error.response.data.message);
        setError(true)

        console.log(error.response);
    }

    return (
        <>
            <BigLogo />
            <Container>
                <form onSubmit={handleLogin}>
                    <Input isLoading={isLoading} disabled={isLoading} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
                    <Input isLoading={isLoading} disabled={isLoading} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required />
                    {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <Button isLoading={isLoading} disabled={isLoading} type="submit">
                        {isLoading ? <Loader type="ThreeDots" color="#FFF" height={13} width={100} /> : "Entrar"}
                    </Button>
                </form>
                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
            </Container>
        </>
    );
}