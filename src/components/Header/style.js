import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 80%;
  height: 40vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    min-height: 85vh;
    height: auto;
    flex-direction: column;
    padding: 20px 0;
    justify-content: center;
  }
`

export const GifContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`

export const Gif = styled.img`
  height: 25vw;

  @media screen and (max-width: 768px) {
    height: 40vw;
  }

  @media screen and (max-width: 480px) {
    height: 60vw;
  }
`

export const TitleContainer = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 35%;
    align-items: center;
    justify-content: start;

    margin-top: 20px;
  }
`

export const Title = styled.h1`
  font-family: "Amatic SC";
  font-weight: 300;
  font-size: 9rem;
  text-shadow: var(--text-shadow);

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    font-size: 6rem;
    margin-bottom: 30px;

    text-align: center;
  }
`

export const Subtitle = styled.span`
  font-size: 3.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`
