import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import { Container, Header } from "./styled";

export default function NewOutflow(){
    const [form, setForm] = useState({ value: "", description: ""})
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleRegistry(e) {
        e.preventDefault()
        navigate("/home")
    }
 
    return (
        <Container>
            <Header>
                <h1> Nova Saída</h1>
            </Header>
            <StyledForm onSubmit={handleRegistry}>
                <StyledInput
                    name="value"
                    placeholder="Valor"
                    type="text"
                    required
                    value={form.value}
                    onChange={handleForm}
                />
                <StyledInput
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    required
                    value={form.description}
                    onChange={handleForm}
                />
                <StyledButton type="submit">
                    Salvar saída
                </StyledButton>
            </StyledForm>
        </Container>
    );
}