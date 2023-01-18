import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        navigate("/home")
    }

    return (
        <Container>
            <h1>My Wallet</h1>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    )
}