import { MusicBox, Title, Author, Genres, Card, DeleteButton, Audio } from "./styles"
import axios from "axios"

export default function MusicCard(props) {

    const sliceGenres = props.genres.join(' - ')
    console.log(sliceGenres)
    console.log(props.genres)
    
    

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
   
    

 
    return (
        <Card>
            <DeleteButton onClick={DeleteMusic}>X</DeleteButton>
            <MusicBox flexDirection={props.flexDirection}>
              
                <Audio controls src={props.file} type={"audio/mpeg"}/>
                {/* <button onClick={DeleteMusicFromPlaylist}>X</button> */}
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
                <Genres>{sliceGenres}</Genres>
               
                <p>{props.album}</p>
            </MusicBox>
        </Card>
    )
}