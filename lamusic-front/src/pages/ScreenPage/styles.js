import styled from "styled-components"

export const ScreenContainer = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient( to left, greenyellow 35%, transparent 15%, transparent 100%), linear-gradient(to left top, #cb59e9, #b959e2, #a659da, #9558d2, #8456c9, #7a51c9, #704cc9, #6447c9, #5b3dd2, #4f32dc, #4026e5, #2815ee);
    background-position: 0px 60px; 
    width: 100%;
    height:100vh;
`    
export const TextContainer = styled.div`  
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 100%; 
    height: 100vh;
    background-image:  linear-gradient( to bottom right, black 15%, transparent 10%, transparent 100%);
    background-size: 10px 10px;
`  
export const Title = styled.h1`   
    color: black;
    align-self: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 250px;
`
export const Subtitle = styled.h2`   
    color: black;
    align-self: flex-start;
    margin-left: 2.5em;
    margin-bottom: 0.25em;
    font-family: 'Open Sans Condensed', sans-serif;
    background-color: greenyellow;
` 

