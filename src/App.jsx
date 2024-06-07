import './styles/reset.css'
import './styles/App.css'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar'
import EmCartaz from './EmCartaz';
import Sessoes from './Sessoes';
import Assento from './Assento';
import Finalizado from './Finalizado';
import { useState } from 'react';

export default function App() {
  const [dadosFinais, setDadosFinais] = useState();
  // dados finais mandados para Assentos para receber os valores e re-enviados para a página de sucesso
  console.log(dadosFinais);
  
  return (
    <BrowserRouter>
    <div> 
    <NavBar />

    <Pagina>

    <Routes>
    <Route path="/" element={<EmCartaz/>} />

    <Route path="/sessoes/:idFilme" element={<Sessoes/>} />
    <Route path="/assentos/:idSessao" element={<Assento dadosFinais={dadosFinais} 
    setDadosFinais={setDadosFinais}/>} />
    <Route path="/sucesso/" element={<Finalizado dadosFinais={dadosFinais}/>} />
    </Routes>

    </Pagina>

    </div>
    </BrowserRouter>
  );
}

const Pagina = styled.div`
  margin-top: 80px ;
  display: flex;
  justify-content: center;
  align-items: center;
`