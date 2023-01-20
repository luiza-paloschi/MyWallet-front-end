
import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

export default function SignUpPage() {
    const [form, setForm] = useState({ email: "", password: "", name: "", confirm_password:"" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSignUp(e) {
        e.preventDefault();
        setIsLoading(true)
        const body = {...form}
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body);
        promise.then(()=>{
            setIsLoading(false)
            navigate("/")
        })
        promise.catch((err)=>{
            setIsLoading(false)
            alert(err.message)
        })  
    }

    return (
        <Container>
            <h1>My Wallet</h1>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.name}
                    onChange={handleForm}
                />
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
             
                <StyledInput
                    name="confirm_password"
                    placeholder="Confirme a senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.confirm_password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Cadastrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/">
                Já tem uma conta? Faça login!
            </StyledLink>
        </Container>
    )
}