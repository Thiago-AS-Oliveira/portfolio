import React from "react"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { SiRedux, SiExpress, SiStyledcomponents } from "react-icons/si"

import {
  Name,
  Technologie,
  TechnologiesContainer,
  TechnologieSquare,
} from "./style"

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <Technologie>
        <TechnologieSquare color="#E44D26">
          <FaHtml5 />
        </TechnologieSquare>
        <Name>HTML</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#264DE4">
          <FaCss3Alt />
        </TechnologieSquare>
        <Name>CSS</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#F7DF1E">
          <FaJsSquare />
        </TechnologieSquare>
        <Name>Javascript</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#339933">
          <FaNodeJs />
        </TechnologieSquare>
        <Name>Node JS</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#61DAFB">
          <FaReact />
        </TechnologieSquare>
        <Name>React JS</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#764ABC">
          <SiRedux />
        </TechnologieSquare>
        <Name>Redux</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#F05032">
          <FaGitAlt />
        </TechnologieSquare>
        <Name>Git</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#000000">
          <SiExpress />
        </TechnologieSquare>
        <Name>Express</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#47A248">
          <DiMongodb />
        </TechnologieSquare>
        <Name>Mongo DB</Name>
      </Technologie>

      <Technologie>
        <TechnologieSquare color="#DB7093">
          <SiStyledcomponents />
        </TechnologieSquare>
        <Name>Styled Components</Name>
      </Technologie>
    </TechnologiesContainer>
  )
}

export default Technologies
