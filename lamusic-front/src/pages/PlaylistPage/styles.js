import styled from "styled-components"

export const PlaylistContainer = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-color: #2c2c2c;
    background-image: linear-gradient(230deg, black 15%, transparent 10%, transparent 100%);
    background-size: 10px 10px ;
    background-position:  0px 60px; 
`   
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width:96%;
    height:86vh;
    background-color: black;
    border-radius: 5px;
    margin-bottom: 1em;
` 
export const MainContainer = styled.div`  
    display: flex;
    //justify-content: space-evenly;
`   
export const Item = styled.p` 
    margin: 2em;
    color: greenyellow;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    font-size: 20px;
    //margin: 0.3em 0 0.5em 0.5em;
`   
export const MusicInfo = styled.p`
    margin: 2em;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    align-self: center;
    //margin-bottom: 1em;
`       
export const Mus = styled.div`
    display: flex;
    //justify-content: space-evenly; 
`    
export const DeleteButton = styled.button` 
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    align-self: center;
    //margin: 0.1em 0 0 0.5em;
    padding: 0em 0.2em;
    outline: none;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`