import React from "react"
import { Content, SectionContainer, Title } from "./style"

const Sections = ({ children, title, id }) => {
  return (
    <SectionContainer id={id}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </SectionContainer>
  )
}

export default Sections
