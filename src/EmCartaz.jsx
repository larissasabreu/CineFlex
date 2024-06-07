import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function EmCartaz() {
    const [filmesEmCartaz, setFilmesEmCartaz] = useState(null);

    // Get a lista de filmes
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        promise.then(resposta => {
            setFilmesEmCartaz(resposta.data);
            console.log(filmesEmCartaz);
        });

        promise.catch((error => {
            console.log(error.response.data);
        }))
    }, [])

    if (filmesEmCartaz == null) {
        return (
            <span> Carregando </span>
        );
    }

    // Renderiza os posters
    return (   
        <div>     
        <Titulo>
        Em Cartaz
        </Titulo>    

        <Filmes>

            <Filme>
                
            {filmesEmCartaz.map(filme => <Poster key={filme.id}> <Link to={`/sessoes/${filme.id}`}> 
            <img src={filme.posterURL} height='210px' width='145px'/> </Link> </Poster>)}

            </Filme>


        </Filmes>   
        </div> 
    );
}

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Filmes = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Filme = styled.ul`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`
const Poster = styled.li`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    border-radius: 8px;
    cursor: pointer;

`