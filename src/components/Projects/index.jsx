import React, { Fragment, useState } from "react"

import {
  CloseIcon,
  Content,
  Text,
  Image,
  Name,
  Project,
  ProjectDetails,
  ProjectModal,
  Title,
  Wrapper,
  Subtitle,
  Link,
  Icon,
  LinkContainer,
  TextContainer,
} from "./style"
import { BsGithub, BsLink45Deg, BsX } from "react-icons/bs"

const Projects = () => {
  const [currentProject, openProject] = useState(null)

  const projectsArray = []

  return (
    <Content>
      {projectsArray.map((project, index) => (
        <Fragment key={index}>
          <Project onClick={() => openProject(index)}>
            <Image src={project.image} />
            <Name>{project.name}</Name>
          </Project>

          {currentProject === index && (
            <ProjectModal>
              <CloseIcon onClick={() => openProject(null)}>
                <BsX />
              </CloseIcon>
              <ProjectDetails>
                <Wrapper>
                  <div
                    style={{
                      margin: "auto",
                      backgroundColor: "#fff2",
                      width: "100%",
                      height: "200px",
                    }}
                  >
                    {project.gif}
                  </div>
                </Wrapper>
                <Wrapper>
                  <Title>{project.name}</Title>

                  <Subtitle>Descrição</Subtitle>
                  <TextContainer>
                    <Text>{project.description}</Text>
                  </TextContainer>

                  <Subtitle>Tecnologias</Subtitle>
                  <Text>{project.technologies}</Text>

                  <LinkContainer>
                    <Link href="##">
                      <Icon>
                        <BsLink45Deg />
                      </Icon>
                      Link do projeto
                    </Link>
                    <Link href="##">
                      <Icon>
                        <BsGithub />
                      </Icon>
                      Repositório
                    </Link>
                  </LinkContainer>
                </Wrapper>
              </ProjectDetails>
            </ProjectModal>
          )}
        </Fragment>
      ))}
    </Content>
  )
}

export default Projects
