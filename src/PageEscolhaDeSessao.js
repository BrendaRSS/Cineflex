import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PageEscolhaDaSessao() {
    const [sessoes, setSessoes] = useState(undefined)
    const { idFilme } = useParams()
    console.log(idFilme)

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promisse.then((resposta) => {
            setSessoes(resposta.data)
        })

        promisse.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [idFilme])

    if (sessoes === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <ContainerEscolhaSessao>
            <SubtitleEscolhaSessao>
                Selecione o horário
            </SubtitleEscolhaSessao>
            {sessoes.days.map((d, index) =>
                <Sessoes key={index}>
                    <p>{d.weekday} - {d.date}</p>
                    {d.showtimes.map((h, index) => <Link key={index} to={`/assentos/${h.id}`}><button>{h.name}</button></Link>)}
                </Sessoes>
            )}
            <FooterEscolhaSessao>
                <FooterMovie><img alt="Capa do filme" src={sessoes.posterURL} /></FooterMovie><p>{sessoes.title}</p>
            </FooterEscolhaSessao>
        </ContainerEscolhaSessao>
    )
}

const ContainerEscolhaSessao = styled.div`
    width: 374px;
    min-height: 100vh;
    background-color: white;
    margin-top: 67px;
`
const SubtitleEscolhaSessao = styled.div`
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
const Sessoes = styled.div`
width: 100%;
height: auto;
margin-top: 35px;
    p{
        display: block;
        margin-left: 10px;
        margin-bottom: 10px;
        width: 245px;
        height: 35px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
    }
    button{
        cursor: pointer;
        align-items: center;
        background-clip: padding-box;
        background-color: #E8833A;
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
        width: 82px;
        height: 43px;
        margin-left: 10px;
        padding: calc(.875rem - 1px) calc(1.5rem - 1px);
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
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
    }
`
const FooterEscolhaSessao = styled.footer`
width: 375px;
height: 117px;
background-color: #DFE6ED;
display: flex;
justify-content: start;
align-items: center;
text-align: center;
margin-top: 50px;
box-shadow: 0px -1px 1px #9EADBA;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:26px;
        line-height: 30.50px;
    }
`
const FooterMovie = styled.div`
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