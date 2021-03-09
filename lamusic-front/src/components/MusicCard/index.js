import { MusicBox, Title, Author, Genres } from "./styles"

export default function PlaylistCard(props) {
    
    return (
        <MusicBox>
            <Title>{props.title}</Title>
            <Author>{props.author}</Author>
            <Genres>{props.genres}</Genres>
        </MusicBox>
    )
}