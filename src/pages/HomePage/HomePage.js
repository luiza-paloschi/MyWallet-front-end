import { Container, DivButtons, Header, NoRegistriesContainer, Registries } from "./styled";
import logOut from "../../assets/Vector.svg"
import StyledNewRegistryButton from "../../components/StyledNewRegistryButton";
import novaEntrada from "../../assets/NovaEntrada.svg"
import novaSaida from "../../assets/NovaSaida.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import RegistryCard from "../../components/RegistryCard/RegistryCard";
import { DivBalance } from "../../components/DivBalance";

export default function HomePage() {
    const { user, setUser } = useContext(UserContext)
    const [registries, setRegistries] = useState([])
    const [balance, setBalance] = useState(0)
    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }

    }
    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
        promise.then((res) => {
            setRegistries(res.data)
            let totalValue = 0
            res.data.forEach(e => {
                if (e.type === "entry") {
                    totalValue += e.value
                } else {
                    totalValue -= e.value
                }
            });
            setBalance(totalValue)
        })
        promise.catch((error) => {

            if (!user.token) {
                alert("Faça login")
            } else {
                alert(error)
            }
        })
    }, [])

    function handleLogout(){
        setUser({});
        localStorage.clear();
        navigate("/");
    }
    return (
        <Container>
            <Header>
                <h1 data-test="user-name">Olá, {`${user.name}`}</h1>
                <img src={logOut} data-test="logout" alt="Logout" onClick={handleLogout}/>
            </Header>
            <NoRegistriesContainer>
                {registries.length > 0 ?
                    <>
                        <Registries>
                            {registries.map((r) => {
                                return <RegistryCard key={r._id} r={r}></RegistryCard>
                            })}
                        </Registries>
                        <DivBalance balance={balance}>
                            <h2>SALDO</h2>
                            <h3 data-test="total amount">{balance.toFixed(2).toString().replace(".", ",")}</h3>
                        </DivBalance>
                    </>

                    : <p>Não há registros de entrada ou saída</p>}

            </NoRegistriesContainer>

            <DivButtons>
                <Link to="/nova-entrada">
                    <StyledNewRegistryButton data-test="new-income">
                        <img src={novaEntrada} alt="Nova Entrada" />
                        <p>Nova</p>
                        <p>entrada</p>
                    </StyledNewRegistryButton>
                </Link>
                <Link to="/nova-saida">
                    <StyledNewRegistryButton data-test="new-expense">
                        <img src={novaSaida} alt="Nova Saída" />
                        <p>Nova</p>
                        <p>saída</p>
                    </StyledNewRegistryButton>
                </Link>

            </DivButtons>
        </Container>
    );
}