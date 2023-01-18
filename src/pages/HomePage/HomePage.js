import { Container, DivButtons, Header, NoRegistriesContainer } from "./styled";
import logOut from "../../assets/Vector.svg"
import StyledNewRegistryButton from "../../components/StyledNewRegistryButton";
import novaEntrada from "../../assets/NovaEntrada.svg"
import novaSaida from "../../assets/NovaSaida.svg"
import { Link } from "react-router-dom";

export default function HomePage(){

    return(
        <Container>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={logOut} alt="LogOut"/>
            </Header>
            <NoRegistriesContainer>
                <p>Não há registros de entrada ou saída</p>
            </NoRegistriesContainer>

            <DivButtons>
                <Link to="/nova-entrada">
                    <StyledNewRegistryButton>
                        <img src={novaEntrada} alt="Nova Entrada"/>
                        <p>Nova</p>
                        <p>entrada</p>
                    </StyledNewRegistryButton>
                </Link>
                <Link to="/nova-saida">
                    <StyledNewRegistryButton>
                    <img src={novaSaida} alt="Nova Saída"/>
                    <p>Nova</p>
                    <p>saída</p>
                    </StyledNewRegistryButton>
                </Link>
                
            </DivButtons>
        </Container>
    );
}