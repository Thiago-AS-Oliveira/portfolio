import styled from "styled-components"

export const SocialMediasContainer = styled.div`
  width: ${({ width }) => width};

  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 35vw;
  }
`

export const SocialMediasLinks = styled.a`
  font-size: 3rem;
  height: 3rem;
  color: var(--silver);
  transition: 500ms;

  :hover {
    color: var(--blue-green);
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    height: 2.2rem;
  }
`
