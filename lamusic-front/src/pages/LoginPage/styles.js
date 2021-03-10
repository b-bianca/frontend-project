import styled from "styled-components"

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    background-image: linear-gradient(350deg, greenyellow 25%, transparent 15%, transparent 100%);
    background-position: 0px 60px; 
` 
export const Background = styled.div`
    background-image: linear-gradient(230deg, black 15%, transparent 10%, transparent 100%);
    background-size: 10px 10px ;
    background-position:  0px 60px; 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width:100%;
    height:100vh;
`
export const Title = styled.h2`
    color: yellow;
    align-self: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 70px;
    margin-bottom: 0.3em;
`  
export const FormContainer = styled.form`   
    display:flex;
    flex-direction: column;
    align-self: center;
    width: 30vw;
` 
export const ButtonLogin = styled.button`  
    margin-top: 0.5em;
    height:5vh;
    width: 30vw;
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