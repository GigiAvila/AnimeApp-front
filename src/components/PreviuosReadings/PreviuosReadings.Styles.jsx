import styled from "styled-components";

export const HistoryContainer = styled.section`
display:flex;
flex-direction: column;
width: 100%;
justify-content: center;

> h2 {
  padding: 2vw 1vw;
  font-size: 2.5vw;
}
`

export const SearchReadings = styled.div`
align-self: flex-end;
padding: 2vw;
position: absolute;
top: 0;
`

export const InputLabel = styled.label`
  margin-right: 10px; 
`;

export const InputField = styled.input`
  padding: 5px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  width: 20vw;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
  }
`;

export const PreviousReadingsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

`;


export const DeleteIcon = styled.div`
width: 1.3vw;
height: auto;
position: absolute;
right: 5px;
top: 5px;

> img {
  width: 100%;
  height: auto;
}`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2vw;
`;

export const PaginationButton = styled.button`
  
  background-color: ${({ active }) => (active ? 'black' : '#ffffff')};
  color: ${({ active }) => (active ? '#ffffff' : 'black')};
  border: 1px solid black;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    background-color: grey;
    color: black;
    border: 1px solid grey;
  }
`;

export const NotHistoryFound = styled.div`
display: flex;
flex-direction: column;
gap: 2vw;
align-items: center;

> h1 {
  font-size: 1.5vw;
  font-style: italic
}`