import styled from "styled-components";


export const ProfileInformationContainer = styled.form`
width: 100%;
height: 100%;
display: flex;
gap: 2vw;
align-items: center;
justify-content: center;
position: relative;`

export const AvatarWrapper = styled.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
position: relative;

> img {
    width: 100%;
    height: 100%;
    border-radius: 50%; 
    object-fit: cover; 
  }

`

export const AvatarEdition = styled.button`
    font-size: 0.7vw;
    width: 3vw;
    padding: 0.2vw;
    align-self: flex-end;
    border: none;
    background-color: black;
    border-radius: 50%;
    padding: 0.5vw;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;

   > img {
    width: 100%;
    height: auto;
    filter: invert(1);
   } 
   


`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 0.5vw;`


export const InputWrapper = styled.div`
display: flex;
gap: 2vw;
align-items: center;

> button {
    height: 4vh;
    width: 4vw;
    padding: 0.5vw 0.3vw;
    margin: 0 auto;
    font-size: 0.7vw;
    cursor: pointer;
   
}`

export const StyledLabel = styled.label`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 1vw;
`

export const StyledInput = styled.input`
height: 2vh;
width: 20vw;
padding: 1vw 0.3vw;
border-radius: 4px;
border: none`

export const StyledSelect = styled.select`
height: 2vh;
width: 20vw;
padding: 1vw 0.3vw;
border-radius: 4px;
border: none;
color: black;

> option {
    color: black
}`

export const SubmitButton = styled.button`
width: 8vw;
padding: 0.5vw;
border-radius: 4px;
border: none;
cursor: pointer;
align-self: flex-end`