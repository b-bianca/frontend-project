import styled from "styled-components"

export const Title = styled.h2`
    color: yellow;
    align-self: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 70px;
    //margin-top: 5em;
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
    padding: 1em 0;
` 
export const ModalContainer = styled.div`  
    width: 100%;
    //height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //padding: 1em 0;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: greenyellow; 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
` 
export const GenreContainer = styled.div`  
    display: flex;
    flex-wrap: wrap;
`  
export const InputContainer = styled.div` 
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;

`
export const Input = styled.input`  
    margin-left: 1em;
    margin-right: 0.3em;
`        