import styled from "styled-components";

const Container = styled.div`
  display: none;
  gap: 2rem;

  @media screen and (min-width: 751px) {
    display: flex;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`

const Navbar = () => {
  return (
    <Container>
      <StyledLink href="#home">Home</StyledLink>
      <StyledLink href="#about">About</StyledLink>
      <StyledLink href="#projects">Projects</StyledLink>
      <StyledLink href="#contact">Contact</StyledLink>
    </Container>
  )
}

export default Navbar