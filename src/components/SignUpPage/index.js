import axios from "axios";
import Loader from "react-loader-spinner";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, StyledLink, ErrorMessage } from "./style";

import BigLogo from "../generic/BigLogo";
import Button from "../generic/Button";
import Input from "../generic/Input";
import UserContext from "../../contexts/UserContext";

export default function SignUpPage() {
    const { isLoading, setLoading } = useContext(UserContext);

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    });

    function handleSignUp(e) {
        e.preventDefault();

        setLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            ...formData
        });

        promise.then(handleSuccess);
        promise.catch(handleError);
    }

    function handleSuccess() {
        setLoading(false);
        navigate('/');
    }

    function handleError(error) {

        setLoading(false);
        if (error.response.status === 422) {
            setErrorMessage("Por favor, insira a URL de uma imagem válida!");
        } else if (error.response.status === 409) {
            setErrorMessage(error.response.data.message);
        }
        setError(true)

        console.log(error.response)
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <BigLogo />
            <Container>
                <form onSubmit={handleSignUp}>
                    <Input
                        isLoading={isLoading}
                        disabled={isLoading}
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                        placeholder="email"
                        required
                    />
                    <Input
                        isLoading={isLoading}
                        disabled={isLoading}
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        name="password"
                        placeholder="senha"
                        required
                    />
                    <Input
                        isLoading={isLoading}
                        disabled={isLoading}
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                        placeholder="nome"
                        required
                    />
                    <Input
                        isLoading={isLoading}
                        disabled={isLoading}
                        type="text"
                        value={formData.image}
                        onChange={handleInputChange}
                        name="image"
                        placeholder="foto"
                        required
                    />
                    {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <Button isLoading={isLoading} disabled={isLoading} type="submit">
                        {isLoading ? <Loader type="ThreeDots" color="#FFF" height={13} width={100} /> : "Cadastrar"}
                    </Button>
                </form>
                <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
            </Container>
        </>
    );
}