import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InfoContainer = styled.div`
  width: calc(100% - 320px);

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  height: 350px;
  width: 280px;
  padding-top: 10px;

  grid-row: span 2;

  display: flex;
  justify-content: center;

  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  height: 125%;
`

export const TextContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 25px 20px;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-size: 1.8rem;
  text-shadow: 1px 1px 3px #000c;
`

export const DowloadCV = styled.a`
  font-family: "Amatic SC";
  font-size: 2.8rem;
  text-decoration: none;
  color: var(--silver);
  transition: 500ms;

  width: 200px;
  height: 50px;
  border-radius: 15px;
  box-shadow: var(--box-shadow);

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--translucent-hover);
  }
`
