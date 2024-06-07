import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function EnviarBotao (props) {   
    const req = props.req;
    const dados = props.dados;
    console.log(dados);

    // Post para reservar os assentos 
    function Enviando() {
    axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, req)
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data))
    }

    // renderiza o botao e useState onClick para salvar os dados finais
    return (
        <Link to={`/sucesso/`}> <Botao onClick={() => {Enviando(); props.setDadosFinais(dados);}}> Reservar assento(s) </Botao> </Link>
        
    );

}

const Botao = styled.button`
    width: 338px;
    height: 42px;
    background-color: #EE897F;
    color: #2B2D36;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
`