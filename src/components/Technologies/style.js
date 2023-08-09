import styled from "styled-components"

export const TechnologiesContainer = styled.div`
  width: 100%;
  height: 70%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2 1fr);
  row-gap: 15px;

  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4 1fr);
  }
`

export const Technologie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TechnologieSquare = styled.span`
  padding: 10px;
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  transition: 500ms;

  font-size: 5rem;
  color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :hover {
    background-color: var(--translucent-hover);
    scale: 1.1;
  }
  @media screen and (max-width: 768px) {
    :hover {
      background-color: transparent;
      scale: 1;
    }
  }
`
export const Name = styled.p`
  color: var(--silver);
  text-shadow: 1px 1px 3px #000c;
  font-size: 1.6rem;
  margin-top: 5px;
`
