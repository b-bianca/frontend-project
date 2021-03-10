import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-color: greenyellow;
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
export const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 40vh;
`
export const MusicsContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 94%auto;
    height: 60vh;
`
export const Title = styled.h2`  
    color: greenyellow;
    font-family: 'Open Sans Condensed', sans-serif;
    margin: 0.3em 0 0 0.3em;
`
export const Playlists = styled.div`   
    display: flex;
    flex-wrap: wrap;
`
export const Musics = styled.div`   
    display: flex;
    flex-wrap: wrap;
`
export const AddPlaylist = styled.button`   
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    outline: none;
    margin: 0.1em 0 0 0.5em;
    padding: 0em 0.2em;
    //align-self: center;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`
export const ButtonBox = styled.div`   
    display: flex;
`
export const CloseButton = styled.button`
    background-color: transparent;
    border: transparent;
    color: greenyellow;
    margin: 0.1em 0 0 0.5em;
    padding: 0em 0.2em;
    outline: none;
    align-self: flex-start;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    font-family: 'Open Sans Condensed', sans-serif;
    &:hover {
    background-color: yellow;
    color:black;
    }
`    