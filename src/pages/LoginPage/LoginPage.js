import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { UserContext } from "../../contexts/UserContext"
import axios from "axios"


export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        setUser({});
        localStorage.clear();
    }, [])

    async function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)
        const body = {...form}
        try {
            const token = await axios.post(`${process.env.REACT_APP_API_URL}/`, body);
            localStorage.setItem("user", JSON.stringify(token.data))
            setUser(token.data)
            setIsLoading(false)
            navigate("/home")
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            alert(error.response.data)
        }
        
    }

    return (
        <Container>
            <h1>My Wallet</h1>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    data-test="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    data-test="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton data-test="sign-in-submit" type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/cadastro">
                N??o tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    )
}