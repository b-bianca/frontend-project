import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { ScreenContainer, TextContainer, Title, Subtitle, TitleContainer, Detail } from "./styles"

export default function ScreenPage() {
    window.document.title = "Lamusic"
    useUnProtectedPage()
  
    return (
        <ScreenContainer> 
            <TextContainer>
                <TitleContainer>
                <Title>Qual a sua</Title>
                <Detail>vibe?</Detail>
                </TitleContainer>
                <Subtitle>um universo de músicas e podcasts ao seu alcance</Subtitle>
                <Subtitle>compartilhe suas criações</Subtitle>
            </TextContainer>
        </ScreenContainer>
    )
}