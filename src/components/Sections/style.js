import styled from "styled-components"

export const SectionContainer = styled.section`
  width: 80%;
  min-height: 20vw;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const Title = styled.h2`
  font-family: "Amatic SC";
  font-weight: 300;
  font-size: 3.6rem;
  margin-bottom: 50px;
  text-shadow: var(--text-shadow);
  border-bottom: solid 1px var(--blue-green);
`
export const Content = styled.div`
  width: 100%;
  height: 80%;

  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
