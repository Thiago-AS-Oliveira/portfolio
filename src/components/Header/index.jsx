import React from "react"

import SocialMedias from "../SocialMedias"
import {
  Gif,
  GifContainer,
  HeaderContainer,
  Subtitle,
  Title,
  TitleContainer,
} from "./style"

const Header = () => {
  return (
    <HeaderContainer>
      <GifContainer>
        <Gif src="./images/animacao.gif" alt="Gif" />
      </GifContainer>

      <TitleContainer>
        <Title>
          Thiago Oliveira
          <Subtitle>Desenvolvedor front-end</Subtitle>
        </Title>

        <SocialMedias width="40%" justify="space-between" />
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header
