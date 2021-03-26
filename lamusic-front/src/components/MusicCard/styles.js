import styled from "styled-components"

export const MusicBox = styled.div`
    //display: flex;
    //flex-direction: ${props => props.flexDirection};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    cursor: pointer;
`      
export const Title = styled.h3`  
    color: yellow;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: italic;
    align-self: center;
`   
export const Author = styled.h4`  
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    align-self: center;
`
export const Genres = styled.p`  
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    align-self: center;
`
export const Card = styled.div` 
    background-color: rgba(0,0,0, 0.3);
    width: 12.5em;
    height: 14.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.75em;
    margin-right: 0.5em;
    margin-bottom:1em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
` 
export const DeleteButton = styled.button`
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    margin: 0.1em 0 0 0.5em;
    padding: 0em 0.2em;
    outline: none;
    align-self: flex-start;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`
export const Audio = styled.audio`  
    width: 12em;
    height: 2.5em;
    align-self: center;
    margin: 0.5em;
    outline: none;
`     
export const AudioContainer= styled.div`   
    /* display: flex; */
`       
export const ButtonContainer = styled.div`  
    display: flex;
    justify-content: space-between;
`
export const AddButton = styled.button`
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    margin: 0.1em 0.5em 0 0;
    padding: 0em 0.1em;
    outline: none;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`     
export const CloseButtonModal = styled.button`
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    margin: 0.1em 0 0 0.5em;
    padding: 0em 0.2em;
    outline: none;
    align-self: flex-start;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`    