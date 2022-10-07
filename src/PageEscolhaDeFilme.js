import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PageEscolhaDeFilme(){
    const[filmes, setFilmes]=useState(undefined);
    const [error, setError]=useState(false);

    useEffect(()=> {
        const promisse= axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promisse.then((resposta)=>{
            console.log(resposta.data);
            setFilmes(resposta.data)
        })

        promisse.catch((erro)=>{
            console.log(erro.response.data)
        })
    }, [])

    if(!error && filmes===undefined){
        return <div>Carregando...</div>
    }

    return(
        <ContainerEscolhaFilme>
            <SubtitleEscolhaFilme>
                Selecione o Filme
            </SubtitleEscolhaFilme>
            <MovieScreen>
               {filmes.map((f, index)=> 
               <Link to="/sessoes/:idFilme">
                    <Movie key={index}>
                        <img alt="capa do filme" src={f.posterURL}/>
                    </Movie>
                </Link>)}   
            </MovieScreen>
        </ContainerEscolhaFilme>

    )
}

const ContainerEscolhaFilme=styled.div`
    width: 374px;
    min-height: 100vh;
    background-color: white;
    margin-top: 67px;
`
const SubtitleEscolhaFilme=styled.div`
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
const MovieScreen=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
`
const Movie=styled.div`
background-color: #FFFFFF;
width: 145px;
height: 209px;
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