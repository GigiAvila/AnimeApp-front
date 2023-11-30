import { Link } from "react-router-dom";
import styled from "styled-components";

export const LastReadingContainer = styled.div`
background-color: rgba(0,0,0,0.3);
border-radius: 15px;
width: 100%;
height: 42vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1vw;

> h3 {
    color: white;
    font-size: 1.8vw;
}
`
export const LastReadings = styled.section`
width: 30vw;
height: 35vh;
display: flex;
margin: 1vw 0;
overflow:hidden;


> img {
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    transition: .5s ease;

    &:hover {
        width: 8vw;
        opacity: 1;
        cursor: crosshair;
        filter: contrast(120%)
       
    }

}`




export const MoreIconWrapper = styled(Link)`
width: 1.8vw;
height: auto;
align-self: flex-end;
display: flex;

&:hover {
    transform: scale(1.3);
    transition: .3s ease;

}

> img {
    width: 100%;
    height: auto;
    filter: invert(1)

   
}`