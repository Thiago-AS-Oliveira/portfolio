import React from "react"
import {
  Container,
  DowloadCV,
  Image,
  ImageContainer,
  InfoContainer,
  Text,
  TextContainer,
} from "./style"

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="./images/foto.png" alt="minha foto" />
      </ImageContainer>

      <InfoContainer>
        <TextContainer>
          <Text>
            Profissional em transição de carreira, estudei desenvolvimento
            front-end de forma auto-didata, tenho estudado desenvolvimento
            back-end visando ser mais versátil e se necessário atuar como tal ou
            como desenvolvedor full-stack.
          </Text>
        </TextContainer>

        <DowloadCV href="/curriculo/cv.pdf" download>
          Dowload CV
        </DowloadCV>
      </InfoContainer>
    </Container>
  )
}

export default About
