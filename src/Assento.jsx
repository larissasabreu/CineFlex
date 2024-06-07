import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EnviarBotao from "./EnviarBotao";

export default function Assento(props) {
    const [assentos, setAssentos] = useState(null);
    const { idSessao } = useParams();
    const [numero, setNumero] = useState([]);
    const [numeroAssento, setNumeroAssento] = useState([]);
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');

    //Objeto para o Post para reservar via Axios; mandado como props para o EnviarBotao.jsx
    const req = {
        ids: numero,
        name: nome,
        cpf: cpf
    };

    // Get lista de assentos
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then(res => setAssentos(res.data))
        .catch(err => console.log(err.response.data))

    }, [])

    if (assentos == null) {
        return (
            <Titulo> Carregando.. </Titulo>
        );
    }

    const escolhendoAssentos = assentos.seats;

    // Salvar dados para a página /sucesso; mandado como props para o EnviarBotao.jsx junto com o setDadosFinais
    const dados = {
        titulo: assentos.movie.title,
        dia: assentos.day.weekday,
        horario: assentos.name,
        assento: numeroAssento,
        name: nome,
        cpf: cpf
    };

    // renderiza as opções 
    return (
        <Pag>
        <Titulo> Selecione o(s) assento(s) </Titulo>
 
        <Assentos>
            
        {escolhendoAssentos.map((assento) => 
        <Disponibilizados 
        key={assento.id} nomeAssento={assento.name} isAvailable={assento.isAvailable} nome={nome} cpf={cpf} 
        ids={assento.id} req={req} numero={numero} setNumero={setNumero} numeroAssento={numeroAssento} 
        setNumeroAssento = {setNumeroAssento} />)}
        
        </Assentos>

        <Separador/>

        <Pag>

        <div> Nome do comprador(a) </div>
        <TextoFormulario name="nome" type="text" placeholder="Digite seu nome..." 
        onChange={(e) => setNome(e.target.value)} value={nome} />
        <div> CPF do comprador(a) </div>
        <TextoFormulario name="cpf" type="text" placeholder="Digite seu CPF..." 
        onChange={(e) => setCPF(e.target.value)} value={cpf} />

        </Pag>
        <Pag>
            <EnviarBotao req={req} dados={dados} setDadosFinais={props.setDadosFinais}/>
        </Pag>
        </Pag>
    );
}

function Disponibilizados(props) {
    const [escolha, setEscolha] = useState(false);
    const numero = props.numero;
    const numeroAssento = props.numeroAssento;

    //Salva ou remove o id e o número do assento escolhido 
    function Escolhido (eId, eName) {
        if (escolha == false) {
        setEscolha(true);
        props.setNumero([...numero, eId]);
        props.setNumeroAssento([...numeroAssento, eName])

        } else {
        numero.pop(eId);
        numeroAssento.pop(eName);
        setEscolha(false);
        }
    }

    function NaoDisponivel () {
        alert("Esse assento não esta disponível");
    }

    if (props.isAvailable == true) {
       return (
       <NumeroDisponivel onClick={() => {Escolhido(props.ids, props.nomeAssento);}} selecionado={escolha}> 
       {props.nomeAssento} </NumeroDisponivel>);

    } else if (props.isAvailable == false) {
        return (
        <NumeroIndisponivel onClick={NaoDisponivel}> {props.nomeAssento} </NumeroIndisponivel>
        );
    }
    
}


const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Assentos = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    margin-top: 40px;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;   
`

const NumeroIndisponivel = styled.div`
    width: 26px;
    height: 26px;
    background-color: #2B2D36;
    color: #2B2D36;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NumeroDisponivel = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.selecionado == false ?  '#9DB899;' : '#FADBC5;' };
    /* background-color: #9DB899;
    background-color: #FADBC5;
    border: 2px solid #EE897F; */
    border-radius: 15px;
    border: ${props => props.selecionado == false ? 'none' : '2px solid #EE897F;'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Separador = styled.div`
    border: 1px solid #4E5A65;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Pag = styled.div`
    display: grid;
    gap: 20px;
    justify-content: center;
`
const TextoFormulario = styled.input`
    width: 338px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #D4D4D4
`