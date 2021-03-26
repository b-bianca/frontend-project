import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useParams } from "react-router-dom"
import { Background, PlaylistContainer, MainContainer, Item, MusicInfo, Mus, DeleteButton } from "./styles"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function PlaylistPage() {
    window.document.title = "Lamusic - Playlist"
    useProtectedPage()
    const pathParams = useParams()
    const { id } = pathParams
    const [musics, setMusics] = useState([], undefined)
    const [idMusicPlaylist, setIdMusicPlaylist] = useState([], undefined)

    useEffect(() => {
        getAllMusicsPlaylist()
    }, [musics])

    const getAllMusicsPlaylist = async () => {
        try {

            const response = await axios.get(`https://lamusic.herokuapp.com/playlist/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setMusics(response.data.musicByPlaylist)
            setIdMusicPlaylist(response.data.musicByPlaylist)
            } catch (error) {
            alert("Erro ao carregar músicas. Tente novamente")
            console.log(error.message)
        }
    }
     
    const testeId = idMusicPlaylist && idMusicPlaylist.map(item => {
         return item.LMP_ID
    })

    console.log(testeId, "id")

    const DeleteMusicFromPlaylist = () => {
        axios.delete(`http://localhost:3003/playlist/delete/${testeId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                alert("Música deletada com sucesso!")
            }).catch(error => {
                alert("Música não deletada. Tente novamente")
                console.log(error.message)
            })
    }

    return (
        <PlaylistContainer>
            <Background>

                <p>Nome da Playlist </p>
                <MainContainer>
                    <Item>FAIXA</Item>
                    <Item>ARTISTA</Item>
                    <Item>ALBUM</Item>
                </MainContainer>
                {musics && musics.map(item => {
                    return (
                      <Mus>
                       
                        <MusicInfo>{item.LM_TITLE}</MusicInfo>
                        <MusicInfo>{item.author}</MusicInfo>
                        <MusicInfo>{item.album}</MusicInfo>
        
                        <DeleteButton onClick={DeleteMusicFromPlaylist}>X</DeleteButton>  
                      </Mus> 
                    )
                })} 
               
                {musics.length === 0 ? <p>Você ainda não tem músicas cadastradas</p> : <></>}
             

            </Background>
        </PlaylistContainer>
    )
}  