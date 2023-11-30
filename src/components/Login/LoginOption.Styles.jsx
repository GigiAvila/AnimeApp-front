import styled from "styled-components";

export const LoginButtonContainer = styled.div`
display: flex;
gap: 1vw;
justify-content: center;
align-items: center;
padding: 1vw;

> p {
    color: white;
    padding: 1vw  0.3vw;
}

> button {
    background-color: transparent;
    border: none;
    outline:none;
    color: #7c2629;
    font-weight: bold;
    padding: 1vw  0.3vw;
    cursor: pointer;
}
}`