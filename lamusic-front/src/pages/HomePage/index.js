import React, { useEffect, useState } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import PlaylistCard from "../../components/PlaylistCard"
import MusicCard from "../../components/MusicCard"
import { HomeContainer, Background, PlaylistContainer, MusicsContainer, Title, Playlists, Musics, AddButton, ButtonBox, CloseButton } from "./styles"
import CreatePlayListForm from "../../components/CreatePlaylist"
import CreateMusicForm from "../../components/CreateMusic"
import Modal from "react-modal"
import { ModalStyle } from "./stylesModal"
import axios from "axios"

export default function HomePage() {
    window.document.title = "Lamusic - Home"
    useProtectedPage()
    const [playlist, setPlaylist] = useState([], undefined)
    const [music, setMusic] = useState([], undefined)
    const [modalIsOpen, setModalIsOpen] = useState({
        isOpen: false,
        modalName: ""
       
    })

    useEffect(() => {
        getAllPlaylists()
        getAllMusics()
    },[])
  
    const getAllPlaylists = () => {
        axios.get("https://lamusic.herokuapp.com/playlist", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setPlaylist(response.data.playlist)
          }).catch(error => {
            alert("Nenhuma playlist encontrada")
            console.log(error.message)
        })
    }

    const getAllMusics = () => {
        axios.get("https://lamusic.herokuapp.com/music", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setMusic(response.data.result)
        }).catch(error => {
            alert("Nenhuma música encontrada")
            console.log(error.message)
        })
    }

    const closeModal = () => {
        setModalIsOpen({
            isOpen: false,
            modalName: ""
        })
    }

    const handleOpenModal = (field) => {
        setModalIsOpen({
            isOpen: true,
            modalName: field
        })
    }

    return (
        <HomeContainer>
            <Background>
                {modalIsOpen.isOpen && (<Modal
                    onRequestClose={closeModal}
                    isOpen={modalIsOpen}
                    style={ModalStyle}
                >
                    <CloseButton onClick={() => setModalIsOpen(false)}>X</CloseButton>

                    {modalIsOpen.modalName === "playlist" &&
                        (<CreatePlayListForm
                            getAllPlaylists={getAllPlaylists}
                            closeModal={closeModal}
                        />)}

                    {modalIsOpen.modalName === "music" &&
                        (<CreateMusicForm
                            closeModal={closeModal}
                        />)}


                </Modal>)
                }
                <PlaylistContainer>
                    <ButtonBox>
                        <Title>SUAS PLAYLISTS</Title>
                        <AddButton onClick={() => handleOpenModal("playlist")}>+</AddButton>
                    </ButtonBox>
                    <Playlists>
                        {playlist && playlist.map(item => {
                            return (
                                <div>
                                    <PlaylistCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        image={item.image}
                                        getAllPlaylists={getAllPlaylists}
                                    />
                                </div>
                            )
                        })}
                    </Playlists>
                </PlaylistContainer>
                <MusicsContainer>
                    <ButtonBox>
                        <Title>SUAS MÚSICAS</Title>
                        <AddButton onClick={() => handleOpenModal("music")}>+</AddButton>
                    </ButtonBox>
                    <Musics>
                        {music && music.map(item => {
                            return (
                                <div>
                                    <MusicCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        author={item.author}
                                        genres={item.genres}
                                        file={item.file}
                                        flexDirection={"column"}
                                        getAllMusics={getAllMusics}
                                    />
                                </div>
                            )
                        })}
                    </Musics>
                </MusicsContainer>
            </Background>
        </HomeContainer>
    )
}