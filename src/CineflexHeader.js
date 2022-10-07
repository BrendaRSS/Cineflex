import styled from "styled-components"

export default function CineflexHeadrer(){
    return(
        <TopoCineflex>CINEFLEX</TopoCineflex>
    )
}

const TopoCineflex=styled.header`
box-sizing: border-box;
padding: 15px 10px;
width: 375px;
height: 67px;
background-color: #C3CFD9;
font-family: 'Roboto', sans-serif;
color: #E8833A;
font-weight:400;
font-size: 34px;
line-height: 39.84px;
text-align: center;
position: fixed;
top: 0px;
`