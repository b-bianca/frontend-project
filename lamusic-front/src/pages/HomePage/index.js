import React from "react"
import PlaylistCard from "../../components/PlaylistCard"
import MusicCard from "../../components/MusicCard"
//import { useHistory } from "react-router"
import { useRequestData } from "../../hooks/useRequestData"
import { HomeContainer, Background, PlaylistContainer, MusicsContainer, Title, Playlists, Musics, AddPlaylist } from "./styles"

export default function HomePage() {
    //const history = useHistory()
    
    const [ dataPlaylists ] = useRequestData("https://lamusic.herokuapp.com/playlist", undefined)
    
    const [ dataMusics ] = useRequestData("https://lamusic.herokuapp.com/music", undefined)

    return (
        <HomeContainer>
            <Background>
                <PlaylistContainer>
                    <Title>SUAS PLAYLISTS</Title>
                    <AddPlaylist>+</AddPlaylist>
                    <Playlists>
                        {dataPlaylists && dataPlaylists.playlist.map(item => {
                             return (
                                <div>
                                    <PlaylistCard
                                        key= {item.id}
                                        title= {item.title}
                                        subtitle= {item.subtitle}
                                        image= {item.image}
                                    />
                                </div>
                            )
                        })}
                    </Playlists>
                </PlaylistContainer>
                <MusicsContainer>
                <Title>SUAS MÚSICAS</Title>
                <Musics>
                        {dataMusics && dataMusics.result.map(item => {
                             return (
                                <div>
                                    <MusicCard
                                        key= {item.id}
                                        title= {item.title}
                                        author= {item.author}
                                        genres= {item.genres}
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