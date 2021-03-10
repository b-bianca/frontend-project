import styled from "styled-components"

export const PlaylistBox = styled.div`
    display: flex;
    flex-direction: column;
`      
export const Div = styled.img`  
    width: 150px;
    height: 150px;
    margin: 1em 1em 1em 2em;
    background:url(${(props)=>props.image}) center center/cover;
`
export const Title = styled.h3`  
    color: yellow;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-style: italic;
    align-content: center;
    align-self: center;
    justify-self: center;
    justify-content: center;
`   
export const Subtitle = styled.h4`  
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    align-content: center;
    align-self: center;
    justify-self: center;
    justify-content: center;
`
