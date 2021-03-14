import styled from "styled-components"

export const PlaylistBox = styled.div`
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
export const Subtitle = styled.h4`  
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    align-self: center;
    margin-bottom: 1em;
`
export const Card = styled.div` 
    background-color: rgba(0,0,0, 0.3);
    width: 12.5em;
    height: 12.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.75em;
    margin-right: 0.5em;
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
export const Image = styled.img.attrs(props => ({src: props.image, alt: props.alt}))` 
`   
//attrs: atributos 
   