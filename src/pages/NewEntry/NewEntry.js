import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import { UserContext } from "../../contexts/UserContext";
import { Container, Header } from "./styled";

export default function NewEntry(){
    const [form, setForm] = useState({ value: "", description: "", type:"entry"})
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
        
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleRegistry(e) {
        e.preventDefault()
        const body = {...form}
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/novo-registro`, body, config);
            navigate("/home")
        } catch (error) {
            alert(error.response.data)
        }
       
    }
 
    return (
        <Container>
            <Header>
                <h1> Nova Entrada</h1>
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
                    Salvar entrada
                </StyledButton>
            </StyledForm>
        </Container>
    );
}
