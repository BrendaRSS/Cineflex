import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PageAssentosDaSessao(){
    const[sessao, setSessao]=useState(undefined)
    const[cadeirasEscolhidas, setCadeirasEscolhidas]=useState([])
    const {idSessao} = useParams()
    console.log(cadeirasEscolhidas)

    useEffect(()=>{
        const promisse=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((resposta)=>{
            setSessao(resposta.data)
        })
        
        promisse.catch((erro)=>{
            console.log(erro.response.data)
        })
    },[idSessao])

    if(sessao===undefined){
        return <div>Carregando...</div>
    }
    
    function reservarAssento(idAcentoEscolhido){
        console.log(idAcentoEscolhido)
        if(idAcentoEscolhido.isAvailable===true){
            let newArray=[...cadeirasEscolhidas, idAcentoEscolhido.id]
            setCadeirasEscolhidas(newArray)
        }
    }

    return(
        <ContainerAssentosSessao>
            <SubtitleAssentosSessao>
                Selecione o(s) assento(s)
            </SubtitleAssentosSessao>
            <Assentos>
                {sessao.seats.map((a, index)=>
                    <BotaoAssento 
                        key={index} 
                        isAvailable={a.isAvailable}
                        corAssento={(cadeirasEscolhidas.includes(a.id)===true? "#1AAE9E":"#C3CFD9")}
                        bordaAssento={(cadeirasEscolhidas.includes(a.id)===true? "#0E7D71":"#7B8B99")}
                        onClick={()=>reservarAssento(a)}>
                            {a.name}
                    </BotaoAssento>)}
            </Assentos>
            <EstadoDoAssento>
                <div>
                    <CorBotao color="#1AAE9E" borda="#0E7D71"/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <CorBotao color="#C3CFD9" borda="#7B8B99"/>
                    <p>Disponível</p>
                </div>
                <div>
                    <CorBotao color="#FBE192" borda="#F7C52B"/>
                    <p>Indisponível</p>
                </div>
            </EstadoDoAssento>
            <DadosDoComprador>
                <NomeComprador>
                    <label>Nome do comprador</label>
                    <input placeholder="Digite seu nome"/>
                </NomeComprador>
                <CPFcomprador>
                    <label>CPF do comprador</label>
                    <input placeholder="Digite seu CPF"/>
                </CPFcomprador>
            </DadosDoComprador>
            <Link to="/sucesso">
                <BotaoReservarAssento>Reservar assento(s)</BotaoReservarAssento>
            </Link>
            <FooterEscolhaAssento>
                <FooterMovieSelecionado>
                    <img alt="Capa do filme" src={sessao.movie.posterURL}/>
                </FooterMovieSelecionado><p>{sessao.movie.title}<br/>{sessao.day.weekday} - {sessao.name}</p>
            </FooterEscolhaAssento>
        </ContainerAssentosSessao>
    )
}

const ContainerAssentosSessao=styled.div`
    width: 374px;
    min-height: 100vh;
    background-color: white;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubtitleAssentosSessao=styled.div`
    box-sizing: border-box;
    padding: 45px 10px;
    width: 100%;
    height: 110px;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    font-size:24px;
    line-height: 28.13px;
    letter-spacing: 4%;
    text-align: center;
`
const Assentos=styled.div`
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const BotaoAssento=styled.button`
    box-sizing: border-box;
    padding:3px;
    width: 26px;
    height: 26px;
    background-color: ${(props)=>(props.isAvailable===true? props.corAssento:"#FBE192")};
    border: 1px solid ${(props)=>(props.isAvailable===true? props.bordaAssento:"#F7C52B")};
    border-radius: 50px;
    margin: 5px 5px;
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    font-size:11px;
    line-height: 13px;
    letter-spacing: 4%;
    color: #000000;
`
const EstadoDoAssento=styled.div`
    box-sizing: border-box;
    padding: 20px 50px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size:13px;
            line-height: 15.30px;
            letter-spacing: 1,5%;
            color: #4E5A65;
        }
`
const CorBotao=styled.button`
    width: 24px;
    height: 24px;
    background-color: ${(props)=>props.color};
    border: 1px solid ${(props)=>props.borda};
    border-radius: 50px;
    margin-bottom:5px;
`
const DadosDoComprador=styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 57px;
    display: flex;
    flex-direction: column;
`
const NomeComprador=styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom:25px;
        label{

        }
        input{
            width: 350px;
            height: 51px;
        }
`
const CPFcomprador=styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    label{
        
    }
    input{
        width: 350px;
        height: 51px;
    }
`
const BotaoReservarAssento=styled.button`
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
  width: auto;
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
const FooterEscolhaAssento=styled.footer`
width: 375px;
height: 117px;
margin-top: 30px;
background-color: #DFE6ED;
display: flex;
justify-content: start;
align-items: center;
text-align: start;
box-shadow: 0px -1px 1px #9EADBA;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:26px;
        line-height: 30.50px;
    }
`
const FooterMovieSelecionado=styled.div`
background-color: #FFFFFF;
width: 64px;
height: 89px;
margin: 15px;
display: flex;
justify-content: center;
align-items: center;
border-radius:3px;
box-shadow: 0px 1px 12px 4px #00000073;
    img{
        width: 90%;
    }
`