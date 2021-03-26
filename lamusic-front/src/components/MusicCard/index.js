import axios from "axios"
import { useState } from "react"
import Modal from "react-modal"
import { MusicBox, Title, Author, Genres, Card, DeleteButton, Audio, ButtonContainer, AddButton, CloseButtonModal } from "./styles"
import { ModalStyle } from "./stylesModal"

export default function MusicCard(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const sliceGenres = props.genres.join(' - ')
 
    const DeleteMusic = () => {
        axios.delete(`https://lamusic.herokuapp.com/music/${props.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                alert("Musica deletada com sucesso!")
                props.getAllMusics()
            }).catch(error => {
                alert("Musica não deletada. Tente novamente")
                console.log(error.message, "erro")
            })
    }

    
    const playlists = props.getAllPlaylists
    //console.log( props.getAllPlaylists, "playlist")

    // const playlistId = 
    //     playlists && playlists.map(item => {
    //         return (
               
    //         )
    //     })
        



        

    //console.log(array, "array")

    // const body = {
    //     musicId,
    //     playlistI
    // }

    
    const AddMusic = ({musicId, playlistId}) => {
        console.log({playlistId, musicId}, "id")
        const body = {
            musicId, playlistId
        }
        console.log(body, "body")
        
        axios.put(`https://lamusic.herokuapp.com/playlist/insert`, body,  {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(() => {
            alert("Música adicionada na playlist com sucesso!")
            closeModal()
        }).catch(error => {
            alert("Erro ao adicionar música.Por favor, tente novamente.")
            console.log(error.message, "erro")
        })
    }
   
    return (
        <div>
        {modalIsOpen && <Modal
            onRequestClose={closeModal}
            isOpen={modalIsOpen}
            style={ModalStyle}
        >
            <CloseButtonModal onClick={() => setModalIsOpen(false)}>X</CloseButtonModal>
                <h3>Adicionar música na playlist...</h3>
                {props.getAllPlaylists && props.getAllPlaylists.map(item => {
                return ( 
                    <div>
                     <button onClick={() => AddMusic({musicId:props.id,playlistId:item.id})}>{item.title}</button>
                    </div>
                )
                })}
              
         
        </Modal>
        }
        <Card>
            <ButtonContainer>
            <DeleteButton onClick={DeleteMusic}>X</DeleteButton>
            <AddButton onClick={() => {setModalIsOpen(true)}}>+</AddButton>
            </ButtonContainer>
            <MusicBox flexDirection={props.flexDirection}>
              
                <Audio controls src={props.file} type={"audio/mpeg"}/>
                {/* <button onClick={DeleteMusicFromPlaylist}>X</button> */}
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
                <Genres>{sliceGenres}</Genres>
               
                <p>{props.album}</p>
            </MusicBox>
        </Card>
        </div>
    )
}