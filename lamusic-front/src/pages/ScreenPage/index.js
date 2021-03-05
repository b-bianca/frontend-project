import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { ScreenContainer, TextContainer, Title, Subtitle } from "./styles"

export default function ScreenPage() {
    window.document.title = "Lamusic"
    useUnProtectedPage()
  
    return (
        <ScreenContainer> 
            <TextContainer>
                <Title>Qual a sua vibe?</Title>
                <Subtitle>um universo de músicas e podcasts ao seu alcance</Subtitle>
                <Subtitle>compartilhe suas criações</Subtitle>
            </TextContainer>
        </ScreenContainer>
        
    )
}