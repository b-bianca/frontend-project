import { useHistory } from "react-router-dom"
import { goToPlaylistPage } from "../../routes/coordinator"
import { PlaylistBox, Subtitle, Title, Card, DeleteButton, Image } from "./styles"
import ReactTooltip from "react-tooltip"
import capa from "../../assets/img/capa_default.jpg"
import axios from "axios"
import React from "react"

export default function PlaylistCard(props) {
    const history = useHistory()

    const DeletePlaylist = () => {
        axios.delete(`https://lamusic.herokuapp.com/playlist/${props.id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => {
                alert("Playlist deletada com sucesso!")
            }).catch(error => {
                alert("Playlist não deletada. Tente novamente")
                console.log(error.message)
            })
    }
 
    return (
        <Card>
            <DeleteButton onClick = {DeletePlaylist}>X</DeleteButton>
            <PlaylistBox onClick={() => goToPlaylistPage(history, props.id)}>
                
                <Image image={props.image || capa } alt={"foto da playlist"}/>
                <Title>{props.title}</Title>
                <Subtitle data-tip data-for={props.subtitle}>
                    {props.subtitle.substring(0, 22)}
                    {props.subtitle.length > 22 ? '...' : ''}
                </Subtitle>
                <ReactTooltip
                    id={props.subtitle}
                    type={'dark'}
                    textColor={'white'}
                    border={true}
                    borderColor={'#2C2C2C'}
                    place={'bottom'}
                    getContent={() => props.subtitle}
                />
                
            </PlaylistBox>
        </Card>
    )
}

//substring: até quantas letras vai aparecer
//lenght: tamanho todo do texto, se for maior que coloca as ...