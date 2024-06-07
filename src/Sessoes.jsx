import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessoes() {
    const [filme, setFilme] = useState(null);
    const { idFilme } = useParams();

    // Get a lista de filmes
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        .then(res => setFilme(res.data))
        .catch(err => console.log(err.response.data))
    }, [])

    if (filme == null) {
        return (
            <Titulo> Carregando.. </Titulo>
        );
    }

    const mapWeekdays = filme.days;

    // renderiza as opções de horário
    return (
        <div>
        <Titulo> Selecione o horário </Titulo>  
        <Titulo> {filme.title} </Titulo>
             
        {mapWeekdays.map((dias,index) => <SessaoFilmes key={dias.id} weekdays={dias.weekday}
        date={dias.date} showtime={dias.showtimes[0].name} id={dias.showtimes[0].id}
        showtime1={dias.showtimes[1].name} id1={dias.showtimes[1].id
        } 
        />)}

        </div>
    );
}

function SessaoFilmes (props) {

    return (
        <div>
        <Sessao>
        <Titulo> {props.weekdays}, {props.date} </Titulo> 
        
        <Separador/> 

        <Hora>
        <Horarios to={`/assentos/${props.id}`}> {props.showtime} </Horarios>
        <Horarios to={`/assentos/${props.id1}`}> {props.showtime1 }</Horarios>
        </Hora>

        </Sessao>
        </div>
    );

}



const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Sessao = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: #2B2D36;
    gap: 20px;
    width: 338px;
    height: 149px;
    border-radius: 8px;
    color: #FFFFFF;
`
const Separador = styled.div`
    margin-top: 20px;
    border: 1px solid #4E5A65
`

const Horarios = styled(Link)`
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    width: 84px;
    text-decoration: none;
    height: 41px;
    border: 2px solid #EE897F;
    border-radius: 2px;
    color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Hora = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`