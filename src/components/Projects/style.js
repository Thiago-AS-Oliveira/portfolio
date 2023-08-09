import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Project = styled.div`
  height: 200px;
  width: 24%;
  margin: 10px calc(4% / 8);
  text-decoration: none;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
  position: relative;
  transition: 300ms ease-in-out;

  :hover {
    scale: 1.1;
  }

  @media screen and (max-width: 1024px) {
    width: 30%;
    margin: 10px calc(10% / 6);
  }

  @media screen and (max-width: 768px) {
    width: 45%;
    margin: 10px calc(10% / 4);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const Image = styled.img`
  height: 60%;
  transition: 300ms ease-in-out;

  @media screen and (max-width: 768px) {
    height: 65%;
  }

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`

export const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 10px;
  color: var(--silver);
  text-shadow: 1px 1px 3px #000c;
`

export const ProjectModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0007;
  backdrop-filter: var(--blur);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

export const ProjectDetails = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 10px;
  background: linear-gradient(
    to right bottom,
    var(--eerie-black),
    var(--blue-green)
  );
  box-shadow: var(--box-shadow);
  overflow: auto;

  display: flex;

  @media screen and (max-width: 768px) {
    width: 95%;
    height: 95%;

    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 50px 10px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 30px 20px 10px;
    width: 100%;
    height: auto;
  }
`

export const CloseIcon = styled.span`
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 10%;

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`

export const Gif = styled.img``

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`

export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`

export const TextContainer = styled.div`
  width: 100%;
  max-height: 250px;
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #2221;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2222;
    border-radius: 0 5px 5px 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2222;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin: 15px 0;
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: auto;

  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`

export const Link = styled.a`
  width: fit-content;
  font-size: 1.6rem;
  margin-right: 20px;
  color: var(--silver);
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: 200ms ease-in-out;

  :hover {
    color: var(--blue-green);
  }
`

export const Icon = styled.span`
  font-size: 1.6rem;
  height: 1.6rem;
  margin-right: 5px;
`
