import styled from "styled-components"

export const Title = styled.h2`
    color: yellow;
    align-self: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 70px;
    //margin-bottom: 0.3em;
`
export const ButtonSignup = styled.button`  
    margin-top: 0.5em;
    height:5vh;
    width: 25vw;
    outline: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    cursor: pointer;
    background: yellow;
    font-size: 16px;
    color: black;
    border: transparent;
    border-radius: 2px;
    &:active {
    background-color: greenyellow;
    }
`
export const FormContainer = styled.form`   
    display:flex;
    flex-direction: column;
    align-self: center;
    width: 25vw;
` 
export const ModalContainer = styled.div`  
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
` 
 