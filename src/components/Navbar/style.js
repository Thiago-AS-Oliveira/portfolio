import styled from "styled-components"

export const Nav = styled.nav`
  width: 80%;
  height: 60px;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 90%;
  }
`

export const Content = styled.div`
  width: ${({ scrollPosition }) => (scrollPosition > 360 ? "100%" : "50vw")};
  height: 100%;
  border-radius: 0 0 10px 10px;
  backdrop-filter: var(--blur);
  box-shadow: ${({ scrollPosition }) => scrollPosition && "0px 0px 3px  #0008"};
  transition: 500ms;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionLinksContainer = styled.div`
  width: 30vw;

  position: absolute;
  right: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`

export const SectionLink = styled.a`
  font-family: "Amatic SC";
  font-size: 3rem;
  transition: 600ms;
  color: var(--silver);
  text-shadow: var(--texto-shadow);
  text-decoration: none;

  :hover {
    color: var(--blue-green);
  }

  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
`
