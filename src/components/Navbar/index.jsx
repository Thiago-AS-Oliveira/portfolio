import React, { useEffect, useState } from "react"

import SocialMedias from "../SocialMedias"
import { Content, Nav, SectionLink, SectionLinksContainer } from "./style"

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Nav>
      <Content scrollPosition={scrollPosition}>
        {scrollPosition > 460 && (
          <SocialMedias width="30%" justify="space-around" />
        )}

        <SectionLinksContainer>
          <SectionLink href="#about">Sobre</SectionLink>
          <SectionLink href="#tech">Tecnologias</SectionLink>
          <SectionLink href="#proj">Projetos</SectionLink>
        </SectionLinksContainer>
      </Content>
    </Nav>
  )
}

export default Navbar
