import React, { useState } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import PlaylistCard from "../../components/PlaylistCard"
import MusicCard from "../../components/MusicCard"
import { useRequestData } from "../../hooks/useRequestData"
import { HomeContainer, Background, PlaylistContainer, MusicsContainer, Title, Playlists, Musics, AddPlaylist, ButtonBox, CloseButton } from "./styles"
import CreatePlayListForm from "../../components/CreatePlaylist"
import CreateMusicForm from "../../components/CreateMusic"
import Modal from "react-modal"
import { ModalStyle } from "./stylesModal"

export default function HomePage() {
    window.document.title = "Lamusic - Home"
    useProtectedPage()
    const [modalIsOpen, setModalIsOpen] = useState({
        isOpen: false,
        modalName: ""
        
    })
  
    const getAllPlaylists = useRequestData("https://lamusic.herokuapp.com/playlist", undefined)

    const getAllMusics = useRequestData("https://lamusic.herokuapp.com/music", undefined)

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
                        <AddPlaylist onClick={() => handleOpenModal("playlist")}>+</AddPlaylist>
                    </ButtonBox>
                    <Playlists>
                        {getAllPlaylists && getAllPlaylists.playlist.map(item => {
                            return (
                                <div>
                                    <PlaylistCard
                                        key={item.id}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        image={item.image}
                                    />
                                </div>
                            )
                        })}
                    </Playlists>
                </PlaylistContainer>
                <MusicsContainer>
                    <ButtonBox>
                        <Title>SUAS MÚSICAS</Title>
                        <AddPlaylist onClick={() => handleOpenModal("music")}>+</AddPlaylist>
                    </ButtonBox>
                    <Musics>
                        {getAllMusics && getAllMusics.result.map(item => {
                            return (
                                <div>
                                    <MusicCard
                                        key={item.id}
                                        title={item.title}
                                        author={item.author}
                                        genres={item.genres}
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