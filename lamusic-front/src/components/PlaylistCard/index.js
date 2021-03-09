import { PlaylistBox, Image, Div, Title, Subtitle } from "./styles"

export default function PlaylistCard(props) {
    
    return (
        <PlaylistBox>
            {/* <Image>src={props.image} alt={"capa playlist"}</Image> */}
            <Div></Div>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </PlaylistBox>
    )
}