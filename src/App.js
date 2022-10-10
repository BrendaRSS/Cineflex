import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CineflexHeadrer from "./CineflexHeader";
import PageEscolhaDeFilme from "./PageEscolhaDeFilme";
import PageEscolhaDaSessao from "./PageEscolhaDeSessao";
import PageAssentosDaSessao from "./PageAssentosDaSessao";
import PageSucesso from "./PageSucesso"


export default function App() {
    const[nameFilm, setNameFilm]=useState("")
    const[dataSessao, setDataSessao]=useState("")
    const[horaSessao, setHoraSessao]=useState("")
    const[lugaresEscolhidos, setLugaresEscolhidos]=useState([])
    const[cpf, setCpf]=useState("")
    const[name, setName]=useState("")

    return (
        <BrowserRouter>
            <ScreenContainer>
                <GlobalStyle />
                <CineflexHeadrer />
                <Routes>
                    <Route path="/" element={<PageEscolhaDeFilme />}/>
                    <Route path="/sessoes/:idFilme" element={<PageEscolhaDaSessao/>}/>
                    <Route 
                        path="/assentos/:idSessao" 
                        element={<PageAssentosDaSessao
                                        setNameFilm={setNameFilm}
                                        setDataSessao={setDataSessao} 
                                        setHoraSessao={setHoraSessao}
                                        setLugaresEscolhidos={setLugaresEscolhidos}
                                        cpf={cpf} 
                                        setCpf={setCpf}
                                        name={name}
                                        setName={setName}/>}/>
                    <Route 
                        path="/sucesso" 
                        element={<PageSucesso
                                        nameFilm={nameFilm}
                                        dataSessao={dataSessao}
                                        horaSessao={horaSessao} 
                                        lugaresEscolhidos={lugaresEscolhidos}
                                        cpf={cpf} 
                                        name={name}/>}/>
                </Routes>
            </ScreenContainer>
        </BrowserRouter >
    )
}

const ScreenContainer = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 5px;
`