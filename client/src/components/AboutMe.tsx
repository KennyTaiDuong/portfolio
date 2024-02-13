import styled, { keyframes } from "styled-components";

import Face from "../assets/people/face.jpg"
import HTML from "../assets/logo/html.png"
import CSS from "../assets/logo/css.png"
import JS from "../assets/logo/javascript.png"
import REACTJS from "../assets/logo/react.png"
import TS from "../assets/logo/typescript.png"
import NODE from "../assets/logo/node.png"

const morphAnimation = keyframes`
  0% {
    border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%;
  }

  50% {
    border-radius: 60% 60% 30% 80% / 80% 60% 70% 60%;
  }

  100% {
    border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%;
  }
`

const Container = styled.div`
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  @media screen and (max-width: 750px) {
    gap: 2rem;
  }
`

const AboutContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const TechContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  align-items: center;
`

const StackContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

const Content = styled.div`

`

const Title = styled.p`
  font-size: 4rem;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 2rem;
  color: rgb(128, 121, 121);
`

const StackTitle = styled.p`
  white-space: nowrap;
`

const Portrait = styled.img`
  animation: ${morphAnimation} 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  border: 3px solid black;
  transition: all 1s ease-in-out;
  height: 22rem; 
  width: 22rem;
`

const TechLogo = styled.img`
  height: 4rem;
  transition: 0.25s ease-in-out;

  &:hover {
    translate: 0 -1rem;
  }
`

const AboutMe = () => {
  return (
    <Container>
      <AboutContainer>
        <Content>
          <Title>Web Developer</Title>
          <Subtitle>Hello, I'm Kenny Duong. An eager React Developer located in Folsom, PA. 📍</Subtitle>
        </Content>
        <Portrait src={Face} alt="Image of Kenny's face" /> 
      </AboutContainer>
      <TechContainer>
        <StackTitle>Tech Stack |</StackTitle>
        <StackContainer>
          <TechLogo src={HTML} />
          <TechLogo src={CSS} />
          <TechLogo src={JS} />
          <TechLogo src={REACTJS} />
          <TechLogo src={TS} />
          <TechLogo src={NODE} />
        </StackContainer>
      </TechContainer>
    </Container>
  )
}

export default AboutMe