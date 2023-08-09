import React from "react"
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa"

import { SocialMediasContainer, SocialMediasLinks } from "./style"

const SocialMedias = ({ width, justify }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const email = "thiagoasoliv@gmail.com"
    navigator.clipboard
      .writeText(email)
      .then(() =>
        alert("Endereço de email copiado para área de transferência.")
      )
  }

  return (
    <SocialMediasContainer width={width} justify={justify}>
      <SocialMediasLinks
        href="https://www.linkedin.com/in/thiago-as-oliv/"
        target="_blank"
      >
        <FaLinkedinIn />
      </SocialMediasLinks>
      <SocialMediasLinks
        href="https://github.com/Thiago-AS-Oliveira"
        target="_blank"
      >
        <FaGithub />
      </SocialMediasLinks>

      <SocialMediasLinks href="mailto:thiagoasoliv@gmail.com">
        <FaRegEnvelope />
      </SocialMediasLinks>
    </SocialMediasContainer>
  )
}

export default SocialMedias
