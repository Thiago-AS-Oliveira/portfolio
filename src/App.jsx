import React, { useState } from "react"
import GlobalStyle, { AppContainer } from "./GlobalStyle"

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Sections from "./components/Sections"
import Footer from "./components/Footer"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Header />

      <Sections title="Um pouco sobre mim" id="about">
        <About />
      </Sections>
      <Sections title="Tecnologias" id="tech">
        <Technologies />
      </Sections>

      <Sections title="Projetos" id="proj">
        <Projects />
      </Sections>
      <Footer />
      <GlobalStyle />
    </AppContainer>
  )
}

export default App
