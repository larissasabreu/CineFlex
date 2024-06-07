import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Finalizado(props) {
    const assentos = props.dadosFinais.assento;
    console.log(props);

    // renderiza os dados recebidos
    return (
        <div>
        <Titulo> Pedido finalizado! </Titulo>
        <Tela>
            <Titulo2> Filme e sessão </Titulo2>
            <Separador/>

            <Texto>
            {props.dadosFinais.titulo}
            </Texto>
            <Texto>
            {props.dadosFinais.dia} as {props.dadosFinais.horario}
            </Texto>

            <Titulo2> Ingressos </Titulo2>
            <Separador/>

            {assentos.map((ingresso) => (
                <Texto> Assento {ingresso} </Texto>
            ))}

            <Titulo2> Comprador(a) </Titulo2>
            <Separador/>

            <Texto>
            Nome:  {props.dadosFinais.name}
            </Texto>
            <Texto>
            CPF: {props.dadosFinais.cpf}
            </Texto>
        </Tela>

        <Link to="/"> <Botao> Voltar para tela inicial </Botao> </Link>
        </div>
    );
}


const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9DB899;
`
const Tela = styled.div`
    margin-top: 40px;
    width: 338px;
    height: 421px;
    background-color: #2B2D36;
    border-radius: 8px;
`
const Titulo2 = styled.h1`
    color: #EE897F;
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px
`
const Botao = styled.button`
    margin-top: 20px;
    width: 338px;
    height: 42px;
    border-radius: 8px;
    color: #2B2D36;
    font-weight: 700;
    background-color: #EE897F;
`
const Separador = styled.div`
    border: 1px solid #4E5A65;
    width: 302px;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 20px;
`
const Texto = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
`