import styled from "styled-components";

export const Overlayer = styled.div`
width: 100vw;
height: 100vh;
position:fixed;
inset: 0;
background-color: rgba(0,0,0, 0.9);
display: flex;
justify-content: center;
align-items: center;

`

export const ModalContainer = styled.div`
width: 60vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: black;
position: relative;
border-radius: 15px;
gap: 2vw;
`


export const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1vw;
width: 70%;

> h1 {
    color: white;
    font-size: 2.5vw;

}

> p {
    color: white;
    font-size: 1.2vw;

}
`


export const ActionsContainer = styled.div`
width: 100%;
height: auto;
display: flex;
gap: 2vw;
justify-content: center;
align-items: center;


> button {
padding: 0.5vw;
font-size: 1vw;
border-radius: 4px;
cursor: pointer;
border: none;
outline: none;
background-color: white;
color: black;

}`


export const IconWrapper = styled.div`
width: 1.2vw;
height: auto;
position: absolute;
right: 10px;
top: 10px;
cursor: pointer;

> img {
    width: 100%;
    height: auto;
    filter: invert(1)
}
`
