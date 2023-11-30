import styled from "styled-components";


export const FavoritePreviewContainer = styled.div`
background-color: rgba(0,0,0,0.3);
border-radius: 15px;
width: 60vw;
height: 42vh;
display: flex;
justify-content: space-between;
`


export const InfoContainer = styled.div`
width: 45vw;
display: flex;
flex-direction: column;
gap: 1vw;
justify-content: flex-start;
align-items: flex-start;
padding:1vw;


>h2 {
    font-size: 2.7vw;
    color: white;
    letter-spacing: 1px;
}

> p {
    font-size: 1.2vw;
    line-height: 1.5vw;
    letter-spacing: 1px;
    color: white;
    font-weight: 300;
}

> button {
    padding: 0.5vw;
    outline: none;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    
    
}
`

export const AuthorYearInfo = styled.div`
display: flex;
gap: 1vw;

> h5 {
    font-size: 1.2vw;
    line-height: 1.5vw;
    letter-spacing: 1px;
    color: white;
    font-weight: bold;
}
`

export const VolumesAndContinueInfo = styled.div`
display: flex;
flex-direction: column;
gap: 1vw;

> * {
    color: white
}`


export const ReadingIconWrapper = styled.div`
width: 2vw;
height: auto;
display: flex;
gap: 0.3vw;

&:hover {
    transform: scale(1.3);
    transition: .3s ease;

}

 

> img {
    width: 100%;
    height: auto;
    filter: invert(1);
}

`
export const MangaCoverContainer = styled.div`
width: auto;
height: 100%;



> img {
    width:a uto;
    height: 100%;
    border-radius: 0 15px 15px 0;
}
`