import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PageSucesso(){
    return(
        <>
        <ContainerSucesso>
            <SubtitleSucesso>
                Pedido feito <br/>
                com sucesso!
            </SubtitleSucesso>
            <EscolhasFeitas>
                <p>Filme e Sessão</p><br/>
                <span>Enola Holmes</span><br/>
                <span>24/06/2021 15:00</span>
            </EscolhasFeitas>
            <EscolhasFeitas>
                <p>Ingressos</p><br/>
                <span>Assento 15</span><br/>
                <span>Assento 16</span>
            </EscolhasFeitas>
            <EscolhasFeitas>
                <p>Comprador</p><br/>
                <span>Nome: Brenda Rayane de Souza e Silva</span><br/>
                <span>CPF: 111.111.111-11</span>
            </EscolhasFeitas>
            <Link to="/">
                <BotaoBackHome>Voltar pra Home</BotaoBackHome>
            </Link>
        </ContainerSucesso>
        </>
    )
}

const ContainerSucesso=styled.div`
    width: 374px;
    min-height: 100vh;
    background-color: white;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubtitleSucesso=styled.div`
    box-sizing: border-box;
    padding: 45px 10px;
    width: 100%;
    height: 110px;
    font-family: 'Roboto', sans-serif;
    font-weight:700;
    font-size:24px;
    line-height: 28.13px;
    letter-spacing: 4%;
    text-align: center;
    color: #247A6B;
`
const EscolhasFeitas=styled.div`
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 10px;
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const BotaoBackHome=styled.button`
  cursor: pointer;
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 225px;
  margin-top: 50px;
    &:hover{
        transform: translateY(-1px);
    }
    &:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
    &:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}
`