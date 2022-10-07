import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CineflexHeadrer from "./CineflexHeader";
import PageEscolhaDeFilme from "./PageEscolhaDeFilme";
import PageEscolhaDaSessao from "./PageEscolhaDeSessao";
import PageAssentosDaSessao from "./PageAssentosDaSessao";
import PageSucesso from "./PageSucesso"


export default function App() {
    return (
        <BrowserRouter>
            <ScreenContainer>
                <GlobalStyle />
                <CineflexHeadrer />
                <Routes>
                    <Route path="/" element={<PageEscolhaDeFilme />}/>
                    <Route path="/sessoes/:idFilme" element={<PageEscolhaDaSessao/>}/>
                    <Route path="/assentos/:idSessao" element={<PageAssentosDaSessao/>}/>
                    <Route path="/sucesso" element={<PageSucesso/>}/>
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